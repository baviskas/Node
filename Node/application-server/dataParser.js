let url = require('url');
module.exports = function (req, res, next) {
    console.log('In data Parser');
    req.url = url.parse(req.url, true);
    next();
};