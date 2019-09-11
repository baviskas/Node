let nodejsWebSocket = require('nodejs-websocket');

let server = nodejsWebSocket.createServer(function (connection) {
    console.log('A new connection is established...');
   connection.on('text',function (msg) {
       console.log('Message from client: ',msg);
   });
   var timer = setInterval(function () {
       connection.sendText(new Date().toString())
   },5000);
});

server.listen(9090);
console.log('Server listening on port: 9090');