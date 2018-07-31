module.exports = {
  testURL: 'http://localhost/',
  setupTestFrameworkScriptFile: '<rootDir>/bin/jest.js',
  moduleFileExtensions: ['js', 'jsx', 'scss', 'html'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/bin/preprocessor.js',
    '.scss': '<rootDir>/node_modules/jest-css-modules',
  },
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).(js|jsx)'],
  testPathIgnorePatterns: ['<rootDir>/(node_modules|bin|build)'],
}
