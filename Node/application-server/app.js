let middlewares = [];

function add(middleware) {
    middlewares.push(middleware);
}

function run(req, res) {
    function process(req, res, middlewares) {
        let middleware = middlewares[0];
        let remaining = middlewares.slice(1);
        let next = function () {
            process(req, res, remaining);
        };
        if(middleware) {
            middleware(req, res, next);
        }
    }
    process(req, res, middlewares);
}

module.exports = {
    use: add,
    run: run
};