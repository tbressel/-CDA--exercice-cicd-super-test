import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, 
    environment: 'node', 
    include: ['**/__tests__/**/*.test.js'], 
    exclude: [...configDefaults.exclude, 'node_modules/**'], 
    coverage: {
      enabled: true, 
      reporter: ['text', 'lcov'], 
      reportsDirectory: '__tests__/coverage', 
    },
    alias: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
  },
});