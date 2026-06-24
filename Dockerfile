FROM node:26.3.1-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .

RUN npm run build-storybook

FROM node:26.3.1-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static
# COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/storybook-static ./storybook-static

EXPOSE 3000

CMD ["npx", "serve", "storybook-static"]