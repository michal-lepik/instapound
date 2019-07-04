dev-dockerfile = -f docker-compose.yml -f docker-compose.dev.yml
staging-dockerfile = -f docker-compose.yml -f docker-compose.staging.yml

build-dev:
	docker-compose $(dev-dockerfile) build --parallel

dev:
	docker-compose $(dev-dockerfile) up --remove-orphans

build-staging:
	docker-compose $(staging-dockerfile) build

staging:
	docker-compose $(staging-dockerfile) up -d

install-local-dependencies:
	npm --prefix ./frontend/ install
