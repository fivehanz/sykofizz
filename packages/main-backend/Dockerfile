###! BUILDER ###
FROM node:lts AS builder
RUN npm i -g npm pnpm@8

ENV NX_NON_NATIVE_HASHER=true

WORKDIR /app
COPY . .

RUN pnpm install 
RUN pnpm dlx nx run main-backend:build:production 
RUN pnpm prune --prod

###! PRODUCTION RUNNER ###
FROM node:lts-slim AS production
ENV NODE_ENV production

WORKDIR /app

# RUN addgroup --system --gid 1001 node
# RUN adduser --system --uid 1001 node

COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/dist/packages/main-backend ./dist

ENV PORT 3333
ENV JWT_SECRET ""
ENV DATABASE_URL ""
ENV SHADOW_DATABASE_URL ""

EXPOSE 3333
CMD [ "node", "dist/main.js" ]


# TODO: build and test in arm64
# TODO: reduce size of the image

# TODO: use github action to build the image -- what branch strategy should be used?
# TODO: push it to docker hub

# TODO: setup argocd on microk8s
# TODO: setup CD repository and make it work with argocd
# TODO: setup ingress and make it work with cloudflare tunnel

# TODO: test full CD pipeline 