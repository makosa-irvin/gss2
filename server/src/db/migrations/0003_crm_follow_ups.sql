CREATE TABLE "enquiry_follow_ups" (
  "enquiry_id" text PRIMARY KEY NOT NULL,
  "follow_up_at" timestamp NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "enquiry_follow_ups" ADD CONSTRAINT "enquiry_follow_ups_enquiry_id_enquiries_id_fk" FOREIGN KEY ("enquiry_id") REFERENCES "public"."enquiries"("id") ON DELETE cascade ON UPDATE no action;
--> statement-breakpoint
CREATE INDEX "enquiry_follow_ups_follow_up_at_idx" ON "enquiry_follow_ups" USING btree ("follow_up_at");
