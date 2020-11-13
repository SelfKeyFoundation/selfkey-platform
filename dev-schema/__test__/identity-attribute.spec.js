import * as testUtils from '../../test/utils';
import identityAttribute from '../identity-attribute';
import { validPayloads, invalidPayloads } from './__fixtures__/identity-attributes';

describe('identity-attribute', () => {
	let validate = null;
	let ajv = null;
	let repo = null;

	beforeAll(async () => {
		const options = { testDir: __dirname };
		ajv = await testUtils.loadAllSchemas(options);
		repo = await testUtils.loadRepository(options);
		validate = ajv.compile(identityAttribute);
	});

	it('repo shouild point to identity attribute schema id', async () => {
		expect(repo.identityAttributeSchemaId).toEqual(
			'http://platform.selfkey.org/schema/identity-attribute.json'
		);
	});

	it('schema should be valid', () => {
		ajv.validateSchema(identityAttribute);
		expect(ajv.validateSchema(identityAttribute)).toBe(true);
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
