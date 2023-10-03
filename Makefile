MAKEFLAGS += -j2

default: build-frontend build-api 
deps: deps-frontend deps-cms
dev: dev-cms 
# deploy: deploy-api

build-api:
	cd api && bun run build
	
build-frontend:
	cd frontend && bun --bun astro build

deps-api:
	cd api && bun install

deps-frontend:
	cd frontend && bun install

deps-cms:
	cd cms && pip install -r requirements.txt

dev-cms: 
	cd cms && python manage.py runserver

dev-api:
	cd api && bun run start  

dev-frontend:
	cd frontend && bun --bun astro dev

# deploy-backend:
	# cd api && bunx wrangler deploy src/index.ts --minify 
