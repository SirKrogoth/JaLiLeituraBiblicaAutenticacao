'use strict';

const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

Object.defineProperty(exports, "__esModule", { value: true });

export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['text-summary', 'lcov'],
  preset: 'ts-jest',
  setupFiles: ['dotenv/config', 'tsconfig-paths/register'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, { prefix: '<rootDir>/' }),
};

