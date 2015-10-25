/** @jsx React.DOM */

var React      = require('react');
var _          = require('lodash');

var RoomList   = require('./RoomList');
var ChatWindow = require('./ChatWindow');
var UserList   = require('./UserList');

var ChatApp = React.createClass({

    updateActiveRoom: function(roomId) {
        var updated = _.find(this.state.chatRooms, { id : roomId });
        this.setState({ activeRoom : updated });
    },

    addNewMessage: function(roomId, messageData) {
        
    },

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
            { id: 2, roomName: "What's for lunch?", numParticipants: 2, lastMessageTime: '1:23 PM',
                messages: [
                    { id: 1, username: 'grumps', messageTime: '10:15PM', messageText: "hey there" },
                    { id: 2, username: 'someguy', messageTime: '10:17PM', messageText: "hi there" }
                ],
                users: [{ id: 4, username: 'grumps' }, { id: 5, username: 'someguy' }] 
            },
            { id: 3, roomName: "Help I'm Alive", numParticipants: 4, lastMessageTime: '1 min ago',
                messages: [
                    { id: 1, username: 'biscuit', messageTime: '10:15PM', messageText: "feed me" },
                    { id: 2, username: 'biscuit', messageTime: '10:16PM', messageText: "right meow" }
                ],
                users: [{ id: 6, username: 'biscuit' }] 
            }
        ];

        return {
            chatRooms: CHAT_ROOMS,
            activeRoom: CHAT_ROOMS[0],
        }
    },

    render: function() {
        return (
            <div className="container">
                <RoomList rooms={this.state.chatRooms} activeRoomId={this.state.activeRoom.id} switchRoom={this.updateActiveRoom}/>
                <ChatWindow activeRoom={this.state.activeRoom} sendMessage={this.addNewMessage}/>
                <UserList users={this.state.activeRoom.users} />
            </div>
        );
    }
});

module.exports = ChatApp;