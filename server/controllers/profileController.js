'use strict';

var User = require('../models/user.js');

module.exports.check = function(req, res) {
	var user = req.body;
	
	User.UserModel.findOne({'_id': user._id}, function(err, obj) {
		var User = {email: obj.email, number: obj.number, editable: obj.editable, nick: obj.nick, name: obj.name};

		res.send(User);
	});

};