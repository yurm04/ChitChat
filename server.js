var express = require('express');
var app     = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.use('/', express.static(__dirname + '/app'));

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + 'index.html');
// });

// server events
io.on('connection', function(socket){
    io.emit('user:connected', { message: 'connected!'});
})