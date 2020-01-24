let http = require('http'),
    dataParser = require('./dataParser'),
    serveStatic = require('./serveStatic'),
    calculatorProcessor = require('./calculatorProcessor'),
    noFoundAction = require('./noFoundAction'),
    bodyParser = require('./bodyParser'),
    app = require('./app');

app.use(dataParser);
serveStatic.addStaticReouceExtn('.json');
serveStatic.addFolderName('/resources');
app.use(serveStatic.process);
app.use(bodyParser);
app.use(calculatorProcessor);
app.use(noFoundAction);

http.createServer(app.run).listen(9090);

console.log('Listening on port 9090');


// Code available at -->
// https://github.com/tkmagesh/SpringPeople-Node-Apr-2015/tree/master/Day-03/01-calculator-app