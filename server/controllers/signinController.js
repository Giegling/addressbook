'use strict';

var bcrypt = require('bcryptjs');
var User = require('../models/user.js');

module.exports.check = function(req, res) {
	var user = req.body;
	
	User.UserModel.findOne({'email': user.email}, function(err, obj) {

		if (obj == null) {
			var error = 'email';
			return res.send(error);
		}

		if (user.email != obj.email) {
			var error = 'email';
			return res.send(error);
		}

		var checkPassword = obj.password;

		bcrypt.compare(user.password, checkPassword, function(err, resolution) {
			if (resolution) {
				var user_id = obj._id;

				return res.send(user_id);
			} else {
				var error = 'password';
				return res.send(error);
			}
		});

	});

};
