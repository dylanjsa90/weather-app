'use strict';

import React from 'react'
import NavLink from './NavLink'
import { getWeather } from '../utils/weather'
import City from './City'
import Zip from './Zip'


// import { browserHistory } from 'react-router'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  handleSubmit(event) {
    event.preventDefault();
    let city = event.target.elements[0].value;
    let zip = event.target.elements[1].value
    console.log('City: ' + city);
    console.log('Zip: ' + zip);
    
    let path = (city) ? `/weather/city/${city}` : `/weather/zip/${zip}`
    this.context.router.push(path)    
  },

  render() {
    return (
    <div>
      <ul>

        <li>
          <h2>Search By City</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Seattle"/> / {' '}
            <input type="number" placeholder="98110"/>{' '}
            <button type="submit">Get Weather</button>
          </form>
        </li>
      </ul>
      {this.props.children}
    </div>
    )
  }
})