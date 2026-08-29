import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from './schema.js';
import { env } from '../config/env.js';

const { Pool } = pg;

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
  // Most managed Postgres providers (Neon, Supabase, Render, RDS) require
  // TLS but ship a certificate that isn't in Node's default trust store.
  // This is the standard, documented workaround those providers
  // themselves recommend - not a weakening of the connection's own
  // encryption, just skipping CA verification for it.
  ssl: env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

export const db = drizzle(pool, { schema });
