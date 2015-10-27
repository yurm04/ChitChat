/** @jsx React.DOM */

var React      = require('react');
var moment     = require('moment');
var socket     = require('socket.io-client')();
var _          = require('lodash');

var Settings   = require('./Settings');
var RoomList   = require('./RoomList');
var ChatWindow = require('./ChatWindow');
var UserList   = require('./UserList');


var ChatApp = React.createClass({

    getInitialState: function() {
        return {
            chatRooms: [],
            activeRoom: {},
            username: 'Yuraima',
            userId: ''
        }
    },

    componentDidMount: function() {
        // once initial render complete, emit init event and set data
        socket.emit('user:connected');
        socket.on('user:init', this.initData);

        // handler for new messages sent from server
        socket.on('addMessage', this.addNewMessage);
    },

    // set chat room data from websocket
    initData: function(data) {
        this.setState({
            chatRooms: data.rooms,
            activeRoom: data.rooms[0],
            userId: data.userId
        });
    },

    updateActiveRoom: function(roomId) {
        var updated = _.find(this.state.chatRooms, { id : roomId });
        this.setState({ activeRoom : updated });
    },

    // refactor this logic out to a controller
    addNewMessage: function(messageData) {
        console.log(messageData);
        var newMessage = {
            username: messageData.username,
            messageText: messageData.messageText,
            messageTime: messageData.sentTime
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
                                username={this.state.username}
                                sendMessage={this.addNewMessage}
                    />
                </div>
            </div>
        );
    }
});

module.exports = ChatApp;