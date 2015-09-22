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
npm install -g @hypers/gitbook-ext --registry=http://54.223.240.36:7001
```

**查看帮助**

```
gitbook-ext -h
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

**使用模板**

当你想使用gitbook-ext扩展的模板执行以下命令
```
gitbook-ext -p
```

同时在你的gitbook目录下新增一个book.json 文件
```
├── _book
├── book.json
├── README.md
└── SUMMARY.md
```

book.json 这个文件可以配置模板参数
```json
{
    "variables": {
        "title":"帮助文档",
        "theme":"theme-green",
        "copyright":"Copyright 2015 HYPERS"
    }
}
```
- title: 配置文档标题，显示在页面顶部
- theme: 模板颜色,当前支持:theme-green,theme-purple,theme-orange
- copyright: 配置版权信息，显示在页面底部


当配置完成以后，执行以下命令，就默认生成了一个_book文件
```
gitbook build
```

如果你想切换到默认的模板，执行以下命令

```
gitbook-ext -d
gitbook build
```
