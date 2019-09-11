let http = require('http'),
    serveStatic = require('./serveStatic'),
    calculatorProcessor = require('./calculatorProcessor'),
    dataParser = require('./dataParser'),
    noFoundAction = require('./noFoundAction');

let server = http.createServer(function(req, res) {

    // Parse req.url
    // Serving static resources
    // calculator logic
    // handling 404 scenarios

    dataParser(req,res);
    if(serveStatic.isStatic(req.url.pathname)) {
        serveStatic.process(req,res);
    } else if(!calculatorProcessor(req,res)) {
        console.log('Not found')
        noFoundAction(req, res);
    }
});

server.listen(9090);
console.log('Listening on port 9090');