let nodeJSWebSocket = require('nodejs-websocket');

let server = nodeJSWebSocket.createServer(function (connection) {
    console.log('A new connection is established...');
    connection.on('text',function (msg) {
       server.connections.forEach(function (cn) { //server.connections has all the connections..
           cn.sendText(msg);                                //sends message to clients
       });
    });
});

server.listen(9090);
console.log('Server listening on port: 9090');