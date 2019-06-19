module.exports = function (io) {
   
    console.log('start using socket io')
    io.on('connection', function(socket){
        console.log('a user connected');
        let {query} = socket.handshake;
        let {name} = query ;
        socket.broadcast.emit(`${name} connected`);

        socket.on('push', function(msg){
            console.log('message: ' + msg);
            io.emit('push', msg);
        });


        socket.on('disconnect', function(){
            console.log(`user ${name} disconnected should send notification`);
        });

    });
};
