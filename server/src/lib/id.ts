import { randomBytes } from 'node:crypto';

/**
 * Generates a URL-safe, sortable-enough unique ID, e.g. "tr_9f2a1c7b3e0d4488".
 * Not a full cuid2/nanoid implementation - just enough randomness (8 bytes
 * = 64 bits) that collisions are astronomically unlikely for this app's
 * scale, without adding another dependency for it.
 */
export function createId(prefix = 'id'): string {
  return `${prefix}_${randomBytes(12).toString('hex')}`;
}
