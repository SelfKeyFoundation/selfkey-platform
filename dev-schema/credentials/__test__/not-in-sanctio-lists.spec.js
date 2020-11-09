import * as testUtils from '../../../test/utils';
import notInSanctions from '../not-in-sanction-lists';
import { validPayloads, invalidPayloads } from './__fixtures__/not-in-sanction-lists';

describe('not in sanction lists credential', () => {
	let validate = null;
	let ajv = null;
	let repo = null;

	beforeAll(async () => {
		const options = { testDir: __dirname };
		ajv = await testUtils.loadAllSchemas(options);
		repo = await testUtils.loadRepository(options);
		validate = ajv.compile(notInSanctions);
	});

	it('repo should contain not in sanction lists credential', async () => {
		expect(repo.verifiableCredentials).toEqual(
			expect.arrayContaining([
				{
					id: 'http://platform.selfkey.org/schema/credentials/not-in-sanction-lists.json'
				}
			])
		);
	});

	it('schema should be valid', () => {
		ajv.validateSchema(notInSanctions);
		expect(ajv.validateSchema(notInSanctions)).toBe(true);
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
