MAKEFLAGS += -j2

nginx-init: prod-nginx-link
dev: dev-docker-start


#### DEV ####

dev-docker-start:
	docker compose --file ./docker-compose.dev.yml up -d

dev-docker-stop:
	docker compose --file ./docker-compose.dev.yml down

dev-docker-rebuild:
	docker compose --file ./docker-compose.dev.yml up -d --build --force-recreate

### PRODUCTION COMMANDS
prod-start:
	docker compose --env-file .env --file ./deployment/compose/docker-compose.yml up -d
prod-rebuild:
	docker compose --env-file .env --file ./deployment/compose/docker-compose.yml up -d --build
prod-restart:
	docker compose --env-file .env --file ./deployment/compose/docker-compose.yml up -d --force-recreate	
prod-stop:
	docker compose --env-file .env --file ./deployment/compose/docker-compose.yml down

prod-nginx-link:
	ln -s ${shell pwd}/deployment/nginx/vhost.conf /etc/nginx/sites-enabled/sykofizz-website.conf
	nginx -s reload


listmonk-install:
	docker compose --env-file .env --file ./deployment/compose/docker-compose.yml run --rm listmonk ./listmonk --install

listmonk-upgrade:
	docker compose --env-file .env --file ./deployment/compose/docker-compose.yml run --rm listmonk ./listmonk --upgrade
