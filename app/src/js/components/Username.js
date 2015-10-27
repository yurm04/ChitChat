/** @jsx React.DOM */

var React = require('react');

var Username = React.createClass({

    getInitialState: function() {
        return {
            focused: false
        }
    },

    updateUsername: function(e) {
        e.preventDefault();
        this.props.updateUsername(e.target.value);
    },

    handleFocus: function() {
        this.setState({ focused: true });
    },

    handleLeave: function() {
        this.setState({ focused: false });
    },

    render: function() {
        var focus = 'focus';
        var infoFocus = 'user-info focus';
        return (
            <div className="user-info"
                 onMouseEnter={this.handleFocus}
                 onMouseLeave={this.handleLeave}
            >
                @
                <input type="text"
                value={this.props.username}
                onChange={this.updateUsername}
                className={this.state.focused ? focus : ''}
                />
            </div>
        );
    }
});

module.exports = Username;