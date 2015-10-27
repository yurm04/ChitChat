var express = require('express');
var app     = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// dummy chat data for now
var CHAT_ROOMS = [
    { id: 1, roomName: 'rickandmorty100years.com', numParticipants: 4, lastMessageTime: '10:23 AM', 
        messages: [
            { id: 1, username: 'yurm', messageTime: '10:15PM', messageText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ab modi inventore possimus voluptate vitae maxime optio distinctio reprehenderit impedit veritatis harum, earum quidem enim quibusdam cumque adipisci, deleniti natus tenetur. Nisi odit repudiandae pariatur eveniet nulla unde, eaque veniam molestiae reprehenderit adipisci, doloremque ducimus, ut quia. Est, sapiente, consectetur." },
            { id: 2, username: 'rick', messageTime: '10:17PM', messageText: "Wubalubadubdub!" },
            { id: 3, username: 'morty', messageTime: '10:20PM', messageText: "aaaaaahhhhhhhhhhhhhh" }
        ],
        users: [{ id: 1, username: 'yurm04' }, { id: 2, username: 'rick' }, { id: 3, username: 'morty' }]
        },
    { id: 2, roomName: "What's for lunch?", numParticipants: 2, lastMessageTime: '1:23 PM',
        messages: [
            { id: 1, username: 'grumps', messageTime: '10:15PM', messageText: "hey there" },
            { id: 2, username: 'someguy', messageTime: '10:17PM', messageText: "hi there" }
        ],
        users: [{ id: 4, username: 'grumps' }, { id: 5, username: 'someguy' }] 
    },
    { id: 3, roomName: "Help I'm Alive", numParticipants: 1, lastMessageTime: '1 min ago',
        messages: [
            { id: 1, username: 'biscuit', messageTime: '10:15PM', messageText: "feed me" },
            { id: 2, username: 'biscuit', messageTime: '10:16PM', messageText: "right meow" }
        ],
        users: [{ id: 6, username: 'biscuit' }] 
    }
];

server.listen(3000);

app.use('/', express.static(__dirname + '/app'));

// server events
io.on('connection', function(socket){

    socket.on('user:connected', function(data) {
        console.log(data);
        io.emit('user:init', CHAT_ROOMS);
    });

})