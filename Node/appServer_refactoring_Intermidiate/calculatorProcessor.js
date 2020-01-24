let calculator = require('./calculator');

module.exports = function (req, res) {
    if(req.url.pathname === '/calculator') {
        let query = req.url.query;
        let data = {
            op: query.op,
            n1: parseInt(query.n1, 10),
            n2: parseInt(query.n2, 10)
        };
        let result = calculator[data.op](data.n1, data.n2);
        res.write(result.toString());
        res.end();
        return true;
    } else {
        return false;
    }
};
