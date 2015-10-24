/** @jsx React.DOM */

var React = require('react');

var Message = React.createClass({
  
  render: function() {
    return (
        <div className="message-block">
            <div className="message-detail">
                <span className="sent-from">{this.props.username}</span>
                <span className="sent-time">{this.props.messageTime}</span>
            </div>
            <div className="message">
                {this.props.messageText}
            </div>
        </div>
    );
  }
});

module.exports = Message;