MAKEFLAGS += -j2

bootstrap: bootstrap-vm
nginx-init: prod-nginx-link

### new vm
bootstrap-vm:
	cd ./deployment/bootstrap/ && ansible-playbook bootstrap.yml -K \
		--extra-vars "host=syko.711666.xyz user=hanz key=/Users/hanz/.ssh/id_ed25519" 

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
