let path = require('path'),
    fs = require('fs');
let validExtentions = ['.txt','.png','.jpg','.jpeg','.gif','.js','.css','.html'];
let folderName = '';

function isStatic(resource) {
    let currentExtn = path.extname(resource);
    return validExtentions.indexOf(currentExtn) !== -1;
}

module.exports = {
    addStaticReouceExtn: function (extn) {
        validExtentions.push(extn);
    },
    addFolderName: function (fName) {
        folderName = fName;
    },
    process: function (req, res, next) {
        console.log('In Static Server');
        let resourcePath = req.url.pathname;            // index.html
        let resource = path.join(__dirname + folderName +resourcePath);
        if(isStatic(resourcePath)) {
            if(fs.existsSync(resource)) {
                fs.createReadStream(resource, {encoding: 'utf8'}).pipe(res);
            } else {
                res.statusCode = 404;
                res.end();
            }
        } else {
            next();
        }
    }
};
