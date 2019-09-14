let fs = require('fs');
let net = require('net');
let path = require('path');
let fileName = process.argv[2];

if(!fileName) throw Error('Invalid file name');
fileName = path.join(__dirname,fileName);

let server = net.createServer(function (connection) {
   console.log('A new connection is established...');
   let watcher = fs.watchFile(fileName, function () {
      connection.write('File changed at' + new Date().toString() + '\n');
   });
   connection.on('end',function () {
      fs.unwatchFile(fileName, watcher);
   })

});

server.listen(9090, function () {
   console.log('Listening on port 9090');
});

//Run file as --> node server.js test.txt
//Hence 3rd arg would be fileName
//Then either run -->  telnet localhost 9090.  Make changes to test.txt, Timestamp will be shown in telnet window.
//or write a client file to show this message.
