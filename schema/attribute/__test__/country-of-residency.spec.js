import * as testUtils from '../../../test/utils';
// import avj from 'avg';
import countryOfResidency from '../country-of-residency.json';
import { validPayloads, invalidPayloads } from './__fixtures__/country-of-residency';

describe('country-of-residency attribute', () => {
	let validate = null;
	let ajv = null;
	let repo = null;

	beforeAll(async () => {
		const options = { testDir: __dirname };
		ajv = await testUtils.loadAllSchemas(options);
		repo = await testUtils.loadRepository(options);
		validate = ajv.compile(countryOfResidency);
	});

	it('repo should contain country of residency', async () => {
		expect(repo.identityAttributes).toEqual(
			expect.arrayContaining([
				{
					json: 'http://platform.selfkey.org/schema/attribute/country-of-residency.json',
					ui: 'http://platform.selfkey.org/schema/ui/country-of-residency.json',
					entityType: ['individual']
				}
			])
		);
	});

	it('country-of-residency schema should be valid', () => {
		expect(ajv.validateSchema(countryOfResidency)).toBe(true);
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
