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
        var itemActive = this.props.activeId === this.props.roomId
                            ? 'sidebar-item room-item active-item'
                            : 'sidebar-item room-item';
        var alertBubble = this.props.alertCount > 0
                            ? 'alert-bubble show'
                            : 'alert-bubble';
        
        return (
            <li className={itemActive} onClick={this.handleSwitchRoom}>
                <div className="row">
                    <p className="room-title">{this.props.roomName}</p>
                    <p className={alertBubble}>{this.props.alertCount}</p>
                </div>
                <div className="row">
                    <p className="room-time">{this.props.lastMessage.messageTime}</p>
                    <div className="room-participants">{this.props.lastMessage.messageText}</div>
                </div>
            </li>
        );
    }
});

module.exports = RoomItem;