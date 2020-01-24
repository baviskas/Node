// var fs = require("fs");
// var http = require("http");
// var path = require("path");

// var server = http.createServer(function(req,res){
// 	let resourse = path.join(__dirname,req.url);
// 	if(fs.existsSync(resourse)) {
// 		let stream = fs.createReadStream(resourse,{encoding: "utf8"});
// 		stream.on("data",function(data){
// 			res.write(data);
// 			res.end();
// 		});
// 		stream.on("end",function(){
// 			res.end();
// 		});
// 		stream.on('error',function(){
// 			res.statusCode = 404;
// 			res.end();	
// 		})
// 	} else {
// 		res.statusCode = 404;
// 		res.end();
// 	}
// });

// server.listen(9090);

let fs = require('fs'),
	http = require('http'),
	path = require('path'),
	url = require('url'),
	calculator = require('./calculator');

function isStatic(resource) {
	let validFileExtentions = ['.css','.html','.gif','.png','.jpg','.txt','.jpeg','.js'];
	let extName = path.extname(resource);
	return validFileExtentions.indexOf(extName) !== -1;
} 

let server = http.createServer(function(req,res) {
	let requestedUrl = url.parse(req.url,true);
	let resourcePath = requestedUrl.pathname;
	console.log(resourcePath);
	if(isStatic(resourcePath)) {
		let resource = path.join(__dirname,resourcePath);
		console.log(resource);
		if(fs.existsSync(resource)) {
			fs.createReadStream(resource, {encoding: 'utf8'}).pipe(res);
			// res.end();
		} else {
			res.statusCode = 404;
			console.log("Neither static resources nor calculator");
			res.end();
		}	
	} else if(resourcePath === '/calculator') {
		let query = requestedUrl.query;
		let data = {
			op: query.op,
			n1: parseInt(query.n1,10),
			n2: parseInt(query.n2,10),
		};
		let result = calculator[data.op](data.n1,data.n2);
		res.write(result.toString());
		res.end();
	} else {
		res.statusCode = 404;
		console.log("No file found");
		res.end();
	}
});

server.listen(9090);
console.log("Server listening on 9090...");



