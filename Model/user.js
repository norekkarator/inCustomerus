var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	email:String,
	password:String,
	token:String
});

module.exports = mongoose.model('User',userSchema);