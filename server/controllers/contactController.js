'use strict';

var Contact = require('../models/contact.js');

module.exports.create = function(req, res) {
	var contact = req.body;
	
	if (contact.name == "" || contact.name.trim().length == 0 || contact.email == "" || contact.email.trim().length == 0 || contact.number == "" || contact.number.trim().length == 0) {
		return res.send(400);
	}

	var contactEntry = new Contact.ContactModel();
	contactEntry.name = contact.name.trim();
	contactEntry.email = contact.email.trim();
	contactEntry.number = contact.email.trim();

	contactEntry.save(function(err) {
		if (err) {
			console.log(err);
			return res.send(400);
		}

		return res.status(200).send(contactEntry);
	})
}