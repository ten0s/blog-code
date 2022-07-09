Code for https://ten0s.github.io/blog/2020/04/19/git-difftool-and-binary-files

```
$ git clone https://github.com/ten0s/blog-code
$ cd blog-code/git-difftool-and-binaries-files
$ git config --local include.path $PWD/.gitconfig
```

```
$ sudo apt install meld pandoc unoconv
```

Copy git-auto-diff.sh to $PATH and you are all set!
