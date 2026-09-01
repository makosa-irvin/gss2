/**
 * One-off admin password reset - for when the current password is lost
 * or unknown, so the in-app "change password" flow (which requires the
 * current password) can't be used. Directly updates the stored hash for
 * an existing admin_users row and sends the same security notification
 * email as a normal in-app change.
 *
 * Usage:
 *   npm run reset-admin-password -- admin@goodsecretssafaris.com 'NewPassword123!'
 *
 * Or, if args are awkward to pass through a platform's run command
 * (e.g. `railway run`), set ADMIN_RESET_EMAIL / ADMIN_RESET_PASSWORD
 * and run with no arguments:
 *   ADMIN_RESET_EMAIL=admin@goodsecretssafaris.com ADMIN_RESET_PASSWORD='NewPassword123!' npm run reset-admin-password
 *
 * Unlike seed.ts, this only ever touches one existing admin_users row -
 * it never clears or reseeds any other data, and is safe to run in
 * production.
 */
import 'dotenv/config';
import { eq } from 'drizzle-orm';
import { db, pool } from './client.js';
import { adminUsers } from './schema.js';
import { hashPassword } from '../lib/auth.js';
import { sendAdminPasswordChangedNotification } from '../lib/email.js';

async function main() {
  const [argEmail, argPassword] = process.argv.slice(2);
  const email = argEmail || process.env.ADMIN_RESET_EMAIL;
  const password = argPassword || process.env.ADMIN_RESET_PASSWORD;

  if (!email || !password) {
    console.error(
      'Usage: npm run reset-admin-password -- <email> <newPassword>\n' +
        '  (or set ADMIN_RESET_EMAIL and ADMIN_RESET_PASSWORD and run with no arguments)'
    );
    process.exit(1);
  }

  if (password.length < 8) {
    console.error('New password must be at least 8 characters.');
    process.exit(1);
  }

  const [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);
  if (!user) {
    console.error(
      `No admin user found with email "${email}". Check the address, or run \`npm run seed\` ` +
        '(with ALLOW_DESTRUCTIVE_SEED=true) to create the first admin from SEED_ADMIN_EMAIL/SEED_ADMIN_PASSWORD ' +
        'if the admin_users table is genuinely empty.'
    );
    process.exit(1);
  }

  const passwordHash = await hashPassword(password);
  await db.update(adminUsers).set({ passwordHash }).where(eq(adminUsers.id, user.id));
  console.log(`Password updated for ${user.email}.`);

  try {
    await sendAdminPasswordChangedNotification({ email: user.email, name: user.name });
    console.log('Security notification email sent.');
  } catch (err) {
    console.error('Password was updated, but the notification email failed to send:', err);
  }

  await pool.end();
}

main().catch((err) => {
  console.error('Password reset failed:', err);
  process.exit(1);
});
