-- Backfill the new homepage section fields (client feedback: "Make admin
-- edit home page" was previously scoped to just the hero - this extends
-- the same admin-editable pattern to the other 9 section headings, plus
-- the two list-based content blocks). Existing rows keep whatever they
-- already have for these keys if this migration somehow runs twice; the
-- `?` key-exists guard makes this idempotent.
UPDATE "company_settings"
SET "homepage" = "homepage" || '{
  "personalPlanning": {
    "eyebrow": "Personal planning, on the ground",
    "title": "A safari is too important to feel anonymous.",
    "body": "You should understand who is shaping your route, what is included and how to get help while you travel. We plan private East Africa journeys around real people rather than treating an itinerary as a checkout product.",
    "steps": [
      { "number": "1", "label": "Tell us your priorities" },
      { "number": "2", "label": "Refine route & stays" },
      { "number": "3", "label": "Review before committing" },
      { "number": "4", "label": "Travel with local support" }
    ]
  },
  "tours": {
    "eyebrow": "Safari ideas",
    "title": "Start with a proven route. Make it yours.",
    "subtitle": "Compare duration, country and guide price, then adjust dates, accommodation and pacing with the safari team."
  },
  "styleFinder": {
    "eyebrow": "Choose the feeling first",
    "title": "What kind of safari are you imagining?",
    "subtitle": "Use these as starting points rather than boxes you have to fit into."
  },
  "destinations": {
    "eyebrow": "Destination guides",
    "title": "Learn the parks before choosing the route.",
    "subtitle": "Wildlife, seasons and route ideas across East Africa."
  },
  "whyUs": {
    "eyebrow": "Why Good Secrets",
    "title": "Local expertise is most useful when it changes the trip.",
    "items": [
      { "title": "Personal planning", "description": "Change the route, pace and accommodation around the people actually traveling." },
      { "title": "Independent proof", "description": "Use independent traveler reviews to verify what past guests say." },
      { "title": "Local communication", "description": "Email, phone and WhatsApp keep the East Africa team within reach." },
      { "title": "Clarity before commitment", "description": "Review itinerary, inclusions and trip terms before deciding to proceed." }
    ]
  },
  "beachStays": {
    "badge": "Kenyan resident offers",
    "title": "Beach stays and safari extensions",
    "subtitle": "Diani, Watamu and Mombasa stays, with dedicated resident pricing where available."
  },
  "safariBuilder": {
    "eyebrow": "Not sure where to start?",
    "title": "Build your safari preferences",
    "subtitle": "Answer a few questions to narrow the route. A human safari planner still helps shape the final itinerary."
  },
  "guides": {
    "eyebrow": "Plan with confidence",
    "title": "Safari guides & practical advice",
    "subtitle": "Use our destination and planning content before you choose an itinerary."
  },
  "finalCta": {
    "eyebrow": "Start with a conversation",
    "title": "Tell us what would make the safari worth the journey.",
    "subtitle": "Share dates, group size and priorities. We can suggest a practical route without requiring payment to enquire."
  }
}'::jsonb
WHERE NOT ("homepage" ? 'personalPlanning');
