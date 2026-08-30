import { pgTable, text, timestamp, jsonb, index } from 'drizzle-orm/pg-core';
import { createId } from '../lib/id.js';

export const analyticsEvents = pgTable(
  'analytics_events',
  {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    sessionId: text('session_id').notNull(),
    eventName: text('event_name').notNull(),
    pagePath: text('page_path'),
    source: text('source').notNull().default('direct'),
    medium: text('medium').notNull().default('(none)'),
    campaign: text('campaign'),
    metadata: jsonb('metadata').$type<Record<string, string | number | boolean | null>>().notNull().default({}),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    index('analytics_events_created_at_idx').on(table.createdAt),
    index('analytics_events_session_id_idx').on(table.sessionId),
    index('analytics_events_event_name_idx').on(table.eventName),
    index('analytics_events_source_idx').on(table.source),
  ]
);
