/** @jsx React.DOM */

var React = require('react');
var moment = require('moment') ;

var MessageForm = React.createClass({

    getInitialState: function() {
        return {
            messageInput: ''
        }
    },

    handleMessageInput: function(e) {
        this.setState({ messageInput: e.target.value });
    },

    handleMessageSubmit: function(e) {
        e.preventDefault();
        this.setState({messageInput: ''});

        var messageData = { roomId: this.props.roomId, messageText: this.state.messageInput, sentTime: moment() }

        this.props.sendMessage(messageData);
    },

    sendMessage: function() {

    },

    render: function() {
        return (
            <form onSubmit={this.handleMessageSubmit}>
                <div className="submit-message">
                    <input className="input-message"
                           type="text"
                           value={this.state.messageInput}
                           onChange={this.handleMessageInput}
                           placeholder="say it don't spray it..."
                    />
                    
                    <input className="input-button" type="submit" value="submit" />
                </div>
            </form>
        ) 
    }
});

module.exports = MessageForm;