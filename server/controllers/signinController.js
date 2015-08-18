'use strict';

var bcrypt = require('bcryptjs');
var User = require('../models/user.js');

module.exports.check = function(req, res) {
	var user = req.body;

	User.UserModel.find(user.email, function(err, users) {
		var checkPassword = users[0].password;

		bcrypt.compare(user.password, checkPassword, function(err, resolution) {
			if (resolution) {
				return res.send(resolution);
			}
		});

	});

};