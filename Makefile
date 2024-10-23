MAKEFLAGS += -j2

prod-init: prod-nginx-link

#### DEV COMMANDS ####
dev-start:
	docker compose --file ./docker-compose.dev.yml up -d

dev-stop:
	docker compose --file ./docker-compose.dev.yml down

dev-rebuild:
	docker compose --file ./docker-compose.dev.yml up -d --build --force-recreate


### PRODUCTION COMMANDS
# prod-start:
# 	docker compose --env-file .env --file ./docker-compose.yml up -d
# prod-rebuild:
# 	docker compose --env-file .env --file ./docker-compose.yml up -d --build
# prod-restart:
# 	docker compose --env-file .env --file ./docker-compose.yml up -d --force-recreate	
# prod-stop:
# 	docker compose --env-file .env --file ./docker-compose.yml down

# docker swarm
STACK_NAME = sykofizz
COMPOSE_FILE = ./deployment/docker/docker-swarm.yml

prod-start:
	docker stack deploy -c $(COMPOSE_FILE) $(STACK_NAME) --detach=true

prod-update: prod-start

prod-stop:
	docker stack stop $(STACK_NAME)  # Stops services without removing configuration.

prod-rm:
	docker stack rm $(STACK_NAME)  # Removes the stack and all associated resources.

prod-nginx-link-common:
	ln -s ${shell pwd}/nginx/common.conf /etc/nginx/
	ln -s ${shell pwd}/nginx/proxy_common.conf /etc/nginx/

prod-nginx-link:
	ln -s ${shell pwd}/deployment/nginx/vhost.conf /etc/nginx/sites-enabled/sykofizz.conf
	nginx -s reload
