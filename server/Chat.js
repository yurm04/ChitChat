var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

module.exports.generateId = ID;

// dummy chat data
module.exports.getChatRooms = function() {
    return [
        { id: 'room1', roomName: 'rickandmorty100years.com', numParticipants: 4, lastMessageTime: '10:23 AM', 
            messages: [
                { id: ID(), username: 'yurm', messageTime: '10:15PM', messageText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ab modi inventore possimus voluptate vitae maxime optio distinctio reprehenderit impedit veritatis harum, earum quidem enim quibusdam cumque adipisci, deleniti natus tenetur. Nisi odit repudiandae pariatur eveniet nulla unde, eaque veniam molestiae reprehenderit adipisci, doloremque ducimus, ut quia. Est, sapiente, consectetur." },
                { id: ID(), username: 'rick', messageTime: '10:17PM', messageText: "Wubalubadubdub!" },
                { id: ID(), username: 'morty', messageTime: '10:20PM', messageText: "aaaaaahhhhhhhhhhhhhh" }
            ],
            },
        { id: 'room2', roomName: "What's for lunch?", numParticipants: 2, lastMessageTime: '1:23 PM',
            messages: [
                { id: ID(), username: 'grumps', messageTime: '10:15PM', messageText: "hey there" },
                { id: ID(), username: 'someguy', messageTime: '10:17PM', messageText: "hi there" }
            ],
        },
        { id: 'room3', roomName: "Help I'm Alive", numParticipants: 1, lastMessageTime: '1 min ago',
            messages: [
                { id: ID(), username: 'biscuit', messageTime: '10:15PM', messageText: "feed me" },
                { id: ID(), username: 'biscuit', messageTime: '10:16PM', messageText: "right meow" }
            ],
        }
    ];
}