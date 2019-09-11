let calculator = require('./calculator');

module.exports = function (req, res, next) {
    if(req.url.pathname === '/calculator') {
        console.log('In calculator');
        let query = req.url.query;
        let data = {
            // op: query.op,                 //In earlier implementation we fetched value directly from req url
            // n1: parseInt(query.n1, 10),
            // n2: parseInt(query.n2, 10)
            op: req.body.op,
            n1: parseInt(req.body.n1, 10),  //We will be fetching it from req.body if POST method is used
            n2: parseInt(req.body.n2, 10)
        };
        let result = calculator[data.op](data.n1, data.n2);
        res.write(result.toString());
        res.end();
    } else {
        next();
    }
};
