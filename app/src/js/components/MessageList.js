/** @jsx React.DOM */

var React = require('react');
var Message = require('./Message');

var MessageList = React.createClass({
  
  render: function() {
    // render Messages component if messages exist
    var messages;
    if (this.props.messages !== undefined) {
        messages = this.props.messages.map( function(messageData) {
            return <Message key={messageData.id} username={messageData.username} messageTime={messageData.messageTime} messageText={messageData.messageText} />;
        });
    }

    return (
        <div className="message-list">
            {messages}
        </div>
    );
  }
});

module.exports = MessageList;