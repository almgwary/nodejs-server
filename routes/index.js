const apiMessageRoute = require('./message');
const apiUserRoute = require('./user');

const init = (server) => {
    server.get('*', function (req, res, next) {
        console.log('Request Url: ' + req.originalUrl);
        return next();
    });
    
    server.use('/api', apiMessageRoute);
    server.use('/api', apiUserRoute);
}
module.exports = {
    init: init
};