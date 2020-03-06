export const validPayloads = [
	{
		name: 'Company Limited by Shares (LTD)',
		value: 'ltd'
	},
	{
		name: 'Limited Liability Company (LLC)',
		value: 'llc'
	},
	{
		name: 'Trust (TST)',
		value: 'tst'
	}
];

export const invalidPayloads = [
	{
		name: 'Unknown entity type tts',
		value: 'tts'
	},
	{
		name: 'Unknown entity type lcp',
		value: 'lcp'
	}
];
