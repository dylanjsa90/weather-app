'use strict';

import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Practice</h1>
        <ul role="nav" id="navbar">
          <li><Link to="/home" activeStyle={{color: 'Red' }}>Home</Link></li>
          <li><Link to="/about" activeStyle={{color: 'red' }}>About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})