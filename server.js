'use strict';

let express = require('express');
let path = require('path');
let compression = require('compression')
let app = express();

app.use(compression())
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Productino server running on port: ' + PORT));