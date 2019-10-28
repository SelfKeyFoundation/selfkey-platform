export default [
	{
		name: 'ltd with members',
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
];
