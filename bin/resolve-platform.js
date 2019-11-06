#!/usr/bin/env node
const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const RefParser = require('json-schema-ref-parser');

const loadJsonFile = async schemaPath => {
	const fileBuffer = await fs.promises.readFile(schemaPath);
	const schema = JSON.parse(fileBuffer.toString());
	return schema;
};

const getSchemaPath = (url, options) => {
	const parsed = url.match(/platform\.selfkey\.org\/schema\/(.*\.json)/)[1];
	const base = options.development ? 'dev-schema' : 'schema';
	return path.join(__dirname, '..', base, parsed);
};

const dereferenceJsonSchema = (schema, options) => {
	const resolver = {
		order: 1,
		canRead: /platform\.selfkey\.org/i,
		async read(file) {
			return loadJsonFile(getSchemaPath(file.url, options));
		},
	};
	return RefParser.dereference(schema, { resolve: { selfkey: resolver } });
};

const loadSchema = async (url, options) => {
	return loadJsonFile(getSchemaPath(url, options));
};

const loadRepository = async options => {
	const fileName = options.development ? 'dev-repository.json' : 'repository.json';
	const filePath = path.join(__dirname, '..', fileName);
	return loadJsonFile(filePath);
};

const resolveRepository = async options => {
	const repo = await loadRepository(options);

	let jsonSchemas = await Promise.all(
		repo.identityAttributes.map(async url => {
			if (typeof url !== 'string') {
				url = url.json;
			}
			const schema = await loadSchema(url, options);
			const dereferenced = await dereferenceJsonSchema(_.cloneDeep(schema), options);
			return { url, schema, dereferenced };
		})
	);
	jsonSchemas = jsonSchemas.reduce((acc, curr) => {
		acc[curr.url] = curr;
		return acc;
	}, {});
	let uiSchemas = await Promise.all(
		repo.identityAttributes
			.filter(r => typeof r !== 'string' && r.ui)
			.map(async r => {
				const schema = await loadSchema(r.ui, options);
				return { url: r.ui, schema };
			})
	);
	uiSchemas = uiSchemas.reduce((acc, curr) => {
		acc[curr.url] = curr;
		return acc;
	}, {});

	const resolvedRepository = { ...repo, jsonSchemas, uiSchemas };
	if (repo.identityAttributeSchemaId) {
		const schema = await loadSchema(repo.identityAttributeSchemaId, options);

		resolvedRepository.identityAttributeSchema = {
			url: repo.identityAttributeSchemaId,
			schema,
		};
	}
	return resolvedRepository;
};

const main = async () => {
	const options = {};
	options.development = process.env.REPO_ENV === 'development';
	try {
		const repo = await resolveRepository(options);
		console.log(JSON.stringify(repo, null, 2));
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

if (!module.parent) {
	main();
}
