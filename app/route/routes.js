'use strict';

let React = require('react');
let ReactRouter = require('react-router');
let Router = ReactRouter.router;
let Route = ReactRouter.Route;
let hashHistory = ReactRouter.hashHistory;
let IndexRoute = ReactRouter.IndexRoute;

let main = require('../components/main');
let home = require('../components/home');


module.exports = (
  <Router history={hashHistory}>
    <Route path='/' component={main}>
    <IndexRoute component={home} />
    </Route>
  </Router>
)


