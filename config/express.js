/* app/config/express.js */
'use strict'

const app = require('express')();
const ejs = require('ejs');

app.set('view engine', 'ejs')
app.set('views', './app/views');

module.exports = () => {
    return app;
};