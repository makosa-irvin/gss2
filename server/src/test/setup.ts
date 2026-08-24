import 'dotenv/config';

// Tests run against a real Postgres database (see README "Testing") -
// DATABASE_URL must point at a real, disposable database, never
// production. This is intentionally not mocked: the value of these
// tests is proving the actual SQL, constraints, and auth flow work,
// which a mocked DB client can't catch.
if (!process.env.DATABASE_URL?.includes('localhost') && !process.env.CI) {
  console.warn(
    'WARNING: DATABASE_URL does not look like a local database. ' +
      'Refusing to run tests that mutate data against what might be production.'
  );
  process.exit(1);
}
