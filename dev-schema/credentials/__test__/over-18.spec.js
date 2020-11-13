import * as testUtils from '../../../test/utils';
import over18 from '../over-18';
import { validPayloads, invalidPayloads } from './__fixtures__/over-18';

describe('over-18-credential', () => {
	let validate = null;
	let ajv = null;
	let repo = null;

	beforeAll(async () => {
		const options = { testDir: __dirname };
		ajv = await testUtils.loadAllSchemas(options);
		repo = await testUtils.loadRepository(options);
		validate = ajv.compile(over18);
	});

	it('repo should contain over-18', async () => {
		expect(repo.verifiableCredentials).toEqual(
			expect.arrayContaining([
				{
					id: 'http://platform.selfkey.org/schema/credentials/over-18.json'
				}
			])
		);
	});

	it('schema should be valid', () => {
		ajv.validateSchema(over18);
		expect(ajv.validateSchema(over18)).toBe(true);
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
