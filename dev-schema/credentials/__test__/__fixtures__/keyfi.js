export const validPayloads = [
	{
		name: 'KeFi valid',
		value: {
			reference: 'SERIAL_NUMBER_123',
			name: 'KeyFi Eligibility Credential',
			validFrom: '2010-01-01T19:23:24Z',
			template: {
				name: 'CUSTOM_TEMPLATE',
				type: 'EMBEDDED_RENDERER',
				url: 'https://localhost:3000/renderer'
			},
			issuer: {
				id: 'https://example.com',
				name: 'DEMO STORE',
				identityProof: {
					type: 'DNS-TXT',
					location: 'tradetrust.io'
				}
			},
			proof: {
				type: 'OpenAttestationSignature2018',
				method: 'DOCUMENT_STORE',
				value: '0x9178F546D3FF57D7A6352bD61B80cCCD46199C2d'
			},
			recipient: {
				name: 'Recipient Name'
			},
			keyfiEligibility: true
		}
	}
];

export const invalidPayloads = [
	{
		name: 'KeFi invalid according to general schema (no name)',
		value: {
			reference: 'SERIAL_NUMBER_123',
			validFrom: '2010-01-01T19:23:24Z',
			template: {
				name: 'CUSTOM_TEMPLATE',
				type: 'EMBEDDED_RENDERER',
				url: 'https://localhost:3000/renderer'
			},
			issuer: {
				id: 'https://example.com',
				name: 'DEMO STORE',
				identityProof: {
					type: 'DNS-TXT',
					location: 'tradetrust.io'
				}
			},
			proof: {
				type: 'OpenAttestationSignature2018',
				method: 'DOCUMENT_STORE',
				value: '0x9178F546D3FF57D7A6352bD61B80cCCD46199C2d'
			},
			recipient: {
				name: 'Recipient Name'
			},
			keyfiEligibility: true
		}
	},
	{
		name: 'no eligibility flag',
		value: {
			reference: 'SERIAL_NUMBER_123',
			name: 'KeyFi Eligibility Credential',
			validFrom: '2010-01-01T19:23:24Z',
			template: {
				name: 'CUSTOM_TEMPLATE',
				type: 'EMBEDDED_RENDERER',
				url: 'https://localhost:3000/renderer'
			},
			issuer: {
				id: 'https://example.com',
				name: 'DEMO STORE',
				identityProof: {
					type: 'DNS-TXT',
					location: 'tradetrust.io'
				}
			},
			proof: {
				type: 'OpenAttestationSignature2018',
				method: 'DOCUMENT_STORE',
				value: '0x9178F546D3FF57D7A6352bD61B80cCCD46199C2d'
			},
			recipient: {
				name: 'Recipient Name'
			}
		}
	},
	{
		name: 'eligibility flag false',
		value: {
			reference: 'SERIAL_NUMBER_123',
			name: 'KeyFi Eligibility Credential',
			validFrom: '2010-01-01T19:23:24Z',
			template: {
				name: 'CUSTOM_TEMPLATE',
				type: 'EMBEDDED_RENDERER',
				url: 'https://localhost:3000/renderer'
			},
			issuer: {
				id: 'https://example.com',
				name: 'DEMO STORE',
				identityProof: {
					type: 'DNS-TXT',
					location: 'tradetrust.io'
				}
			},
			proof: {
				type: 'OpenAttestationSignature2018',
				method: 'DOCUMENT_STORE',
				value: '0x9178F546D3FF57D7A6352bD61B80cCCD46199C2d'
			},
			recipient: {
				name: 'Recipient Name'
			},
			keyfiEligibility: false
		}
	}
];