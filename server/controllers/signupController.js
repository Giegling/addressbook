'use strict';

var User = require('../models/user.js');

module.exports.create = function(req, res) {
	var user = req.body;

	if (user.email.trim().length == 0 || user.password.trim().length == 0) {
		return res.sendStatus(400);
	}

	var userEntry = new User.UserModel();
	userEntry.email = user.email.trim();
	userEntry.password = user.password.trim();

	userEntry.save(function(err) {
		if (err) {
			return res.sendStatus(400);
		}

		return res.sendStatus(200).send(userEntry);
	});
};