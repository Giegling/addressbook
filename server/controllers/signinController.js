'use strict';

var bcrypt = require('bcryptjs');
var User = require('../models/user.js');

module.exports.check = function(req, res) {
	var user = req.body;

	User.UserModel.find(user.email, function(err, users) {
		if (user.email != users[0].email) {
			var error = 'email';
			return res.send(error);
		}
		var checkPassword = users[0].password;

		bcrypt.compare(user.password, checkPassword, function(err, resolution) {	
			if (resolution) {
				var user = {email: users[0].email};

				return res.send(user);
			} else {
				var error = 'password';
				return res.send(error);
			}
		});

	});

};