# Design System Standards

## Purpose

Good Secrets Safaris should feel like one product, not a collection of independently styled pages. New UI should reuse a small set of semantic visual decisions and components.

## Semantic tokens

Prefer semantic tokens/classes for recurring decisions rather than inventing new literal values in individual views.

Core concepts to standardize:

- page background
- surface/card background
- primary text
- muted text
- brand/gold accent
- dark green action color
- border/subtle divider
- success/warning/danger states
- focus ring
- spacing/container widths
- typography roles

Legacy literal Tailwind color values can be migrated incrementally. New shared components should expose semantic variants rather than forcing callers to repeat color strings.

## Component primitives

Before building a page-specific variant, check whether the UI can use or extend a shared primitive such as:

- Button / LinkButton
- Card
- Badge
- Container
- Section
- SectionHeading
- Input / Select / Textarea
- Modal / Drawer
- EmptyState
- ErrorState
- PageHero
- Price/metadata display
- Review/trust card

Do not create several components that differ only by a few Tailwind utility classes.

## Typography

Use typography by role rather than arbitrary size:

- display/hero
- page title
- section heading
- card title
- body
- supporting/meta text
- label/eyebrow

Headings must preserve semantic document hierarchy (`h1`, `h2`, `h3`) independent of their visual size.

## Spacing and layout

Use shared page containers and responsive spacing patterns. New pages must be reviewed at mobile, tablet and desktop widths. Avoid fixed heights for content that can grow with localization, accessibility text sizing or dynamic data.

## CTA language

Calls to action should describe the actual product behavior. Enquiry-oriented safari ideas should use language such as `Request This Safari`, `Get Quote`, `Plan This Safari`, or `Build My Safari` rather than implying instant checkout/payment where none exists.

## Accessibility

Interactive elements require visible focus states, adequate hit areas, accessible labels and keyboard behavior. Color must not be the only indicator of status. Respect reduced motion preferences for non-essential animation.

## Images

Prefer first-party or properly licensed destination/product imagery. Provide meaningful alt text when an image conveys content; decorative imagery should use empty alt text. Avoid layout shifts by supplying stable image dimensions/aspect ratios where practical.

## Review checklist

For every material UI pull request, check:

1. existing components/tokens were reused where practical;
2. no new near-duplicate component was introduced;
3. mobile and desktop states were reviewed;
4. loading, empty and error states are intentional;
5. focus/keyboard behavior is correct;
6. copy matches the actual enquiry-based sales flow;
7. contrast and text legibility remain strong over imagery.
