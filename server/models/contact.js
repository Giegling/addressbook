var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	name: {type: String, required: true },
	email: {type: String, required: true },
	number: {type: String, required: true},
	editable: {type: Boolean, required: true}
});

module.exports.ContactModel = mongoose.model('Contact', ContactSchema);