'use strict';
require('!!file?name=[name].[ext]!./html/index.html');

import React from 'react';
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About}/>
    </Route>
  </Router>
  
), document.getElementById('app'))