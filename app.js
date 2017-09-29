/* app.js */
'use strict'

const app = require('./config/express')();
const rotasSite = require('./app/routes/router')(app);
const rotasKeywords = require('./app/routes/keywords')(app);
const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('gluesp:server:app');

/* all stay in Public is free to shared */
global.APP_ROOT = require('path').join(__dirname);
app.use(express.static(APP_ROOT + '/public'));

/* parser json */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (request, response, next) {
  console.log('passei por aqui: ', request.url);
  next();
});

/* inside next in the config/express */
app.use('/api', require('./app/routes/api'));

const server = app.listen(3000, function () {
  console.log('Servidor Express iniciado na porta %s', server.address().port);
});
