import * as testUtils from '../../../test/utils';
// import avj from 'avg';
import legalEntityType from '../legal-entity-type.json';
import { validPayloads, invalidPayloads } from './__fixtures__/legal-entity-type';

describe('legal-entity-type attribute', () => {
	let validate = null;
	let ajv = null;
	let repo = null;

	beforeAll(async () => {
		const options = { testDir: __dirname };
		ajv = await testUtils.loadAllSchemas(options);
		repo = await testUtils.loadRepository(options);
		validate = ajv.compile(legalEntityType);
	});

	it('repo should contain legal-entity-type', async () => {
		expect(repo.identityAttributes).toEqual(
			expect.arrayContaining([
				{
					json: 'http://platform.selfkey.org/schema/attribute/legal-entity-type.json',
					ui: 'http://platform.selfkey.org/schema/ui/legal-entity-type.json',
					entityType: ['corporate']
				}
			])
		);
	});

	it('legal-entity-type schema should be valid', () => {
		ajv.validateSchema(legalEntityType);
		expect(ajv.validateSchema(legalEntityType)).toBe(true);
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
