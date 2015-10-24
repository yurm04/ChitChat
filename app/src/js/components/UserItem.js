/** @jsx React.DOM */

var React = require('react');

var UserItem = React.createClass({
  
  render: function() {
    return (
        <li className="sidebar-item">
            <p className="username-item">{this.props.username}</p>
        </li>
    );
  }
});

module.exports = UserItem;