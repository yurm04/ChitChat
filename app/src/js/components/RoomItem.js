/** @jsx React.DOM */

var React = require('react');


var RoomItem = React.createClass({
  
  render: function() {
    return (
        <li className="sidebar-item">
            <p className="room-title">{this.props.roomName}</p>
            <p className="room-time">{this.props.lastMessageTime}</p>
            <p className="room-participants">{this.props.numParticipants} active users</p>
        </li>
    );
  }
});

module.exports = RoomItem;