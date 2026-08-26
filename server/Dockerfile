# Build stage
FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
# Deliberately plain `npm ci` here, not `RUN --mount=type=cache,...`.
# A cache-mount version was tried and broke Railway's build with
# "flag '--mount=type=cache,target=/root/.npm' is missing an id
# argument" - Railway's Dockerfile builder doesn't parse that extended
# BuildKit syntax the same way plain `docker build` does. The cache
# mount was only ever a repeat-build speed optimization (it doesn't
# help the very first build at all), never something the app needs to
# function, so it's not worth chasing exact BuildKit-dialect
# compatibility with every hosting provider. Standard Docker layer
# caching already gives some speedup on repeat builds anyway, as long
# as package.json/package-lock.json haven't changed - this COPY+RUN
# layer is skipped entirely in that case on any Docker-compatible
# builder, no special syntax required.
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage - smaller image, no dev dependencies or source TS.
# Note: drizzle's migrator reads the raw .sql migration files directly at
# runtime (they aren't compiled into dist/), so they have to be copied
# in explicitly alongside the compiled JS.
FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
COPY --from=build /app/src/db/seedData ./dist/db/seedData
COPY --from=build /app/src/db/migrations ./src/db/migrations

EXPOSE 4000

# Run migrations, then start the server. For most hosts (Railway, Render,
# Fly) this is fine as the container's own startup step; for a
# zero-downtime multi-instance deploy, run `node dist/db/migrate.js` as a
# separate one-off release/pre-deploy command instead and drop it from
# CMD, so N replicas don't all try to run migrations at once.
CMD ["sh", "-c", "npm run db:migrate:prod && npm start"]
