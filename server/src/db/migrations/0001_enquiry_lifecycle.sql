ALTER TABLE "enquiries" ADD COLUMN IF NOT EXISTS "updated_at" timestamp DEFAULT now() NOT NULL;
ALTER TABLE "enquiries" ADD COLUMN IF NOT EXISTS "contacted_at" timestamp;
ALTER TABLE "enquiries" ADD COLUMN IF NOT EXISTS "quoted_at" timestamp;
ALTER TABLE "enquiries" ADD COLUMN IF NOT EXISTS "confirmed_at" timestamp;
ALTER TABLE "enquiries" ADD COLUMN IF NOT EXISTS "cancelled_at" timestamp;
