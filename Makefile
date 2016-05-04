.PHONY: install lint test build cover coveralls build

lint:
	./node_modules/eslint/bin/eslint.js . --ignore-path .gitignore

install:
	npm install

test:
	NODE_ENV=test ./node_modules/.bin/mocha --require babel-core/register --reporter spec test/**/*.spec.js

build:
	@NODE_ENV=production ./node_modules/.bin/babel --out-dir build/ src/
	@echo "!!!! Start building shapes by running \"./build/cli/gs-shapes.js -h\" !!!!"