export const validPayloads = [
	{
		name: 'Basic example',
		value: {
			reference: 'SERIAL_NUMBER_123',
			name: 'Singapore Driving Licence',
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
			unknownKey: 'unknownValue',
			evidence: [
				{
					type: 'DocumentVerification2018',
					filename: 'sample.pdf',
					mimeType: 'application/pdf',
					data: 'BASE64_ENCODED_FILE'
				},
				{
					type: 'SelfkeyCredential2020',
					repository: 'http://platform.selfkey.org/repository.json',
					id: 'http://platform.selfkey.org/credentials/keyfi.json',
					value: {
						version: 'https://schema.openattestation.com/3.0/schema.json',
						data: {
							reference:
								'50152a6f-5a64-4b19-9857-ad45bd2be60f:string:SERIAL_NUMBER_123',
							name:
								'e4aed1f1-928d-4664-a926-088ff975349f:string:Singapore Driving Licence',
							validFrom:
								'2f4f7bdb-d2f9-42d1-8437-ff841cf97c81:string:2010-01-01T19:23:24Z',
							template: {
								name: '2356a363-a63b-414a-960d-c0a95c7d6ce6:string:CUSTOM_TEMPLATE',
								type:
									'686e556f-a2c6-4458-a40c-8bf99ff83307:string:EMBEDDED_RENDERER',
								url:
									'98cf315f-45d9-479d-be41-345aa4e509ab:string:https://localhost:3000/renderer'
							},
							issuer: {
								id:
									'023f2304-3d9c-46d3-a5a2-86baae661ac5:string:https://example.com',
								name: 'cabb23f2-393d-4740-b9eb-1f7d431a7a5e:string:DEMO STORE',
								identityProof: {
									type: '60b30202-b3f3-4efd-a462-90414567b76d:string:DNS-TXT',
									location:
										'928b5286-75a7-4882-a42c-530f9a8ccd41:string:tradetrust.io'
								}
							},
							proof: {
								type:
									'dbd607cc-f88c-47d5-99df-0c679428a611:string:OpenAttestationSignature2018',
								method:
									'0d0150da-fc0e-467a-bf21-128924c2a3e8:string:DOCUMENT_STORE',
								value:
									'8a194d55-da32-433d-bbbc-9674eea258e6:string:0x9178F546D3FF57D7A6352bD61B80cCCD46199C2d'
							},
							recipient: {
								name: '07ca6916-f2d4-4e66-b6e3-eb892936eb1f:string:Recipient Name'
							},
							unknownKey: '749159d5-b600-420c-86b7-885a93647671:string:unknownValue',
							evidence: [
								{
									type:
										'47e067d6-8792-4584-bce8-c939b417761e:string:DocumentVerification2018',
									filename:
										'a03de0f7-7e7b-4004-845a-5698575584de:string:sample.pdf',
									mimeType:
										'6a1e986a-3fdb-4609-9e75-526cb5378604:string:application/pdf',
									data:
										'622d9030-aa0c-4065-8baf-445f01401246:string:BASE64_ENCODED_FILE'
								}
							]
						},
						privacy: {
							obfuscatedData: []
						},
						signature: {
							type: 'SHA3MerkleProof',
							targetHash:
								'a6ec0d8e649108377ace82fa06598131bcad343b49a5f05286d195365ead9f02',
							proof: [],
							merkleRoot:
								'a6ec0d8e649108377ace82fa06598131bcad343b49a5f05286d195365ead9f02'
						}
					}
				},
				{
					type: 'SelfkeyIdentityAttribute2020',
					repository: 'http://platform.selfkey.org/repository.json',
					id: 'http://platform.selfkey.org/schema/attribute/domicile.json',
					value: {
						name: 'Afganistan',
						value: { country: 'AF' }
					}
				}
			]
		}
	},
	{
		name: 'No evidence',
		value: {
			reference: 'SERIAL_NUMBER_123',
			name: 'Singapore Driving Licence',
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
			unknownKey: 'unknownValue'
		}
	}
];

export const invalidPayloads = [
	{
		name: 'No reference',
		value: {
			name: 'Singapore Driving Licence',
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
			unknownKey: 'unknownValue',
			evidence: [
				{
					type: 'DocumentVerification2018',
					filename: 'sample.pdf',
					mimeType: 'application/pdf',
					data: 'BASE64_ENCODED_FILE'
				}
			]
		}
	},
	{
		name: 'No issuer',
		value: {
			reference: 'SERIAL_NUMBER_123',
			name: 'Singapore Driving Licence',
			validFrom: '2010-01-01T19:23:24Z',
			template: {
				name: 'CUSTOM_TEMPLATE',
				type: 'EMBEDDED_RENDERER',
				url: 'https://localhost:3000/renderer'
			},
			proof: {
				type: 'OpenAttestationSignature2018',
				method: 'DOCUMENT_STORE',
				value: '0x9178F546D3FF57D7A6352bD61B80cCCD46199C2d'
			},
			recipient: {
				name: 'Recipient Name'
			},
			unknownKey: 'unknownValue',
			evidence: [
				{
					type: 'DocumentVerification2018',
					filename: 'sample.pdf',
					mimeType: 'application/pdf',
					data: 'BASE64_ENCODED_FILE'
				}
			]
		}
	},
	{
		name: 'No proof',
		value: {
			reference: 'SERIAL_NUMBER_123',
			name: 'Singapore Driving Licence',
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
			recipient: {
				name: 'Recipient Name'
			},
			unknownKey: 'unknownValue',
			evidence: [
				{
					type: 'DocumentVerification2018',
					filename: 'sample.pdf',
					mimeType: 'application/pdf',
					data: 'BASE64_ENCODED_FILE'
				}
			]
		}
	},
	{
		name: 'No name',
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
			unknownKey: 'unknownValue',
			evidence: [
				{
					type: 'DocumentVerification2018',
					filename: 'sample.pdf',
					mimeType: 'application/pdf',
					data: 'BASE64_ENCODED_FILE'
				}
			]
		}
	},
	{
		name: 'No valid from',
		value: {
			reference: 'SERIAL_NUMBER_123',
			name: 'Singapore Driving Licence',
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
			unknownKey: 'unknownValue',
			evidence: [
				{
					type: 'DocumentVerification2018',
					filename: 'sample.pdf',
					mimeType: 'application/pdf',
					data: 'BASE64_ENCODED_FILE'
				}
			]
		}
	},
	{
		name: 'Unknown evidence type',
		value: {
			reference: 'SERIAL_NUMBER_123',
			name: 'Singapore Driving Licence',
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
			unknownKey: 'unknownValue',
			evidence: [
				{
					type: 'test'
				}
			]
		}
	}
];
