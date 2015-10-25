/** @jsx React.DOM */

var React = require('react');

var MessageForm = React.createClass({

    handleMessageForm: function(e) {
        e.preventDefault();
        
    },

    sendMessage: function() {

    },

    render: function() {
        return (
            <form onSubmit={this.handleMessageForm}>
                <div className="submit-message">
                    <input className="input-message" type="text" placeholder="say it don't spray it..." />
                    <input className="input-button" type="submit" value="submit" />
                </div>
            </form>
        ) 
    }
});

module.exports = MessageForm;