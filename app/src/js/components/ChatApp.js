/** @jsx React.DOM */

var React = require('react');
var RoomList = require('./RoomList');
var ChatWindow = require('./ChatWindow');
var UserList = require('./UserList');

var ChatApp = React.createClass({
  
  getInitialState: function() {
    // dummy chat data for now
    var CHAT_ROOMS = [
        { id: 1, roomName: 'rickandmorty100years.com', numParticipants: 4, lastMessageTime: '10:23 AM', 
            messages: [
                { id: 1, username: 'yurm', messageTime: '10:15PM', messageText: "What's up buddy?" },
                { id: 2, username: 'rick', messageTime: '10:17PM', messageText: "Wubalubadubdub!" },
                { id: 3, username: 'morty', messageTime: '10:20PM', messageText: "aaaaaahhhhhhhhhhhhhh" }
            ],
            users: [{ id: 1, username: 'yurm04' }, { id: 2, username: 'rick' }, { id: 3, username: 'morty' }]
        },
        { id: 2, roomName: "What's for lunch?", numParticipants: 2, lastMessageTime: '1:23 PM' },
        { id: 3, roomName: "Help I'm Alive", numParticipants: 4, lastMessageTime: '1 min ago' }
    ];

    return {
      chatRooms: CHAT_ROOMS,
      activeRoom: CHAT_ROOMS[0],
      currentUsers: CHAT_ROOMS[0].users
    }
  },

  render: function() {
    return (
        <div className="container">
            <RoomList rooms={this.state.chatRooms} />
            <ChatWindow activeRoom={this.state.activeRoom} />
            <UserList users={this.state.currentUsers} />
        </div>
    );
  }
});

module.exports = ChatApp;