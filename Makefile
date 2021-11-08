up-frontend:
	docker-compose up -d --force-recreate frontend

up-backend:
	docker-compose up -d --force-recreate backend

up: up-frontend up-backend

logs:
	docker-compose logs -f

install-frontend:
	docker-compose run --rm frontend "npm install"

install-backend:
	docker-compose run --rm backend "npm install"

install: install-frontend install-backend

into-frontend:
	docker-compose exec frontend bash

into-backend:
	docker-compose 	exec backend bash

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .