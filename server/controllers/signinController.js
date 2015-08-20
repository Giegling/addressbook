'use strict';

var bcrypt = require('bcryptjs');
var User = require('../models/user.js');

module.exports.check = function(req, res) {
	var user = req.body;
	
	User.UserModel.findOne({'email': user.email}, function(err, obj) { 

		if (user.email != obj.email) {
			var error = 'email';
			return res.send(error);
		}

		var checkPassword = obj.password;

		bcrypt.compare(user.password, checkPassword, function(err, resolution) {	
			if (resolution) {
				var user = {email: obj.email};

				return res.send(user);
			} else {
				var error = 'password';
				return res.send(error);
			}
		});

	});

};