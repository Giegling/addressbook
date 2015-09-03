var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	editable: {type: Boolean, required: true},
	date:  {type: Date, default: Date.now},
	nick: {type: String},
	name: {type: String},
	number: {type: Number}

});

module.exports.UserModel = mongoose.model('User', userSchema);
