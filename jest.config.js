module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/{index}.{js,jsx}',
    '!src/{stories}/*'
  ],
  coveragePathIgnorePatterns: ['node_modules', 'src/assets', '__tests__', '.history'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  coverageThreshold: {
    global: {
      statements: 26,
      branches: 50,
      functions: 33.33,
      lines: 28.26
    }
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '.*\\.d\\.js',
    '/node_modules/',
    'cypress',
    '.history'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.svg$': 'svg-jest',
    '.+\\.(css|less|sass|scss)$': 'jest-css-modules-transform'
  },
  transformIgnorePatterns: ['/node_modules/(?!react-images-upload).+\\.js$']
};
