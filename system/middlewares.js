const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('public'));

    app.set('view engine', 'ejs');
    app.set('views', './app/views');
}