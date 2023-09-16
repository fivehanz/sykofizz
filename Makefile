MAKEFLAGS += -j2

default: build-frontend 
deps: deps-frontend deps-backend
dev: dev-backend dev-frontend
deploy: deploy-backend

build-backend:
	env MIX_ENV=prod mix release --overwrite
	
build-frontend:
	cd frontend && bun --bun astro build

deps-backend:
	cd api && bun install

deps-frontend:
	cd frontend && bun install

dev-backend:
	cd api && bunx wrangler dev src/index.ts

dev-frontend:
	cd frontend && bun --bun astro dev

deploy-backend:
	cd api && bunx wrangler deploy src/index.ts --minify 
