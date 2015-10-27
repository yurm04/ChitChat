/** @jsx React.DOM */

var React = require('react');

var MessageList = require('./MessageList');
var MessageForm = require('./MessageForm');
var EmojiPicker = require('./EmojiPicker');

var ChatWindow = React.createClass({
  
  getInitialState: function() {
    return {
      showEmojis: false
    }
  },

  showContainer: function() {
    this.setState({showEmojis : true});
  },

  hideContainer: function() {
    console.log('hide!');
    this.setState({showEmojis : false});
  },
  
  render: function() {
    return (
        <div id="chat-window" ref="chatWindow">
            <MessageList messages={this.props.activeRoom.messages} />
            <EmojiPicker showEmojis={this.state.showEmojis} />
            <MessageForm roomId={this.props.activeRoom.id}
                         username={this.props.username}
                         sendMessage={this.props.sendMessage}
                         showEmojis={this.state.showEmojis}
                         showContainer={this.showContainer}
                         hideContainer={this.hideContainer}
            />
        </div>
    );
  }
});

module.exports = ChatWindow;