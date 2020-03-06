export default [
	{
		name: 'ltd full',
		value: {
			companyType: 'ltd',
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
						companyType: 'ltd',
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
			companyType: 'ltd',
			members: []
		}
	},
	{
		name: 'llc full',
		value: {
			companyType: 'llc',
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
						companyType: 'ltd',
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
			companyType: 'tst',
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
						companyType: 'ltd',
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
			companyType: 'llp',
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
						companyType: 'ltd',
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
			companyType: 'other',
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
						companyType: 'ltd',
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
