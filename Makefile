install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-gcd:
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

make lint:
	npx eslint --fix --ext .js,.jsx .