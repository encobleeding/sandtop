//这里是四个引用模块来处理
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
//var mime = require('mime');


http.createServer(onRequest).listen(8088);

function onRequest(req, res) {
	// 取得文件路径
	var pathname = url.parse(req.url).pathname;
	// 获取文件扩展名(包含前置.)
	var extname = path.extname(pathname);
	var type = extname.slice(1);
	// 获取下载文件在磁盘上的路径，
	var realPath = pathname.replace('/', '');
	if(extname == '') {
		fs.readFile('./new/index.html', function(err, data) {
			if(err){
				console.log('ddddd');
			}
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});
			res.write(data);
			res.end();
		})

	} else {
		console.log('realPath---' + realPath);
		console.log('type---' + type);

		filesLoad(realPath, type, req, res);
	}
}



function filesLoad(filePath, type, req, res) {

	fs.readFile(filePath, function(err, file) {

		res.writeHead(200, {
			'Content-Type': mime.lookup(filePath)
			//这里括号后面不能加‘；’这个符号会报错//mime是用lookUp方法来调用
		});
		res.end(file);
	})
}
console.log('服务器放置完毕！！');

//还要注意文本内的图片地址变更
