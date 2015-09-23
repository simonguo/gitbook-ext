#! /usr/bin/env node


var path = require("path");
var userHome = require("user-home");
var fs = require('fs');
var less = require('less');
var program = require('commander');

var CONFIG_ROOT = path.resolve(userHome, ".gitbook");
var VERSIONS_ROOT = path.resolve(CONFIG_ROOT, "versions");
var WORKSPACE_ROOT = process.mainModule.filename.split("gitbook-ext")[0] + "gitbook-ext/";

var pak = require("../package.json");


function getVersions(path, callback) {
    fs.readdir(path, function(err, files) {
        if (err) {
            console.log('read dir error');
            return;
        }

        files.forEach(function(item) {
            var tmpPath = path + '/' + item;
            fs.stat(tmpPath, function(err1, stats) {
                if (err1) {
                    console.log('stat error');
                    return;
                }
                if (stats.isDirectory()) {
                    //rewriteTpl(tmpPath);
                    //versions.push(tmpPath);
                    //console.log(tmpPath);
                    callback(tmpPath);
                }
            });
        });

    });
}


/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
function copy(src, dst) {
    // 读取目录中的所有文件/目录
    fs.readdir(src, function(err, paths) {
        if (err) {
            throw err;
        }
        paths.forEach(function(path) {
            var _src = src + '/' + path,
                _dst = dst + '/' + path,
                readable, writable;
            fs.stat(_src, function(err, st) {
                if (err) {
                    throw err;
                }
                // 判断是否为文件
                if (st.isFile()) {
                    // 创建读取流
                    readable = fs.createReadStream(_src);
                    // 创建写入流
                    writable = fs.createWriteStream(_dst);
                    // 通过管道来传输流
                    readable.pipe(writable);
                }
                // 如果是目录则递归调用自身
                else if (st.isDirectory()) {
                    exists(_src, _dst, copy);
                }
            });
        });
    });
}

// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
function exists(src, dst, callback) {
    fs.exists(dst, function(exists) {
        // 已存在
        if (exists) {
            callback(src, dst);
        } else {
            fs.mkdir(dst, function() {
                callback(src, dst);
            });
        }
    });
}


function lessToCss(src, dist) {

    fs.readFile(src, "utf-8", function(e, data) {

        if (e) {
            console.log(e);
            return;
        }

        less.render(data, function(e, css) {

            if (e) {
                console.log(e);
                return;
            }
            if (!css) {
                console.log("css is null");
                return;
            }

            fs.writeFile(dist, css.css, function(e, data) {
                if (e) {
                    console.log(e);
                }
                console.log("less to css success");
            });
        });
    });
}


function run(theme) {

    //lessToCss(WORKSPACE_ROOT + theme + "/stylesheets/website.less", WORKSPACE_ROOT + theme + "/assets/style.css");
    getVersions(VERSIONS_ROOT, function(path) {
        console.log(path);
        // 复制目录
        exists(WORKSPACE_ROOT + theme, path + "/theme", copy);
    });
}

program
    .version(pak.version)
    .option('-d, --default', 'default template')
    .option('-p, --pagurian', 'pagurian template')
    .parse(process.argv);

if (program.default) {
    run("theme-default");
    console.log("theme-default");
}

if (program.pagurian) {
    run("theme-pagurian");
    console.log("theme-pagurian");
}
