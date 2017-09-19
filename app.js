var app = require('./config/express')();
var rotasSite = require('./app/routes/router')(app);
var rotasKeywords = require('./app/routes/keywords')(app);

const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('gluesp:server:app');

// All stay in Public is free to shared
global.APP_ROOT = require('path').join(__dirname);
app.use(express.static(APP_ROOT + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(request, response, next) {
  console.log('passei por aqui: ', request.url);
  next();
});

app.use('/api', require('./app/routes/api'));

// Server listen
app.listen(3000, function () {
    console.log('server on port 3000');
});
