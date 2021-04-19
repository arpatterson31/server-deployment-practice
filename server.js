'use strict';

const express = require('express');
const app = express();

const stamper = require('./middleware/stamper.js');
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

app.get('/', stamper, (req, res) => {
  res.status(200).send('Hey girl, hey!')
});

app.get('/data', stamper, (req, res) => {
  let output = {
    time: req.timestamp,
    10: 'even',
    5: 'odd'
  }

  res.status(200).json(output);
});

app.get('/bad', (req, res, next) => {
  next('try again!'); // when you pass next anything, you are nexting this to your error
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
}

module.exports = {
  app: app,
  start: start
}