'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./handlers/404.js');
const errors = require('./handlers/500.js');

app.use('*', notFoundHandler);
app.use(errors);

function start(port) {
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
}

module.exports = {
  app: app,
  start: start
}