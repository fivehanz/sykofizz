MAKEFLAGS += -j2

default: build-frontend build-backend
deps: deps-frontend deps-backend
dev: dev-frontend dev-backend


build-backend:
	env MIX_ENV=prod mix release --overwrite
	
build-frontend:
	cd frontend && bun --bun astro build

deps-backend:
	mix deps.get

deps-frontend:
	cd frontend && bun install

dev-backend:
	mix phx.server

dev-frontend:
	cd frontend && bun --bun astro dev
