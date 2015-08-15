'use strict';

var Contact = require('../models/contact.js');

module.exports.createContact = function(req, res) {
	var contact = req.body;

	if (friend == null || friend.name == null || friend.name.trim().length == 0 ||friend.email == null) {
		return res.send(400);
	}

	var contactEntry = new db.ContactSchema;
	contactEntry.name = contact.name.trim();

	contactEntry.save(function(err) {
		if (err) {
			console.log(err);
			return res.send(400);
		}

		return res.send(200, contactEntry);
	})
}