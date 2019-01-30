module.exports = {
  testURL: 'http://localhost/',
  setupTestFrameworkScriptFile: '<rootDir>/jest.bin.js',
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).js'],
  coveragePathIgnorePatterns: [
    'jest.bin.js',
    'jest.config.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/(node_modules|bin|build)',
    'jest.bin.js',
    'jest.config.js',
  ],
}
