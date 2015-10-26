/** @jsx React.DOM */

var React      = require('react');
var moment     = require('moment');
var _          = require('lodash');

var Settings   = require('./Settings');
var RoomList   = require('./RoomList');
var ChatWindow = require('./ChatWindow');
var UserList   = require('./UserList');


var ChatApp = React.createClass({

    componentDidMount: function() {
        io.on('user:connected', function(msg) {
            console.log(msg);
        })
    },

    getInitialState: function() {
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

        return {
            chatRooms: CHAT_ROOMS,
            activeRoom: CHAT_ROOMS[0],
            username: 'Yuraima',
            userId: '1'
        }
    },

    updateActiveRoom: function(roomId) {
        var updated = _.find(this.state.chatRooms, { id : roomId });
        this.setState({ activeRoom : updated });
    },

    // refactor this logic out to a controller
    addNewMessage: function(messageData) {
        io.emit('chat message', 'hello');
        var newMessage = {
            username: this.state.username,
            messageText: messageData.messageText,
            messageTime: messageData.sentTime.format('h:mmA')
        };
        var chatRoomsUpdate = this.state.chatRooms;
        
        // get room and index from chatRooms
        var room = _.find(chatRoomsUpdate, { id: messageData.roomId });
        var index = _.indexOf(chatRoomsUpdate, room);
        
        // get max messageId and increment for new message
        maxMessage = _.max(room.messages, function(mId) {
            return mId.id;
        })
        newMessage.id = parseInt(maxMessage.id) + 1;

        // add message to room, then update chatRooms state
        room.messages.push(newMessage);
        chatRoomsUpdate.splice(index, 1, room);
        this.setState({ chatRooms: chatRoomsUpdate });
        socket.emit('messageAdded', messageData);
    },
    
    updateUsername: function(name) {
        this.setState({ username : name});
    },

    render: function() {
        return (
            <div className="container">
                <div className="header">
                    <Settings username={this.state.username}
                              updateUsername={this.updateUsername}
                    />
                </div>
                <div id="main">
                    <RoomList rooms={this.state.chatRooms}
                          activeRoomId={this.state.activeRoom.id}
                          switchRoom={this.updateActiveRoom}
                    />
                    <ChatWindow activeRoom={this.state.activeRoom}
                                sendMessage={this.addNewMessage}
                    />
                </div>
            </div>
        );
    }
});

module.exports = ChatApp;