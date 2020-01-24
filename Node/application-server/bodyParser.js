let qs = require('querystring');

module.exports = function (req, res, next) {
    console.log('In Body Parser');
    if(req.method === 'POST') {
        let reqBody = '';
        req.on('data', function (chunk) {
           reqBody += chunk;
        });
        req.on('end', function () {
            req.body = qs.parse(reqBody);
            //console.log(req.body);
            next();
        })
    } else {
        next();
    }
};