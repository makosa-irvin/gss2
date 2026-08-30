/**
 * Applies the real-photography image updates (Aug 2026 photo library
 * import) to an already-running database, WITHOUT touching anything
 * else - unlike seed.ts, this does not clear or reinsert rows. It only
 * UPDATEs the image columns on the specific destinations and tours rows
 * that changed, matched by slug. Enquiries, admin users, CRM data,
 * blog posts, testimonials, and every other column on these same rows
 * (pricing, descriptions, itineraries, etc.) are left completely alone.
 *
 * Reads server/src/db/seedData/destinations.json and tours.json - the
 * same files the seed script reads - so this can never drift out of
 * sync with what's actually committed to the repo. Safe to re-run
 * (idempotent): running it twice just writes the same values again.
 *
 * Usage:
 *   cd server
 *   DATABASE_URL="<your Railway DATABASE_URL>" npx tsx src/db/updateContentImages.ts
 *
 * Or with a server/.env file already pointed at the target database:
 *   npx tsx src/db/updateContentImages.ts
 *
 * Add --dry-run to see exactly what would change without writing
 * anything:
 *   npx tsx src/db/updateContentImages.ts --dry-run
 */
import 'dotenv/config';
import { eq } from 'drizzle-orm';
import { db, pool } from './client.js';
import { destinations, tours } from './schema.js';
import destinationsData from './seedData/destinations.json' with { type: 'json' };
import toursData from './seedData/tours.json' with { type: 'json' };

// Only these two tours actually changed in this update - listed
// explicitly rather than looping over every tour in the JSON, so this
// script's blast radius is obvious at a glance and it never silently
// rewrites images on a tour nobody asked to change.
const TOUR_SLUGS_TO_UPDATE = [
  '3-day-masai-mara-luxury-big-5-migration-safari',
  '8-day-safari-zanzibar-spice-beach-escape',
];

const isDryRun = process.argv.includes('--dry-run');

async function main() {
  console.log(isDryRun ? 'DRY RUN - no writes will be made.\n' : 'Applying updates...\n');

  let destUpdates = 0;
  let destMissing = 0;
  for (const d of destinationsData as Array<{ slug: string; heroImage: string; gallery: string[] }>) {
    const [existing] = await db.select().from(destinations).where(eq(destinations.slug, d.slug));
    if (!existing) {
      console.warn(`  SKIP destination "${d.slug}" - no matching row in this database.`);
      destMissing++;
      continue;
    }
    console.log(`  destination "${d.slug}": hero -> ${d.heroImage} (+${d.gallery.length} gallery)`);
    if (!isDryRun) {
      await db
        .update(destinations)
        .set({ heroImage: d.heroImage, gallery: d.gallery, updatedAt: new Date() })
        .where(eq(destinations.slug, d.slug));
    }
    destUpdates++;
  }

  console.log();

  let tourUpdates = 0;
  let tourMissing = 0;
  const tourMap = new Map((toursData as Array<{ slug: string; images: string[] }>).map((t) => [t.slug, t]));
  for (const slug of TOUR_SLUGS_TO_UPDATE) {
    const t = tourMap.get(slug);
    if (!t) {
      console.warn(`  SKIP tour "${slug}" - not found in seedData/tours.json (was it renamed?).`);
      continue;
    }
    const [existing] = await db.select().from(tours).where(eq(tours.slug, slug));
    if (!existing) {
      console.warn(`  SKIP tour "${slug}" - no matching row in this database.`);
      tourMissing++;
      continue;
    }
    console.log(`  tour "${slug}": images -> ${t.images.join(', ')}`);
    if (!isDryRun) {
      await db.update(tours).set({ images: t.images, updatedAt: new Date() }).where(eq(tours.slug, slug));
    }
    tourUpdates++;
  }

  console.log();
  console.log(
    `${isDryRun ? 'Would update' : 'Updated'}: ${destUpdates} destination(s), ${tourUpdates} tour(s).` +
      (destMissing || tourMissing ? ` Skipped (not found): ${destMissing} destination(s), ${tourMissing} tour(s).` : '')
  );
  if (isDryRun) console.log('\nRe-run without --dry-run to apply.');

  await pool.end();
}

main().catch((err) => {
  console.error('Update failed:', err);
  process.exit(1);
});
