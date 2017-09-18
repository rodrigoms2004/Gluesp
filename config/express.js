var app = require ('express')();
var ejs = require('ejs');

app.set('view engine', 'ejs')
app.set('views','./app/views');


module.exports = function () {
    return app;
};