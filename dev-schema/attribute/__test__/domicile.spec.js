import * as testUtils from '../../../test/utils';
// import avj from 'avg';
import domicile from '../domicile.json';
import { validPayloads, invalidPayloads } from './__fixtures__/domicile';

describe('domicile attribute', () => {
	let validate = null;
	let ajv = null;
	let repo = null;

	beforeAll(async () => {
		const options = { testDir: __dirname };
		ajv = await testUtils.loadAllSchemas(options);
		repo = await testUtils.loadRepository(options);
		validate = ajv.compile(domicile);
	});

	it('repo should contain domicile', async () => {
		expect(repo.identityAttributes).toEqual(
			expect.arrayContaining([
				{
					json: 'http://platform.selfkey.org/schema/attribute/domicile.json',
					ui: 'http://platform.selfkey.org/schema/ui/domicile.json',
					entityType: ['corporate']
				}
			])
		);
	});

	it('domicile schema should be valid', () => {
		expect(ajv.validateSchema(domicile)).toBe(true);
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
