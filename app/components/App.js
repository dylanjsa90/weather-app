'use strict';

import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Practice</h1>
        <ul role="nav" id="navbar">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})