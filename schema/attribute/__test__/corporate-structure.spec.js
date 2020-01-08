import * as testUtils from '../../../test/utils';
// import avj from 'avg';
import corporateStructure from '../corporate-structure.json';
import validPayloads from './__fixtures__/corporate-structure-valid';
import invalidPayloads from './__fixtures__/corporate-structure-invalid';

describe('corporate structure attribute', () => {
	let validate = null;
	let ajv = null;
	let repo = null;

	beforeAll(async () => {
		const options = { testDir: __dirname };
		ajv = await testUtils.loadAllSchemas(options);
		repo = await testUtils.loadRepository(options);
		validate = ajv.compile(corporateStructure);
	});

	it('repo should contain corporate structure', async () => {
		expect(repo.identityAttributes).toEqual(
			expect.arrayContaining([
				{
					json: 'http://platform.selfkey.org/schema/attribute/corporate-structure.json',
					system: 'true',
					entityType: ['corporate']
				}
			])
		);
	});

	it('corporate structure schema should be valid', () => {
		expect(ajv.validateSchema(corporateStructure)).toBe(true);
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
