CREATE TABLE "enquiry_attribution" (
  "enquiry_id" text PRIMARY KEY NOT NULL,
  "source" text DEFAULT 'direct' NOT NULL,
  "medium" text DEFAULT '(none)' NOT NULL,
  "campaign" text,
  "term" text,
  "content" text,
  "referrer" text,
  "landing_page" text DEFAULT '/' NOT NULL,
  "first_touch_at" timestamp DEFAULT now() NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL,
  CONSTRAINT "enquiry_attribution_enquiry_id_enquiries_id_fk" FOREIGN KEY ("enquiry_id") REFERENCES "public"."enquiries"("id") ON DELETE cascade ON UPDATE no action
);
--> statement-breakpoint
CREATE INDEX "enquiry_attribution_source_idx" ON "enquiry_attribution" USING btree ("source");
--> statement-breakpoint
CREATE INDEX "enquiry_attribution_medium_idx" ON "enquiry_attribution" USING btree ("medium");
--> statement-breakpoint
CREATE INDEX "enquiry_attribution_campaign_idx" ON "enquiry_attribution" USING btree ("campaign");
