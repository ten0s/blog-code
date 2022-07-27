Code for

* https://ten0s.github.io/blog/2022/07/22/nodejs-gtk-hello-world-on-windows
* https://ten0s.github.io/blog/2022/07/25/find-dlls-and-typelibs-dependencies-for-nodejs-gtk-application-on-windows
* https://ten0s.github.io/blog/2022/07/27/package-nodejs-gtk-application-on-windows

```
$ git clone https://github.com/ten0s/blog-code
$ cd blog-code/nodejs-gtk-hello-world-on-windows
```

Build [node-gtk](https://github.com/romgrk/node-gtk)

```
$ npm install --ignore-scripts
$ node_modules/node-gtk/windows/mingw_include_extra.sh
$ npm rebuild node-gtk
```

Find and copy locally GTK dependencies (DLLs and Typelibs)

```
$ ./copy-mingw64-deps.sh node.exe index.js
```

Package Node.js into the executable

```
$ NODE=$(node --version | sed -E 's/v([0-9]+)\..*/node\1/')
$ npx pkg -c pkg.json -t ${NODE}-win-x64 -o hello-gtk.exe index.js
```

Run the package

```
$ ./hello-gtk.exe
```

Create the distribution package

```
$ zip -r hello-gtk.zip hello-gtk.exe noprompt.vbs mingw64/
```
