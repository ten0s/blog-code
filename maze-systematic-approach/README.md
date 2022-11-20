Code for

* https://ten0s.github.io/blog/2022/11/18/maze-systematic-approach

```
$ git clone https://github.com/ten0s/blog-code
$ cd blog-code/maze-systematic-approach
```

Make maze images

```
$ npm install
```

```
$ node index.js
```

Make graph images

```
$ dot -Tpng maze-graph.dot > images/maze-graph.png
$ dot -Tpng maze-graph-path.dot > images/maze-graph-path.png
```
