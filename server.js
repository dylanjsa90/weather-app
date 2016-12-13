'use strict';

import React from 'react';
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import routes from './app/components/routes'

let express = require('express');
let path = require('path');
let compression = require('compression')
let app = express();

app.use(compression())
app.use(express.static(path.join(__dirname, 'build'), {index: false}));

app.get('*', (req, res) => {
  match({routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
  res.sendFile(path.join(__dirname, 'index.html'))
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Production server running on port: ' + PORT));