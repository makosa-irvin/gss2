ALTER TABLE "tours" ADD COLUMN IF NOT EXISTS "published" boolean DEFAULT true NOT NULL;
ALTER TABLE "hotels" ADD COLUMN IF NOT EXISTS "published" boolean DEFAULT true NOT NULL;
ALTER TABLE "destinations" ADD COLUMN IF NOT EXISTS "published" boolean DEFAULT true NOT NULL;
ALTER TABLE "blog_posts" ADD COLUMN IF NOT EXISTS "published" boolean DEFAULT true NOT NULL;
ALTER TABLE "testimonials" ADD COLUMN IF NOT EXISTS "published" boolean DEFAULT true NOT NULL;
