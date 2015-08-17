var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	name: {type: String, required: true },
	email: {type: String, required: true },
	number: {type: String, required: true},
	avatar: {type: String, required: false},
	editable: {type: Boolean, required: true},
	date:  {type: Date, default: Date.now}
});

module.exports.ContactModel = mongoose.model('Contact', ContactSchema);