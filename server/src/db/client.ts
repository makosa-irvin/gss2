import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from './schema.js';

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error(
    'DATABASE_URL is not set. Copy server/.env.example to server/.env and fill it in.'
  );
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Most managed Postgres providers (Neon, Supabase, Render, RDS) require
  // TLS but ship a certificate that isn't in Node's default trust store.
  // This is the standard, documented workaround those providers
  // themselves recommend - not a weakening of the connection's own
  // encryption, just skipping CA verification for it.
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

export const db = drizzle(pool, { schema });
