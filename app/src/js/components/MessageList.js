/** @jsx React.DOM */

var React = require('react');

var MessageList = React.createClass({
  
  render: function() {
    var messages = this.props.messages.map( function(messageData) {
        return <Message username={messageData.username} messageTime={messageData.messageTime} messageText={messageData.messageText} />;
    })
    return (
        <div className="message-list">
            {messages}
        </div>
    );
  }
});

module.exports = MessageList;