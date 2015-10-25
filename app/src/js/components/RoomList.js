/** @jsx React.DOM */

var React = require('react');
var RoomItem = require('./RoomItem');

var RoomList = React.createClass({
  
  render: function() {
    var chatRooms = this.props.rooms.map( function(roomData) {
        return <RoomItem key={roomData.id}
                         roomId={roomData.id}
                         activeId={this.props.activeRoomId}
                         roomName={roomData.roomName}
                         numParticipants={roomData.numParticipants}
                         lastMessageTime={roomData.lastMessageTime}
                         switchRoom={this.props.switchRoom}
                />;
    }, this);

    return (
        <div className="sidebar sidebar-left">
            <ul>
                {chatRooms}
            </ul>
        </div>
    );
  }
});

module.exports = RoomList;