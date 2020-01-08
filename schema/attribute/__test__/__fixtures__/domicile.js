export const validPayloads = [
	{
		name: 'Afganistan',
		value: { country: 'AF' }
	}
];

export const invalidPayloads = [
	{
		name: 'Unknown',
		value: { country: 'unknown' }
	},
	{
		name: 'No Country',
		value: {}
	},
	{
		name: 'Empty Country',
		value: { country: '' }
	}
];
