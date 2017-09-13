var app = require('./config/express')();
var rotasSite = require('./app/routes/router')(app);

// Server listen
app.listen(3000, function () {
    console.log('server on port 3000');
});