export default [
	{
		name: 'ltd with members - observer1 position',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'individual',
						firstName: 'Maxim',
						lastName: 'Kovalov',
						email: 'test@gmail.com',
					},
					positions: [
						{
							position: 'director',
						},
						{
							position: 'shareholder',
							equity: 19,
						},
					],
				},
				{
					entity: {
						type: 'corporate',
						companyType: 'Company Limited by Shares (LTD)',
						companyName: 'Test Company name',
						email: 'test@company.org',
					},
					positions: [
						{
							position: 'observer1',
						},
					],
				},
			],
		},
	},
	{
		name: 'ltd with missing members',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
		},
	},
	{
		name: 'invalid company type',
		value: {
			companyType: 'invalid',
			members: [],
		},
	},
	{
		name: 'ltd empty position',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'individual',
						firstName: 'Maxim',
						lastName: 'Kovalov',
						email: 'test@gmail.com',
					},
					positions: [],
				},
			],
		},
	},
	{
		name: 'ltd missing positions',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'individual',
						firstName: 'Maxim',
						lastName: 'Kovalov',
						email: 'test@gmail.com',
					},
				},
			],
		},
	},
	{
		name: 'ltd no entity',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					positions: [
						{
							position: 'director',
						},
					],
				},
			],
		},
	},
	{
		name: 'ltd no position name',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'individual',
						firstName: 'Maxim',
						lastName: 'Kovalov',
						email: 'test@gmail.com',
					},
					positions: [{}],
				},
			],
		},
	},
	{
		name: 'ltd invalid entity type',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'invalid',
						email: 'test@gmail.com',
					},
					positions: [{ position: 'director' }],
				},
			],
		},
	},
	{
		name: 'ltd individual entity missing email',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'individual',
					},
					positions: [{ position: 'director' }],
				},
			],
		},
	},
	{
		name: 'ltd corporate entity missing email',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'corporate',
						companyType: 'Company Limited by Shares (LTD)',
						companyName: 'test-company'
					},
					positions: [{ position: 'director' }],
				},
			],
		},
	},
	{
		name: 'ltd entity missing type',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						email: 'type@type.com',
					},
					positions: [{ position: 'director' }],
				},
			],
		},
	},
	{
		name: 'ltd invalid equity 101',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'individual',
						email: 'type@type.com',
					},
					positions: [{ position: 'director' }, { position: 'shareholder', equity: 101 }],
				},
			],
		},
	},
	{
		name: 'ltd invalid equity "test"',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'individual',
						email: 'type@type.com',
					},
					positions: [{ position: 'director' }, { position: 'shareholder', equity: 'test' }],
				},
			],
		},
	},
	{
		name: 'ltd invalid equity -1',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'individual',
						email: 'type@type.com',
					},
					positions: [{ position: 'director' }, { position: 'shareholder', equity: -1 }],
				},
			],
		},
	},
	{
		name: 'ltd duplicate position',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'individual',
						email: 'type@type.com',
					},
					positions: [{ position: 'director' }, { position: 'director' }],
				},
			],
		},
	},
	{
		name: 'llc invalid position director',
		value: {
			companyType: 'Limited Liability Company (LLC)',
			members: [
				{
					entity: {
						type: 'individual',
						email: 'type@type.com',
					},
					positions: [{ position: 'director' }],
				},
			],
		},
	},
	{
		name: 'llc corporate member invalid company type',
		value: {
			companyType: 'Limited Liability Company (LLC)',
			members: [
				{
					entity: {
						type: 'corporate',
						companyType: 'test',
						companyName: 'test-company',
						email: 'type@type.com',
					},
					positions: [{ position: 'manager' }],
				},
			],
		},
	},
	,
	{
		name: 'llc corporate member invalid company type',
		value: {
			companyType: 'Limited Liability Company (LLC)',
			members: [
				{
					entity: {
						type: 'corporate',
						companyType: 'test',
						companyName: 'test-company',
						email: 'type@type.com',
					},
					positions: [{ position: 'manager' }],
				},
			],
		},
	},
	{
		name: 'llc corporate member no company name',
		value: {
			companyType: 'Limited Liability Company (LLC)',
			members: [
				{
					entity: {
						type: 'corporate',
						companyType: 'Limited Liability Company (LLC)',
						email: 'type@type.com',
					},
					positions: [{ position: 'manager' }],
				},
			],
		},
	},{
		name: 'llc corporate member no company type',
		value: {
			companyType: 'Limited Liability Company (LLC)',
			members: [
				{
					entity: {
						type: 'corporate',
						companyName: 'test-company',
						email: 'type@type.com',
					},
					positions: [{ position: 'manager' }],
				},
			],
		},
	},
];
