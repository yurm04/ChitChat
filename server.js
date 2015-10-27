var express = require('express');
var app     = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var chat = require('./server/Chat');

server.listen(3000);

app.use('/', express.static(__dirname + '/app'));

// server events
io.on('connection', function(socket){

    // on user connect, send back list of dummy chat rooms
    socket.on('user:connected', function(data) {
        chat.getChatRooms().forEach(function(room) {
            // join "rooms" using room IDs
            socket.join(room.id);
        });
        io.emit('user:init', { rooms: chat.getChatRooms(),  userId: chat.generateId() });
    });

    // when new message sent, add it
    socket.on('newMessage', function(messageData) {
        io.sockets.in(messageData.roomId).emit('addMessage', messageData);
    })

})