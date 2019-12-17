export default [
	{
		name: 'ltd full',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: [
				{
					entity: {
						type: 'individual',
						firstName: 'Maxim',
						lastName: 'Kovalov',
						email: 'test@gmail.com'
					},
					positions: [
						{
							position: 'director-ltd'
						},
						{
							position: 'shareholder',
							equity: 19
						},
						{
							position: 'ubo'
						},
						{
							position: 'observer'
						},
						{
							position: 'authorizedSignatory'
						}
					]
				},
				{
					entity: {
						type: 'corporate',
						companyType: 'Company Limited by Shares (LTD)',
						companyName: 'Test Company name',
						email: 'test@company.org'
					},
					positions: [
						{
							position: 'director-ltd'
						},
						{
							position: 'shareholder',
							equity: 19
						},
						{
							position: 'ubo'
						},
						{
							position: 'observer'
						},
						{
							position: 'authorizedSignatory'
						}
					]
				}
			]
		}
	},
	{
		name: 'ltd with empty members',
		value: {
			companyType: 'Company Limited by Shares (LTD)',
			members: []
		}
	},
	{
		name: 'llc full',
		value: {
			companyType: 'Limited Liability Company (LLC)',
			members: [
				{
					entity: {
						type: 'individual',
						firstName: 'Maxim',
						lastName: 'Kovalov',
						email: 'test@gmail.com'
					},
					positions: [
						{
							position: 'manager'
						},
						{
							position: 'member-llc',
							equity: 19
						},
						{
							position: 'ubo'
						},
						{
							position: 'observer'
						},
						{
							position: 'authorizedSignatory'
						}
					]
				},
				{
					entity: {
						type: 'corporate',
						companyType: 'Company Limited by Shares (LTD)',
						companyName: 'Test Company name',
						email: 'test@company.org'
					},
					positions: [
						{
							position: 'manager'
						},
						{
							position: 'member-llc',
							equity: 19
						},
						{
							position: 'ubo'
						},
						{
							position: 'observer'
						},
						{
							position: 'authorizedSignatory'
						}
					]
				}
			]
		}
	},
	{
		name: 'tst full',
		value: {
			companyType: 'Trust (TST)',
			members: [
				{
					entity: {
						type: 'individual',
						firstName: 'Maxim',
						lastName: 'Kovalov',
						email: 'test@gmail.com'
					},
					positions: [
						{
							position: 'grantor'
						},
						{
							position: 'beneficiary-tst'
						},
						{
							position: 'trustee'
						},
						{
							position: 'protector'
						},
						{
							position: 'ubo'
						},
						{
							position: 'observer'
						},
						{
							position: 'authorizedSignatory'
						}
					]
				},
				{
					entity: {
						type: 'corporate',
						companyType: 'Company Limited by Shares (LTD)',
						companyName: 'Test Company name',
						email: 'test@company.org'
					},
					positions: [
						{
							position: 'grantor'
						},
						{
							position: 'beneficiary-tst'
						},
						{
							position: 'trustee'
						},
						{
							position: 'protector'
						},
						{
							position: 'ubo'
						},
						{
							position: 'observer'
						},
						{
							position: 'authorizedSignatory'
						}
					]
				}
			]
		}
	},
	{
		name: 'llp full',
		value: {
			companyType: 'Limited Partnership (LLP)',
			members: [
				{
					entity: {
						type: 'individual',
						firstName: 'Maxim',
						lastName: 'Kovalov',
						email: 'test@gmail.com'
					},
					positions: [
						{
							position: 'general-partner',
							equity: 2
						},
						{
							position: 'limited-partner',
							equity: 20
						},
						{
							position: 'ubo'
						},
						{
							position: 'observer'
						},
						{
							position: 'authorizedSignatory'
						}
					]
				},
				{
					entity: {
						type: 'corporate',
						companyType: 'Company Limited by Shares (LTD)',
						companyName: 'Test Company name',
						email: 'test@company.org'
					},
					positions: [
						{
							position: 'general-partner',
							equity: 2
						},
						{
							position: 'limited-partner',
							equity: 20
						},
						{
							position: 'ubo'
						},
						{
							position: 'observer'
						},
						{
							position: 'authorizedSignatory'
						}
					]
				}
			]
		}
	},
	{
		name: 'other company full',
		value: {
			companyType: 'Other',
			members: [
				{
					entity: {
						type: 'individual',
						firstName: 'Maxim',
						lastName: 'Kovalov',
						email: 'test@gmail.com'
					},
					positions: [
						{
							position: 'member',
							equity: 2
						},

						{
							position: 'ubo'
						},
						{
							position: 'observer'
						},
						{
							position: 'authorizedSignatory'
						}
					]
				},
				{
					entity: {
						type: 'corporate',
						companyType: 'Company Limited by Shares (LTD)',
						companyName: 'Test Company name',
						email: 'test@company.org'
					},
					positions: [
						{
							position: 'member',
							equity: 2
						},
						{
							position: 'ubo'
						},
						{
							position: 'observer'
						},
						{
							position: 'authorizedSignatory'
						}
					]
				}
			]
		}
	}
];
