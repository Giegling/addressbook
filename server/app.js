"use strict";

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var dbConfig = require('./db/config.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./routes/')(app));

module.exports = app;