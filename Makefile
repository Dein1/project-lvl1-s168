install: 
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npm run eslint ./src/bin/brain-games.js ./src/index.js

