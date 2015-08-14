"use strict";

var express = require('express');

var router = express.Router();

module.exports = function (app) {
	router.all('/*', function (req, res, next) {
		req.request_ip = (req.headers["X-Forwarded-For"] ||
		req.headers["x-forwarded-for"] ||
		req.client.remoteAddress);

		next();
	});

	return router;
};