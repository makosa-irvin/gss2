import { pgTable, text, timestamp, index } from 'drizzle-orm/pg-core';
import { enquiries } from './schema.js';

/**
 * CRM-only state is kept separate from the public enquiry payload. These
 * one-to-one tables let the sales workflow and attribution reporting evolve
 * without adding internal workflow columns to the core traveller enquiry row.
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

export const enquiryAttribution = pgTable(
  'enquiry_attribution',
  {
    enquiryId: text('enquiry_id')
      .primaryKey()
      .references(() => enquiries.id, { onDelete: 'cascade' }),
    source: text('source').notNull().default('direct'),
    medium: text('medium').notNull().default('(none)'),
    campaign: text('campaign'),
    term: text('term'),
    content: text('content'),
    referrer: text('referrer'),
    landingPage: text('landing_page').notNull().default('/'),
    firstTouchAt: timestamp('first_touch_at').notNull().defaultNow(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    index('enquiry_attribution_source_idx').on(table.source),
    index('enquiry_attribution_medium_idx').on(table.medium),
    index('enquiry_attribution_campaign_idx').on(table.campaign),
  ]
);
