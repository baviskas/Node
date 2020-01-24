let fs = require('fs'),
    net = require('net'),
    path = require('path'),
    fileName = process.argv[2];

if(!fileName) throw Error('File name not found');
fileName = path.join(__dirname,fileName);

let server = net.createServer(function (connection) {
   console.log('a new connection is established');
   connection.write(JSON.stringify({
      'type': 'watching',
      'filename': fileName
   }));
   let watcher = fs.watchFile(fileName,function () {
      connection.write(JSON.stringify({
         'type': 'change',
         'filename': fileName,
         'timestamp': Date.now().toString()
      }));
   });
   connection.on('end',function () {
      fs.unwatchFile(fileName,watcher);
   });
});

server.listen(9090,function () {
   console.log('server listening on port: 9090');
});