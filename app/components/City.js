'use strict';

import React from 'react';
import NavLink from './NavLink'
import { browserHistory } from 'react-router'
import request from 'request'

export default React.createClass({
  getData: function() {
    request.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.params.city},us&APPID=5d9399e63002854b071f7d953064f0c7`, (err, response, body) => {
      if (!err && response.statusCode === 200) {
        console.log('City body res: ', body)
        return body;
      }
      if (err) console.log('error', err)
    })
  },
  render() {
    let data = this.getData();
    return (
      <div>
        <h2>Results from City search {this.props.params.city}</h2>
        <ul>
          <li>Main Temp in K {data.main}</li>
        </ul>
      </div>
    )
  }
})