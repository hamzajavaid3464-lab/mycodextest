const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/data/(.*)$': '<rootDir>/src/data/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/content/(.*)$': '<rootDir>/src/content/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};

module.exports = createJestConfig(customJestConfig);
