const apiMessageRoute = require('./message');

const init = (server) => {
    server.get('*', function (req, res, next) {
        console.log('Request Url: ' + req.originalUrl);
        return next();
    });
    
    server.use('/api', apiMessageRoute);
}
module.exports = {
    init: init
};