
const init = (server) => {
    server.get('*', function (req, res, next) {
        console.log('Request Url: ' + req.originalUrl);
        return next();
    });
    
}
module.exports = {
    init: init
};