FROM node:22-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app

COPY package*.json ./

RUN npm install --production

# Production stage
FROM base AS runner

WORKDIR /app

RUN adduser --system --uid 1001 admin

COPY --from=deps /app/package.json ./
COPY --from=deps /app/package-lock.json ./
COPY --from=deps /app/node_modules ./node_modules
COPY ./src ./src

RUN chown -R admin /app

USER admin

RUN if ! grep -q '"start":' package.json; then \
        echo 'Error: No "start" script found in package.json. Exiting.' && exit 1; \
    fi

CMD ["npm", "run", "start"]
