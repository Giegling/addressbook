var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
	name: {type: String, required: true },
	email: {type: String, required: true },
	number: {type: String, required: true}
});

exports.ContactModel = mongoose.model('Contact', contactSchema);