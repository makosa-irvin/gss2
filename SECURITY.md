# Security Policy

## Reporting a vulnerability

Do not open a public GitHub issue for a vulnerability that could expose credentials, customer information, admin access, database access, or a practical exploit path.

Report the issue privately to the repository owner/maintainer and include:

- affected area and environment
- reproducible steps
- likely impact
- any proof of concept with secrets and personal data removed
- suggested mitigation if known

## Secrets

Real secrets must live in deployment environment-variable/secret stores, never in Git history. `.env.example` files may contain names and safe placeholders only.

The repository quality check rejects committed `.env` files and common private-key file types. GitHub CodeQL and dependency review provide additional automated checks but do not replace careful review.

## Supported branches

Security fixes should target the active integration branch and be promoted to production through the normal reviewed release path. Critical fixes may use an expedited PR, but required automated checks should still run unless the failure is itself caused by the incident.

## Customer data

Treat enquiry/contact data as customer information. Do not place real enquiry payloads, email addresses, phone numbers or authentication tokens in tests, screenshots, fixtures, issues or logs committed to the repository. Use synthetic fixtures.
