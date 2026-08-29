# Architecture Overview

## System

Good Secrets Safaris is split into a Vite/React frontend and an Express/TypeScript backend using Drizzle ORM with PostgreSQL.

```text
Browser
  │
  ├── public website / admin UI (React + Vite)
  │        │
  │        └── typed API client / data context
  │                 │
  ▼                 ▼
Vercel          Express API
                    │
                    ├── validation/auth/rate limiting
                    ├── business/application logic
                    ├── email side effects
                    │
                    ▼
                PostgreSQL
                 (Drizzle)
```

## Frontend responsibilities

The frontend is responsible for presentation, user interaction, client-side routing, accessible UI state and converting API data into view-friendly models.

Frontend components should not know deployment secrets or database details. Shared API transformations belong in a data/service layer rather than being reimplemented in page components.

## Backend responsibilities

The backend owns authentication, authorization, validation of untrusted input, persistence, server-only credentials, admin boundaries and integration side effects such as email.

Public and admin capabilities must remain explicitly separated. Frontend hiding is not authorization.

## Database

Drizzle schema and versioned SQL migrations are the source of truth for database evolution. Schema changes should remain compatible with the deployment sequence whenever practical.

## Content

Content has three categories:

1. database/CMS-managed content such as tours, hotels and editable published content;
2. shared product configuration/content that belongs in centralized frontend/backend modules;
3. page-local editorial prose that may remain close to its page.

Do not move every sentence into a generic constants file. Centralize content when it is reused, configurable, business-critical or must remain consistent across surfaces.

## Cross-cutting concerns

### Authentication

Admin API routes require server-side authentication. Never rely solely on a client-side route guard.

### Validation

Use Zod or equivalent boundary validation for external input. Database rows and API response data should be normalized through named functions when their shapes differ from frontend domain types.

### Email

Customer enquiry persistence is the core transaction. Email notification is a server-side side effect and should not make a successfully persisted enquiry appear failed solely because the provider is unavailable.

### SEO

Public pages should maintain canonical URLs, metadata and indexability rules. Personalized/admin pages should not become indexable accidentally.

### Accessibility

Accessibility is considered a product correctness requirement. Shared components should carry semantic/keyboard behavior so pages do not need to rediscover it.

## Architectural change review

A PR deserves explicit architecture discussion when it introduces a new persistence model, external provider, authentication mechanism, runtime/deployment service, cross-cutting global state, or a dependency that becomes foundational to many features.
