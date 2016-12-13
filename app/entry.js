'use strict';

require('!!file?name=[name].[ext]!./html/index.html');

let React = require('react');
let ReactDOM = require('react-DOM');

let Hello = React.createClass({
  render: function() {
    return (
      <div>Hello React Test</div>
    )
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'))