/** @jsx React.DOM */

var React = require('react');
var MessageList = require('./MessageList');

var ChatWindow = React.createClass({
  
  render: function() {
    return (
        <div className="chat-window">
            <MessageList messages={this.props.activeRoom.messages} />
            <div className="submit-message">
                <input type="text" placeholder="say it don't spray it..." />
                <button>send</button>
            </div>
        </div>
    );
  }
});

module.exports = ChatWindow;