# Build stage
FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
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
COPY --from=build /app/src/db/seedData ./src/db/seedData
COPY --from=build /app/src/db/migrations ./src/db/migrations

EXPOSE 4000

# Run migrations, then start the server. For most hosts (Railway, Render,
# Fly) this is fine as the container's own startup step; for a
# zero-downtime multi-instance deploy, run `node dist/db/migrate.js` as a
# separate one-off release/pre-deploy command instead and drop it from
# CMD, so N replicas don't all try to run migrations at once.
CMD ["sh", "-c", "node dist/db/migrate.js && node dist/index.js"]
