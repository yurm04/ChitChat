/** @jsx React.DOM */

var React = require('react');
var Hello = React.createClass({

  render: function() {
    return (
      <h2>HELLLLOOOOOOO</h2>      
    );
  }
});

React.render(
  <Hello />,
  document.getElementById('app')
)