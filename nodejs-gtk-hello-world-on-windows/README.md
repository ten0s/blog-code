Code for https://ten0s.github.io/blog/ ... 2022/07/22/ ...

```
$ git clone https://github.com/ten0s/blog-code
$ cd blog-code/nodejs-gtk-hello-world-on-windows
```

```
$ curl -s https://raw.githubusercontent.com/ten0s/node-gtk/blog-hello-gtk/windows/mingw_include_extra.sh | bash
$ export MINGW_WINDOWS_PATH=$(curl -s https://raw.githubusercontent.com/ten0s/node-gtk/blog-hello-gtk/windows/mingw_windows_path.sh | bash)
```

```
$ npm install
```

```
$ node index.js
```
