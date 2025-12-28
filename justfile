
default:
    @just --list
    echo "Welcome to the project! Here are the available commands: @Blaze"

web:
    pnpm --dir web dev

web-build:
    pnpm --dir web build
web-install:
    pnpm --dir web install --prefer-offline
web-test:
    pnpm --dir web test
api:
    pnpm --dir api start:dev

api-build:
    pnpm --dir api build

api-install:
    pnpm --dir api install --prefer-offline

api-test:
    pnpm --dir api test

api-seed:
    pnpm --dir api seed
api-i arg:
    pnpm --dir api add {{arg}}
api-gen:
    pnpm --dir api generate
api-migrate:
    pnpm --dir api migrate
api-auth-gen:
    pnpm --dir api auth:generate
api-init:
    echo "Setting up the API..."
    pnpm --dir api install
    pnpm --dir api seed
    echo "API setup complete."

