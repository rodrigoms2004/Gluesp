var app = require('./config/express')();
var rotasSite = require('./app/routes/router')(app);

const express = require('express');
// tudo o que estiver na pasta public é estático
global.APP_ROOT = require('path').join(__dirname);
app.use(express.static(APP_ROOT + '/public'));



// Server listen
app.listen(3000, function () {
    console.log('server on port 3000');
});
