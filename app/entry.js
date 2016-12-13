'use strict';
require('!!file?name=[name].[ext]!./html/index.html');

import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from '../components/main';
import Home from '../components/home';
import About from '../components/About';

render((
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About}/>
  </Router>
  
), document.getElementById('app'))