var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		email: {
			type: String,
			unique: true,
			sparse: true
	},
		password: String,
		resetPasswordToken: String,
		resetPasswordExpires: Date,
		activationToken: String
	},
	profile: {
		firstName: String,
		lastName: String
	}
});

userSchema.methods.generateHash = function (password) {
	var bcrypt = require('bcrypt-nodejs');
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validatePassword = function (password) {
	var bcrypt = require('bcrypt-nodejs');
	 return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);