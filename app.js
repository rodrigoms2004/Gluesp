var app = require('./config/express')();
var rotasSite = require('./app/routes/router')(app);
var rotasKeywords = require('./app/routes/keywords')(app);

var express = require('express');
// All stay in Public is free to shared
global.APP_ROOT = require('path').join(__dirname);
app.use(express.static(APP_ROOT + '/public'));

// Server listen
app.listen(3000, function () {
    console.log('server on port 3000');
});