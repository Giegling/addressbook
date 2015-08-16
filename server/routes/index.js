"use strict";

var express = require('express');
var ContactController = require('../controllers/ContactController.js');

var router = express.Router();

module.exports = function (app) {
	router.all('/*', function (req, res, next) {
		req.request_ip = (req.headers["X-Forwarded-For"] ||
		req.headers["x-forwarded-for"] ||
		req.client.remoteAddress);

		next();
	});

	router.post('/api/contact/create', ContactController.create);
	router.delete('/api/contact/remove/:id', ContactController.remove);
	router.get('/api/contact/read', ContactController.read);

	return router;
};