'use strict';

import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './App'
import About from './About'
import Weather from './Weather';
import City from './City'
import Zip from './Zip'
import Contact from './Contact'
import Home from './Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/weather" component={Weather}>
      <Route path="/weather/city/:city" component={City}/>
      <Route path="/weather/zip/:zip" component={Zip}/>
    </Route>
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
  </Route> 
)