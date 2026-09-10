import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    // Password hashing and real Postgres setup can exceed Vitest's small
    // defaults on constrained CI runners. Keep the suite deterministic
    // without weakening the production bcrypt cost.
    testTimeout: 30_000,
    hookTimeout: 30_000,
    // API tests hit a real Postgres database sequentially per file to
    // avoid unique-constraint collisions between tests running in
    // parallel against shared tables.
    fileParallelism: false,
  },
});
