# ============================================================
# Stage 1: deps – install node_modules
# ============================================================
FROM node:20-alpine AS deps

WORKDIR /app

# Only copy package manifests so this layer is cached until deps change
COPY package.json package-lock.json ./
RUN npm ci

# ============================================================
# Stage 2: builder – build the Next.js production bundle
# ============================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Disable Next.js telemetry during the build
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ============================================================
# Stage 3: runner – minimal production image
# ============================================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 nextjs

# Copy only the standalone output, static assets, and public files
# (requires output: 'standalone' in next.config.ts)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

# The standalone build outputs a self-contained server.js
CMD ["node", "server.js"]
