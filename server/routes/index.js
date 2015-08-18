"use strict";

var express = require('express');
var ContactController = require('../controllers/ContactController.js');
var SignupController = require('../controllers/SignupController.js');
var SigninController = require('../controllers/SigninController.js');

var router = express.Router();

module.exports = function (app) {
	router.all('/*', function (req, res, next) {
		req.request_ip = (req.headers["X-Forwarded-For"] ||
		req.headers["x-forwarded-for"] ||
		req.client.remoteAddress);

		next();
	});

	router.post('/api/signup', SignupController.create);
	router.post('/api/signin', SigninController.check);

	// CONTACTS ROUTES
	router.post('/api/contact/create', ContactController.create);
	router.put('/api/contact/update', ContactController.update);
	router.delete('/api/contact/remove/:id', ContactController.remove);
	router.get('/api/contact/read', ContactController.read);

	return router;
};