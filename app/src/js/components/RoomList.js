/** @jsx React.DOM */

var React = require('react');
var RoomItem = require('./RoomItem');

var RoomList = React.createClass({
  
  render: function() {
    var chatRooms;
    // render RoomItem components if rooms exist
    if (this.props.rooms !== undefined) {
        chatRooms = this.props.rooms.map( function(roomData) {
            return <RoomItem key={roomData.id}
                             roomId={roomData.id}
                             activeId={this.props.activeRoomId}
                             alertCount={roomData.alertCount}
                             roomName={roomData.roomName}
                             lastMessage={roomData.lastMessage}
                             switchRoom={this.props.switchRoom}
                    />;
            }, this);
    }

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