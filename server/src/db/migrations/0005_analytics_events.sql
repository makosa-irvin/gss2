CREATE TABLE IF NOT EXISTS "analytics_events" (
  "id" text PRIMARY KEY NOT NULL,
  "session_id" text NOT NULL,
  "event_name" text NOT NULL,
  "page_path" text,
  "source" text DEFAULT 'direct' NOT NULL,
  "medium" text DEFAULT '(none)' NOT NULL,
  "campaign" text,
  "metadata" jsonb DEFAULT '{}'::jsonb NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "analytics_events_created_at_idx" ON "analytics_events" USING btree ("created_at");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "analytics_events_session_id_idx" ON "analytics_events" USING btree ("session_id");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "analytics_events_event_name_idx" ON "analytics_events" USING btree ("event_name");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "analytics_events_source_idx" ON "analytics_events" USING btree ("source");
