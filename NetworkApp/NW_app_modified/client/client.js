let fs = require('fs');
let net = require('net');

let client = net.connect({port: 9090});

client.on('data',function (msg) {
    console.log(msg.toString());
});
client.on('error', function(){
    console.log('Error');
});
console.log('client running');

//After Running server file,
// run client file like node client.js