/** @jsx React.DOM */

var React = require('react');
var RoomItem = require('./RoomItem');

var RoomList = React.createClass({
  
  render: function() {
    var chatRooms = this.props.rooms.map( function(roomData) {
        return <RoomItem roomName={roomData.roomName} numParticipants={roomData.numParticipants} lastMessageTime={roomData.lastMessageTime} />;
    });

    return (
        <div className="sidebar sidebar-left">
            <h2 className="sidebar-header">conversations</h2>
            <ul>
                {chatRooms}
            </ul>
        </div>
    );
  }
});

module.exports = RoomList;