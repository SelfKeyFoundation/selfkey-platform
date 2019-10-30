module.exports = {
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	modulePaths: ['<rootDir>/src'],
	testMatch: ['**/*.spec.js'],
	verbose: true,
	testEnvironment: 'jsdom',
	testURL: 'http://localhost/',
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
};
