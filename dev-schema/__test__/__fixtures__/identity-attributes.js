export const validPayloads = [
	{
		name: 'Basic attribute',
		value: {
			$id: 'test',
			title: 'test',
			identityAttribute: true
		}
	},
	{
		name: 'system attribute',
		value: {
			$id: 'test',
			title: 'test',
			identityAttribute: true,
			system: true
		}
	},
	{
		name: 'with repository',
		value: {
			$id: 'test',
			title: 'test',
			identityAttribute: true,
			identityAttributeRepository: 'http://test.com/'
		}
	},
	{
		name: 'with entity type individual',
		value: {
			$id: 'test',
			title: 'test',
			identityAttribute: true,
			entityType: ['individual']
		}
	},
	{
		name: 'with entity type corporate',
		value: {
			$id: 'test',
			title: 'test',
			identityAttribute: true,
			entityType: ['corporate']
		}
	},
	{
		name: 'with entity type individual and corporate',
		value: {
			$id: 'test',
			title: 'test',
			identityAttribute: true,
			entityType: ['individual', 'corporate']
		}
	},
	{
		name: 'With properties',
		value: {
			$id: 'test',
			title: 'test',
			identityAttribute: true,
			properties: {
				email: {
					type: 'string',
					format: 'email'
				}
			}
		}
	}
];

export const invalidPayloads = [
	{
		name: 'No $id',
		value: {
			title: 'test',
			identityAttribute: true
		}
	},
	{
		name: 'No title',
		value: {
			$id: 'test',
			identityAttribute: true
		}
	},
	{
		name: 'No identityAttribute flag',
		value: {
			$id: 'test',
			title: 'test'
		}
	},
	{
		name: 'identityAttribute flag not true',
		value: {
			$id: 'test',
			title: 'test',
			identityAttribute: false
		}
	},
	{
		name: 'with entity type individual and corporate and other',
		value: {
			$id: 'test',
			title: 'test',
			identityAttribute: true,
			entityType: ['individual', 'corporate', 'other']
		}
	}
];
