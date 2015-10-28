/** @jsx React.DOM */

var React = require('react');

var RoomItem = React.createClass({
    
    getInitialState: function() {
        return {
            isActive: false
        }
    },

    handleSwitchRoom: function() {
        this.props.switchRoom(this.props.roomId);
    },

    render: function() {
        // class name for active item
        var active = 'sidebar-item room-item active-item';
        var notActive = 'sidebar-item room-item';
        return (
            <li className={this.props.activeId === this.props.roomId ? active : notActive} onClick={this.handleSwitchRoom}>
                <p className="room-title">{this.props.roomName}</p>
                <p className="room-time">{this.props.lastMessage.messageTime}</p>
                <div className="room-participants">{this.props.lastMessage.messageText}</div>
            </li>
        );
    }
});

module.exports = RoomItem;