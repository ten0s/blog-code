Code for https://ten0s.github.io/blog/2022/07/25/find-dlls-and-typelibs-dependencies-for-nodejs-gtk-application-on-windows

```
$ git clone https://github.com/ten0s/blog-code
$ cd blog-code/find-dlls-and-typelibs-dependencies-for-nodejs-gtk-application-on-windows
```

```
$ npm install --ignore-scripts
$ node_modules/node-gtk/windows/mingw_include_extra.sh
$ npm rebuild node-gtk
```

```
$ node index.js
```
