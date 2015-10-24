/** @jsx React.DOM */

var React = require('react');
var UserItem = require('./UserItem');

var UserList = React.createClass({
  
  render: function() {
    var users = this.props.users.map( function(user) {
        return <UserItem key={user.id} username={user.username} />;
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