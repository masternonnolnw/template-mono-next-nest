# Use a multi-stage build for optimization
# Stage 1: Build the client (Next.js)
FROM node:18-alpine AS client-builder

WORKDIR /app

RUN npm install -g bun

ARG POSTGRES_USER
ARG POSTGRES_DB
ARG POSTGRES_PASSWORD
ARG DATABASE_URL
ARG SWAGGER_JSON_URL
ARG BYPASS_LOGIN
ARG NEXT_PUBLIC_API_URL


# Copy the root package.json and bun.lockb file
COPY package.json ./ 
COPY bun.lockb ./ 

# Copy the client workspace
COPY client ./client 
COPY api ./api 

# Install dependencies
RUN bun install

# Build the client
RUN bun run --filter client build

# Stage 2: Final image for production
FROM node:18-alpine AS final

WORKDIR /app

# Copy the build outputs from client-builder
COPY --from=client-builder /app/client ./client
COPY --from=client-builder /app/api ./api
COPY --from=client-builder /app/node_modules ./node_modules 

# Install PM2 globally
RUN npm install -g pm2 bun

# Create a pm2 configuration file to run the Next.js app
COPY <<EOF ./ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "npm",
      args: "run start",
      cwd: "./client",
      env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_LIFF_ID: process.env.NEXT_PUBLIC_LIFF_ID
      }
    },
    {
      name: "api",
      script: "bun",
      args: "api/src/index.ts",
      env: {
        DATABASE_URL: process.env.DATABASE_URL,
        SWAGGER_JSON_URL: process.env.SWAGGER_JSON_URL,
      }
    }
  ]
};
EOF

# Expose the client port
EXPOSE 3000

# Run the Next.js client
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
