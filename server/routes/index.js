"use strict";

var express = require('express');
var contactController = require('../controllers/contactController.js');

var router = express.Router();

module.exports = function (app) {
	router.all('/*', function (req, res, next) {
		req.request_ip = (req.headers["X-Forwarded-For"] ||
		req.headers["x-forwarded-for"] ||
		req.client.remoteAddress);

		next();
	});

	router.post('/api/v1/contact/', contactController.create);

	return router;
};