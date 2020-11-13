import * as testUtils from '../../test/utils';
import verifiableCredential from '../verifiable-credential';
import { validPayloads, invalidPayloads } from './__fixtures__/verifiable-credential';

describe('verifiable-credential', () => {
	let validate = null;
	let ajv = null;
	let repo = null;

	beforeAll(async () => {
		const options = { testDir: __dirname };
		ajv = await testUtils.loadAllSchemas(options);
		repo = await testUtils.loadRepository(options);
		validate = ajv.compile(verifiableCredential);
	});

	it('repo shouild point to credential schema id', async () => {
		expect(repo.verifiableCredentialSchemaId).toEqual(
			'http://platform.selfkey.org/schema/verifiable-credential.json'
		);
	});

	it('schema should be valid', () => {
		ajv.validateSchema(verifiableCredential);
		expect(ajv.validateSchema(verifiableCredential)).toBe(true);
	});

	const t = (payload, valid) =>
		it(`${valid ? 'valid' : 'invalid'} case test: ${payload.name}`, () => {
			const result = validate(payload.value);
			if (valid && !result) {
				console.error('validate errors:', validate.errors);
			}
			expect(result).toBe(valid);
		});

	validPayloads.forEach(payload => t(payload, true));

	invalidPayloads.forEach(payload => t(payload, false));
});
