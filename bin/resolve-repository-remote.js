#!/usr/bin/env node
const fetch = require('node-fetch');
const RefParser = require('json-schema-ref-parser');
const URL_REGEXP = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

async function fetchRepository(repoUrl) {
	let repo;
	try {
		repo = await fetch(repoUrl);
		repo = await repo.json();
		if (!repo.identityAttributes) throw new Error('Repository does not contain any attributes');
		return repo;
	} catch (error) {
		console.error('Could not fetch repository at', repoUrl);
		console.error(error.message);
	}
	return null;
}

async function fetchJsonSchema(url) {
	let schema;
	try {
		schema = await fetch(url);
		schema = await schema.json();
		return RefParser.dereference(schema);
	} catch (error) {
		console.error('Could not fetch json schema at', url);
		console.error(error.message);
		throw error;
	}
}

async function fetchUiSchema(url) {
	let schema;
	try {
		schema = await fetch(url);
		return schema.json();
	} catch (error) {
		console.error('Could not fetch ui schema at', url);
		console.error(error.message);
		throw error;
	}
}

function usage() {
	console.log(`Usage: ${process.argv[1]} <repository-url> > resolved-repository.json`);
}

async function main() {
	if (process.argv.length !== 3) {
		usage();
		process.exit(1);
	}
	const repoUrl = process.argv[2];
	let jsonSchemas = [];
	let uiSchemas = [];

	if (!URL_REGEXP.test(repoUrl)) {
		console.error('Invalid repository url', repoUrl);
		process.exit(1);
	}
	let repo = await fetchRepository(repoUrl);
	try {
		jsonSchemas = await Promise.all(
			repo.identityAttributes.map(r => {
				if (typeof r !== 'string') {
					r = r.json;
				}
				return fetchJsonSchema(r);
			})
		);
		uiSchemas = await Promise.all(
			repo.identityAttributes.filter(r => typeof r !== 'string' && r.ui).map(r => fetchUiSchema(r.ui))
		);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
	console.log(JSON.stringify({ ...repo, jsonSchemas, uiSchemas }, null, 2));
}

if (!module.parent) {
	main();
}
