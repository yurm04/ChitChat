var moment = require('moment');

var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

module.exports.generateId = ID;

// dummy chat data
module.exports.getChatRooms = function() {
    return [
        { id: 'room1', roomName: 'rickandmorty100years.com',
            messages: [{ id: ID(), roomId: 'room1', username: 'rick', messageText: 'for a hundred years Morty', messageTime: moment().format('h:mm A') }],
            lastMessage: { id: ID(), roomId: 'room1', username: 'rick', messageText: 'for a hundred years Morty', messageTime: moment().format('h:mm A') },
            alertCount: 0
        },
        { id: 'room2', roomName: "What's for lunch?",
            messages: [{ id: ID(), roomId: 'room2', username: 'some dude', messageText: 'chimichangas probably', messageTime: moment().format('h:mm A') }],
            lastMessage: { id: ID(), roomId: 'room2', username: 'some dude', messageText: 'chimichangas probably', messageTime: moment().format('h:mm A') },
            alertCount: 0
            
        },
        { id: 'room3', roomName: "TP: over or under?",
            messages: [{ id: ID(), roomId: 'room3', username: 'me', messageText: 'over for sure', messageTime: moment().format('h:mm A') }],
            lastMessage: { id: ID(), roomId: 'room3', username: 'me', messageText: 'over for sure', messageTime: moment().format('h:mm A') },
            alertCount: 0
        }
    ];
}