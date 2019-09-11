module.exports = function (req, res, next) {
    console.log('In 404 handler');
    res.statusCode = 404;
    res.end();
};