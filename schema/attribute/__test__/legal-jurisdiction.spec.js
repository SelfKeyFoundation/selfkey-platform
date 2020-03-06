import * as testUtils from '../../../test/utils';
// import avj from 'avg';
import legalJurisdiction from '../legal-jurisdiction.json';
import { validPayloads, invalidPayloads } from './__fixtures__/legal-jurisdiction';

describe('legal-jurisdiction attribute', () => {
	let validate = null;
	let ajv = null;
	let repo = null;

	beforeAll(async () => {
		const options = { testDir: __dirname };
		ajv = await testUtils.loadAllSchemas(options);
		repo = await testUtils.loadRepository(options);
		validate = ajv.compile(legalJurisdiction);
	});

	it('repo should contain legal-jurisdiction', async () => {
		expect(repo.identityAttributes).toEqual(
			expect.arrayContaining([
				{
					json: 'http://platform.selfkey.org/schema/attribute/legal-jurisdiction.json',
					ui: 'http://platform.selfkey.org/schema/ui/legal-jurisdiction.json',
					entityType: ['corporate']
				}
			])
		);
	});

	it('legal-jurisdiction schema should be valid', () => {
		ajv.validateSchema(legalJurisdiction);
		expect(ajv.validateSchema(legalJurisdiction)).toBe(true);
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
