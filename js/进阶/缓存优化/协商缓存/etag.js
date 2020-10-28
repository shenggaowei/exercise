/**
 * @fileoverview 静态node server模拟实现浏览器cache
 * @author  weijialu | wjl152856@alibaba-inc.com
 * @version 1.0 | 2019-05-17
 * @tips 环境-noneJs
 */
const http = require('http');//node自带http server处理模块
const url = require('url');//node自带路url理模块
const fs = require('fs');//node自带文件处理模块
const path = require('path');//node自带路径处理模块
const crypto = require("crypto");//node自带通用加密/哈希算法模块
const PORT = 8085;//server 端口号
const mime = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};//单体-response文件类型

/** 生成hash值 */
const getHash = function (str) {
    const shasum = crypto.createHash('sha1');
    return shasum.update(str).digest('base64');
};
const server = new http.Server();//创建server
/** 监听server 请求 */
server.on("request", function (req, res) {
    const pathname = url.parse(req.url).pathname;
    const realPath = path.join(__dirname, pathname);
    let ext = path.extname(pathname);
    ext = ext ? ext.slice(1) : 'unknown';//获取请求文件后缀
    const contentType = mime[ext] || "text/plain";
    //判断文件状态，当然也可以用fs.exists()方法，但此处需要读取文件修改时间，必须使用stat
    fs.stat(realPath, (error, stat) => {
        console.log('文件请求：' + pathname);
        if (!error) {
            //根据路径读取server端资源
            fs.readFile(realPath, "binary", (err, file) => {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    res.end(JSON.stringify(err));
                    console.log('500错误：' + pathname);
                } else {
                    const hash = getHash(file); //require("crypto").createHash('sha1').update(pathname).digest('base64');
                    const lastModified = stat.mtime.toUTCString();//server端对应文件最后修改日期
                    if (req.headers['if-none-match'] === hash || req.headers['if-modified-since'] === lastModified) {
                        res.writeHead(304);//Etag或Last-modified一致，直接返回304及空体
                        res.end();
                        return;
                    }
                    res.writeHead(200, {
                        'Content-Type': contentType,
                        // 'Cache-Control': 'max-age=1000',//设定缓存1000秒
                        // 'Expires': new Date('Fri May 27 2019 14:53:17 GMT+0800').toUTCString(),//设定具体缓存到期时间
                        // "Last-Modified": lastModified,//声明最后文件修改时间
                        'Etag': hash//声明文件哈希值
                    });
                    res.write(file, "binary");
                    res.end();
                }
            });
        } else {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.write('[404] This request URL [' + pathname + ']' + '  was not found on this server. [404]');
            res.end();
            console.log('404错误：' + pathname);
        }
    })
});
server.listen(PORT);
console.log('Server running at http://127.0.0.1:' + PORT + '/');