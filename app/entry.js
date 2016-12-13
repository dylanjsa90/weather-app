'use strict';
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

import React from 'react';
import { render } from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Repo from './components/Repo';
import Repos from './components/Repos';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
  
), document.getElementById('app'))