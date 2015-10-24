/** @jsx React.DOM */

var React = require('react');
var UserItem = require('./UserItem');

var UserList = React.createClass({
  
  render: function() {
    var users = this.props.users.map( function(user) {
        <UserItem username={user} />
    })

    return (
        <div className="sidebar sidebar-right">
            <h2 className="sidebar-header">users</h2>
            <ul>
                {users}
            </ul>
        </div>
    );
  }
});

module.exports = UserList;