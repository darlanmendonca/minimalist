module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/bin/jest.js',
  moduleFileExtensions: ['js', 'jsx', 'scss', 'html'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(js|jsx|html|scss)$': '<rootDir>/bin/preprocessor.js',
  },
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).(js|jsx)'],
  testPathIgnorePatterns: ['<rootDir>/(node_modules|bin|build)'],
}
