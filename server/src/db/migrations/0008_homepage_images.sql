-- Backfill the personal-planning image grid and why-us section image with
-- the paths that were previously hardcoded in page.tsx, so admin-managed
-- content starts out identical to what's already live. heroVideo is left
-- unset deliberately - no video exists yet, and its absence is what tells
-- the homepage to keep rendering the existing hero image.
UPDATE "company_settings"
SET "homepage" = "homepage" || jsonb_build_object(
  'personalPlanning', ("homepage"->'personalPlanning') || '{
    "images": [
      "/images/catalog/family-safari-game-drive.jpg",
      "/images/catalog/picnic-lunch-in-the-wild.jpg",
      "/images/catalog/honey-moon-in-samburu.jpg"
    ]
  }'::jsonb,
  'whyUs', ("homepage"->'whyUs') || '{"image": "/images/catalog/sundowner-at-amboseli.jpg"}'::jsonb
)
WHERE ("homepage" ? 'personalPlanning') AND NOT ("homepage"->'personalPlanning' ? 'images');
