/** @jsx React.DOM */

var React      = require('react');
var moment     = require('moment');
var socket     = require('socket.io-client')();
var _          = require('lodash');

var App        = require('../App');
var Username   = require('./Username');
var RoomList   = require('./RoomList');
var ChatWindow = require('./ChatWindow');
var UserList   = require('./UserList');


var ChatApp = React.createClass({

    getInitialState: function() {
        return {
            chatRooms: [],
            activeRoom: {},
            username: 'ChangeUser',
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
        // set alertCount to 0 if active rooms
        // updated.activeRoom.alertCount = 0;
        updated.alertCount = 0;
        this.setState({ activeRoom : updated });
    },

    addNewMessage: function(messageData) {
        var updatedRooms = App.addNewMessage(messageData, this.state.chatRooms, this.state.activeRoom.id);
        console.log(updatedRooms);
        this.setState({ chatRooms: updatedRooms });
    },
    
    updateUsername: function(name) {
        this.setState({ username : name});
    },

    render: function() {
        return (
            <div className="container">
                <div className="header">
                    <Username username={this.state.username}
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