/** @jsx React.DOM */

var React = require('react');

var MessageList = require('./MessageList');
var MessageForm = require('./MessageForm');

var ChatWindow = React.createClass({
  
  render: function() {
    return (
        <div className="chat-window">
            <MessageList messages={this.props.activeRoom.messages} />
            <MessageForm roomId={this.props.activeRoom.id} 
                         sendMessage={this.props.sendMessage}
            />
        </div>
    );
  }
});

module.exports = ChatWindow;