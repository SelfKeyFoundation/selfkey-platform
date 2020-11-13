import glob from 'glob-promise';
import Ajv from 'ajv';
import path from 'path';
import fs from 'fs';

export const getSchemaBase = dir => {
	if (/dev-schema/.test(dir)) {
		return path.join(__dirname, '../dev-schema');
	}
	return path.join(__dirname, '../schema');
};

export const getRepositoryPath = dir => {
	if (/dev-schema/.test(dir)) {
		return path.join(__dirname, '../dev-repository.json');
	}
	return path.join(__dirname, '../repository.json');
};

export const loadRepository = async (options = {}) => {
	const { testDir = __dirname } = options;
	const repoPath = getRepositoryPath(testDir);
	const repo = await loadOneSchema(repoPath);
	return repo;
};

export const loadOneSchema = async schemaPath => {
	const fileBuffer = await fs.promises.readFile(schemaPath);
	const schema = JSON.parse(fileBuffer.toString());
	return schema;
};

export const createAjvObj = (metaSchemas = [], schemas = []) => {
	const ajv = new Ajv({ validateSchema: false });
	ajv.addFormat('file', () => {});
	if (metaSchemas) metaSchemas.filter(s => !!s).forEach(schema => ajv.addMetaSchema(schema));
	if (schemas) schemas.forEach(schema => ajv.addSchema(schema));
	return ajv;
};

export const loadAllSchemas = async (options = {}) => {
	const { testDir = __dirname } = options;
	const base = getSchemaBase(testDir);
	try {
		const matches = await glob(`${base}/**/*.json`, {
			ignore: [
				`${base}/ui/**/*.json`,
				`${base}/identity-attribute.json`,
				`${base}/verifiable-credential.json`
			]
		});
		const schemas = await Promise.all(matches.map(loadOneSchema));
		const attributeSchema = await loadOneSchema(`${base}/identity-attribute.json`);
		let credentialsSchema;
		try {
			credentialsSchema = await loadOneSchema(`${base}/verifiable-credential.json`);
		} catch (error) {}
		return createAjvObj([attributeSchema, credentialsSchema], schemas);
	} catch (error) {
		console.error(error);
	}
};
