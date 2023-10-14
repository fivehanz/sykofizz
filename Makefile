MAKEFLAGS += -j2

default: build-tailwind build-cms 
clean: clean-tailwind clean-cms
deps: deps-tailwind deps-cms
dev: dev-tailwind dev-cms 
migrate: cms-make-migrate
# deploy: deploy-api
	
build-tailwind:
	cd cms && bunx tailwindcss -i ./static/src/input.css -o ./static/src/output.css --minify

deps-tailwind:
	cd cms && bun install

deps-cms:
	cd cms && pip install -r requirements.txt

dev-cms: 
	cd cms && python manage.py runserver

cms-make-migrate:
	cd cms && python manage.py makemigrations && python manage.py migrate

dev-api:
	cd api && bun run start  

dev-tailwind:
	cd cms && bunx tailwindcss -i ./static/src/input.css -o ./static/src/output.css --watch

# deploy-backend:
	# cd api && bunx wrangler deploy src/index.ts --minify 
