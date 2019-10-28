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

export const loadOneSchema = async schemaPath => {
	const fileBuffer = await fs.promises.readFile(schemaPath);
	const schema = JSON.parse(fileBuffer.toString());
	return schema;
};

export const loadAllSchemas = async (options = {}) => {
	const { testDir = __dirname } = options;
	const base = getSchemaBase(testDir);
	try {
		const matches = await glob(`${base}/**/*.json`, {
			ignore: [`${base}/ui/**/*.json`, `${base}/identity-attribute.json`],
		});
		const schemas = await Promise.all(matches.map(loadOneSchema));
		const metaSchema = await loadOneSchema(`${base}/identity-attribute.json`);
		const ajv = new Ajv({ validateSchema: false });
		ajv.addFormat('file', () => {});
		ajv.addMetaSchema(metaSchema);
		schemas.forEach(schema => ajv.addSchema(schema));
		return ajv;
	} catch (error) {
		console.error(error);
	}
};
