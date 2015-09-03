'use strict';

var User = require('../models/user.js');

module.exports.check = function(req, res) {
	var user = req.body;

	User.UserModel.findOne({_id: user._id}, function(err, obj) {
		var User = {email: obj.email, number: obj.number, editable: obj.editable, nick: obj.nick, name: obj.name};

		res.send(User);
	});

};

module.exports.update = function(req, res) {
	var user = req.body;

	var query = User.UserModel.findOne({_id: user._id});
	query.update({
		name: user.name,
		nick: user.nick,
		number: user.number
	},
	function(err, nbRows, raw) {
		if (err) {
			return res.sendStatus(400);
		}

		return res.sendStatus(200);
		}
	);

};
