module.exports = function (io) {
   
    io.on('connection', function(socket){
        console.log('a user connected');
        socket.broadcast.emit('hi');
    });


    socket.on('push', function(msg){
        console.log('message: ' + msg);
        io.emit('push', msg);
    });
};
