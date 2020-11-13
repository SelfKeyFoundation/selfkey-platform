import * as testUtils from '../../../test/utils';
import keyfiCredential from '../keyfi';
import { validPayloads, invalidPayloads } from './__fixtures__/keyfi';

describe('keyfi-credential', () => {
	let validate = null;
	let ajv = null;
	let repo = null;

	beforeAll(async () => {
		const options = { testDir: __dirname };
		ajv = await testUtils.loadAllSchemas(options);
		repo = await testUtils.loadRepository(options);
		validate = ajv.compile(keyfiCredential);
	});

	it('repo should contain keyfi', async () => {
		expect(repo.verifiableCredentials).toEqual(
			expect.arrayContaining([
				{
					id: 'http://platform.selfkey.org/schema/credentials/keyfi.json'
				}
			])
		);
	});

	it('schema should be valid', () => {
		ajv.validateSchema(keyfiCredential);
		expect(ajv.validateSchema(keyfiCredential)).toBe(true);
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
