const { defaults: tsJestConfig } = require('ts-jest/presets')

module.exports = {
	...tsJestConfig,
	preset                 : 'jest-expo',
	transform              : {
		...tsJestConfig.transform,
		'\\.js$' : '<rootDir>/node_modules/react-native/jest/preprocessor.js'
	},
	globals                : {
		'ts-jest' : {
			babelConfig : false,
			tsconfig    : './tsconfig.jest.json'
		}
	},
	modulePaths            : [
		'<rootDir>'
	],
	testPathIgnorePatterns : [
		'/cypress/'
	]
}
