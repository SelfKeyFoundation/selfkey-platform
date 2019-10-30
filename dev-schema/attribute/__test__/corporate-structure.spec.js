import * as testUtils from '../../../test/utils';
// import avj from 'avg';
import corporateStructure from '../corporate-structure.json';
import validPayloads from './__fixtures__/corporate-structure-valid';
import invalidPayloads from './__fixtures__/corporate-structure-invalid';

describe('corporate structure attribute', () => {

	let validate = null;
	let ajv = null;
	beforeAll(async () => {
		ajv = await testUtils.loadAllSchemas({ testDir: __dirname });
		validate = ajv.compile(corporateStructure);
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
