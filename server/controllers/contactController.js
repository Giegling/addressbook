'use strict';

var Contact = require('../models/contact.js');

module.exports.create = function(req, res) {
	var contact = req.body;
	
	if (contact.name.trim().length == 0 || contact.email.trim().length == 0 || contact.number.trim().length == 0) {
		return res.sendStatus(400);
	}

	var contactEntry = new Contact.ContactModel();
	contactEntry.name = contact.name.trim();
	contactEntry.email = contact.email.trim();
	contactEntry.number = contact.number.trim();
	contactEntry.avatar = contact.avatar;
	contactEntry.editable = false;

	contactEntry.save(function(err) {
		if (err) {
			return res.sendStatus(400);
		}

		return res.sendStatus(200).send(contactEntry);
	});
};

module.exports.read = function(req, res) {
	Contact.ContactModel.find({}, function(err, contacts) {
		return res.send(contacts);
	})
};

module.exports.update = function(req, res) {
	var contact = req.body;

	var query = Contact.ContactModel.findOne({_id: contact._id});
	query.update({name: contact.name.trim(), email: contact.email.trim(), number: contact.number.trim()},
	function(err, nbRows, raw) {
		if (err) {
			console.log(err);
			return res.sendStatus(400);
		}

		return res.sendStatus(200);
	}
	);
};

module.exports.remove = function(req, res) {
	var contact_id = req.params.id;

	if (contact_id == "") {
		return res.sendStatus(400);
	}


	var query = Contact.ContactModel.findOne({_id: contact_id});

	query.exec(function(err, contact) {
		if (err) {
			return res.sendStatus(400);
		}

		if (contact != null) {
			contact.remove();
			
			return res.sendStatus(200);
		} else {
			console.log("Contact not found!");
		}
	});
};