Code for

* https://ten0s.github.io/blog/2022/01/18/maze-systematic-approach

```
$ git clone https://github.com/ten0s/blog-code
$ cd blog-code/maze-systematic-approach
```

Make maze images

```
$ npm install
$ node index.js
```

Make graph images

```
$ dot -Tpng -O maze-graph.dot
$ dot -Tpng -O maze-graph-path.dot
```
