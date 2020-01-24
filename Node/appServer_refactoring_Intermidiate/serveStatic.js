let path = require('path'),
    fs = require('fs');

function isStatic(resource) {
    let validExtentions = ['.txt','.png','.jpg','.jpeg','.gif','.js','.css','.html'];
    let currentExtn = path.extname(resource);
    return validExtentions.indexOf(currentExtn) !== -1;
}

module.exports = {
    isStatic: isStatic,
    process: function (req,res) {
        let resourcePath = req.url.pathname;            // index.html
        let resource = path.join(__dirname + resourcePath);
        if(isStatic(resourcePath)) {
            if(fs.existsSync(resource)) {
                fs.createReadStream(resource, {encoding: 'utf8'}).pipe(res);
            } else {
                res.statusCode = 404;
                res.end();
            }
        }
    }
};
