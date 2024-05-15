FROM docker.io/library/node:14-alpine

WORKDIR /app

LABEL org.opencontainers.image.authors="OCTO Technology"
LABEL org.opencontainers.image.source="https://github.com/octo-technology/csp-angular"
LABEL org.opencontainers.image.licenses="MIT"
LABEL org.opencontainers.image.vendor="OCTO Technology"

# When running in Docker, `ng serve` must always listen for all hosts (= 0.0.0.0)
ENV HOST=0.0.0.0

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm/cache npm ci

# Run ngcc to compile all common angular modules
RUN npm run prebuild

# Copy app source files then build
COPY . .
RUN npm run build

CMD ["npm", "run", "serve"]
