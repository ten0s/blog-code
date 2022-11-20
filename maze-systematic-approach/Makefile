all: images graphs

.PHONY: images
images: node_modules index.js

node_modules:
	npm install

index.js: node_modules
	node index.js

.PHONY: graphs
graphs:
	dot -Tpng maze-graph.dot      > images/maze-graph.png
	dot -Tpng maze-graph-path.dot > images/maze-graph-path.png
