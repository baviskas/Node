var http = require("http");
var fs = require("fs");
var path = require('path');

http.createServer(function (req, res) {
    var index = "/sseClient.html";
    var fileName;
    var interval;
    console.log("req url = ", req.url);
    if (req.url === "/"){
        fileName = index;
        fileName = path.join(__dirname + fileName);
        console.log('In it...',fileName);
    }
    else {
        fileName = "." + req.url;
    }

    if (fileName === "./stream") {
        console.log(req.headers);
        res.writeHead(200, {"Content-Type":"text/event-stream", "Cache-Control":"no-cache", "Connection":"keep-alive"});
        res.write("retry: 10000\n");
        res.write("event: connecttime\n");
        res.write("data: " + (new Date()) + "\n\n");

        interval = setInterval(function() {
            res.write("data: " + (new Date()) + "\n\n");
        }, 1000);
        req.connection.addListener("close", function () {
            clearInterval(interval);
        }, false);
    } else {
        console.log('In it...');
        fs.exists(fileName, function(exists) {
            if (exists) {
                fs.readFile(fileName, function(error, content) {
                    if (error) {
                        res.writeHead(500);
                        res.end();
                    } else {
                        res.writeHead(200, {"Content-Type":"text/html"});
                        res.end(content, "utf-8");
                    }
                });
            } else {
                res.writeHead(404);
                res.end();
            }
        });
    }

}).listen(8080);
console.log("Server running at http://localhost:8080/");