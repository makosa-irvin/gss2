import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    // API tests hit a real Postgres database sequentially per file to
    // avoid unique-constraint collisions between tests running in
    // parallel against shared tables.
    fileParallelism: false,
  },
});
