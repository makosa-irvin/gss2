import { pgTable, text, timestamp, index } from 'drizzle-orm/pg-core';
import { enquiries } from './schema.js';

/**
 * CRM-only state is kept separate from the public enquiry payload. This
 * one-to-one table lets the sales workflow evolve without making customer
 * enquiry submissions responsible for internal follow-up fields.
 */
export const enquiryFollowUps = pgTable(
  'enquiry_follow_ups',
  {
    enquiryId: text('enquiry_id')
      .primaryKey()
      .references(() => enquiries.id, { onDelete: 'cascade' }),
    followUpAt: timestamp('follow_up_at').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (table) => [index('enquiry_follow_ups_follow_up_at_idx').on(table.followUpAt)]
);
