# Gitbook-Ext
GitBook 是一个基于 Node.js 的命令行工具，可使用 Github/Git 和 Markdown 来制作精美的电子书，GitBook 并非关于 Git 的教程。

GitBook 提供的模板不够丰富，Gitbook-Ext是对GitBook的扩展，并提供一些更丰富的模板。

## 快速开始
**安装GitBook**

```
$ npm install gitbook-cli -g
```

具体可以参考 [https://github.com/GitbookIO/gitbook](https://github.com/GitbookIO/gitbook)

**安装Gitbook-Ext**

```
npm install @hypers/gitbook-ext --registry=http://54.223.240.36:7001
```

**查看帮助**

```
cd gitbook-ext
node index.js -h
```

会列出以下信息

```
Usage: index [options]

 Options:

   -h, --help      output usage information
   -V, --version   output the version number
   -d, --default   default template
   -p, --pagurian  pagurian template
```

**使用pagurian模板**

```
cd gitbook-ext
node index.js -p
```
