'use strict';

import React from 'react'
import NavLink from './NavLink'
// import Home from './Home'
// import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <ul role="nav" id="navbar">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/weather">Weather</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})