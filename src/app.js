const express = require('express');
const app = express();
const logger = require('morgan');
const API_V1 = require('./routes/API_V1');
const ErrorHandler = require('./routes/ErrorHandler');

if (app.get('env') === 'production') {
  app.use(logger('combined'));
} else {
  app.use(logger('dev'));
}

app.use('/api/v1', API_V1);
app.use(ErrorHandler);

module.exports = app;
