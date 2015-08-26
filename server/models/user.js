var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	date:  {type: Date, default: Date.now}
});

module.exports.UserModel = mongoose.model('User', userSchema);