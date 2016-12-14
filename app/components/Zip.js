import React from 'react';
import request from 'request'

export default React.createClass({
  getData: function() {
    request.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.props.params.zip},us&APPID=5d9399e63002854b071f7d953064f0c7`, (err, response, body) => {
      if (!err && response.statusCode === 200) {
        console.log('Zip body res: ', body)
        return body;
      }
      if (err) console.log('error', err)
    })
  },
  render() {
    let body = this.getData();
    return (
      <div>
        <h2>{this.props.params.zip}</h2>
        <ul>
          <li>Main in K {body.weather[0]}</li>
        </ul>
      </div>
    )
  }
})