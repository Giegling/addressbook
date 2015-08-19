'use strict';

var bcrypt = require('bcryptjs');
var User = require('../models/user.js');

module.exports.create = function(req, res) {
	var newUser = req.body;

	User.UserModel.find(newUser.email, function(err, users) {
		var checkEmail = users[0].email;
		
		if (checkEmail != newUser.email) {
				bcrypt.genSalt(10, function(err, salt) {
				    bcrypt.hash(newUser.password, salt, function(err, hash) {
				       	newUser.password = hash;
				       
				       	var userEntry = new User.UserModel();
						userEntry.email = newUser.email;
						userEntry.password = newUser.password;

						userEntry.save(function(err) {
							if (err) {
								return res.sendStatus(400);
							}

							return res.sendStatus(200).send(userEntry);
						});
				    });
			});

		} else {
			return res.send('email');
		}	
	});


	
};