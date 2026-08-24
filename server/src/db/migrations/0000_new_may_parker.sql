CREATE TABLE "admin_users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password_hash" text NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"last_login_at" timestamp,
	CONSTRAINT "admin_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "blog_posts" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"excerpt" text NOT NULL,
	"content" text NOT NULL,
	"featured_image" text NOT NULL,
	"author" jsonb NOT NULL,
	"published_date" timestamp NOT NULL,
	"category" text NOT NULL,
	"reading_time" text NOT NULL,
	"related_destinations" text[] DEFAULT '{}' NOT NULL,
	"related_tours" text[] DEFAULT '{}' NOT NULL,
	"tags" text[] DEFAULT '{}' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "blog_posts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "company_settings" (
	"id" text PRIMARY KEY DEFAULT 'singleton' NOT NULL,
	"company_name" text NOT NULL,
	"tagline" text NOT NULL,
	"description" text NOT NULL,
	"logo_url" text NOT NULL,
	"contact" jsonb NOT NULL,
	"social" jsonb NOT NULL,
	"currency" jsonb NOT NULL,
	"booking" jsonb NOT NULL,
	"seo" jsonb NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "destinations" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"country" text NOT NULL,
	"subtitle" text NOT NULL,
	"description" text NOT NULL,
	"hero_image" text NOT NULL,
	"gallery" text[] DEFAULT '{}' NOT NULL,
	"best_time_to_visit" text NOT NULL,
	"wildlife" text[] DEFAULT '{}' NOT NULL,
	"activities" text[] DEFAULT '{}' NOT NULL,
	"recommended_duration" text NOT NULL,
	"things_to_do" text[] DEFAULT '{}' NOT NULL,
	"where_to_stay" text NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"map_location" jsonb,
	"faqs" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"seo" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "destinations_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "enquiries" (
	"id" text PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"country" text NOT NULL,
	"travel_dates" text NOT NULL,
	"duration_days" integer,
	"adults" integer NOT NULL,
	"children" integer NOT NULL,
	"tour_id" text,
	"tour_title" text,
	"hotel_id" text,
	"hotel_title" text,
	"preferred_destination" text NOT NULL,
	"safari_type" text NOT NULL,
	"budget" text NOT NULL,
	"accommodation_preference" text NOT NULL,
	"special_requests" text NOT NULL,
	"hear_about_us" text NOT NULL,
	"status" text DEFAULT 'New' NOT NULL,
	"notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hotels" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"location" text NOT NULL,
	"country" text NOT NULL,
	"description" text NOT NULL,
	"category" text NOT NULL,
	"images" text[] DEFAULT '{}' NOT NULL,
	"price_from_usd" double precision NOT NULL,
	"price_from_kes" double precision NOT NULL,
	"solo_price_usd" double precision NOT NULL,
	"sharing_price_usd" double precision NOT NULL,
	"seasonal_pricing" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"facilities" text[] DEFAULT '{}' NOT NULL,
	"room_types" text[] DEFAULT '{}' NOT NULL,
	"inclusions" text[] DEFAULT '{}' NOT NULL,
	"exclusions" text[] DEFAULT '{}' NOT NULL,
	"is_family_friendly" boolean DEFAULT false NOT NULL,
	"is_honeymoon_friendly" boolean DEFAULT false NOT NULL,
	"is_senior_friendly" boolean DEFAULT false NOT NULL,
	"is_kenyan_resident_offer" boolean DEFAULT false NOT NULL,
	"booking_link" text,
	"rating" double precision,
	"seo" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "hotels_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" text PRIMARY KEY NOT NULL,
	"reviewer_name" text NOT NULL,
	"reviewer_country" text NOT NULL,
	"avatar_url" text NOT NULL,
	"rating" double precision NOT NULL,
	"tour_taken" text NOT NULL,
	"review_text" text NOT NULL,
	"date" timestamp NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"platform" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tours" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"short_description" text NOT NULL,
	"full_description" text NOT NULL,
	"country" text NOT NULL,
	"destinations" text[] DEFAULT '{}' NOT NULL,
	"duration_days" integer NOT NULL,
	"duration_label" text NOT NULL,
	"starting_location" text NOT NULL,
	"ending_location" text NOT NULL,
	"categories" text[] DEFAULT '{}' NOT NULL,
	"travel_styles" text[] DEFAULT '{}' NOT NULL,
	"comfort_level" text NOT NULL,
	"traveler_types" text[] DEFAULT '{}' NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"popular" boolean DEFAULT false NOT NULL,
	"recommended" boolean DEFAULT false NOT NULL,
	"price_from" double precision NOT NULL,
	"currency" text NOT NULL,
	"solo_price" double precision NOT NULL,
	"sharing_price" double precision NOT NULL,
	"resident_price_kes" double precision,
	"seasonal_pricing" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"images" text[] DEFAULT '{}' NOT NULL,
	"video_url" text,
	"itinerary" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"accommodation_summary" text NOT NULL,
	"meals_summary" text NOT NULL,
	"included_activities" text[] DEFAULT '{}' NOT NULL,
	"included_services" text[] DEFAULT '{}' NOT NULL,
	"exclusions" text[] DEFAULT '{}' NOT NULL,
	"important_information" text[] DEFAULT '{}' NOT NULL,
	"children_policy" text NOT NULL,
	"starting_dates" text NOT NULL,
	"booking_availability" text DEFAULT 'Available' NOT NULL,
	"is_kenyan_resident_package" boolean DEFAULT false NOT NULL,
	"views_count" integer DEFAULT 0 NOT NULL,
	"seo" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "tours_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "enquiries" ADD CONSTRAINT "enquiries_tour_id_tours_id_fk" FOREIGN KEY ("tour_id") REFERENCES "public"."tours"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "enquiries" ADD CONSTRAINT "enquiries_hotel_id_hotels_id_fk" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "destinations_country_idx" ON "destinations" USING btree ("country");--> statement-breakpoint
CREATE INDEX "enquiries_status_idx" ON "enquiries" USING btree ("status");--> statement-breakpoint
CREATE INDEX "enquiries_created_at_idx" ON "enquiries" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "hotels_country_idx" ON "hotels" USING btree ("country");--> statement-breakpoint
CREATE INDEX "tours_country_idx" ON "tours" USING btree ("country");--> statement-breakpoint
CREATE INDEX "tours_featured_idx" ON "tours" USING btree ("featured");--> statement-breakpoint
CREATE INDEX "tours_popular_idx" ON "tours" USING btree ("popular");