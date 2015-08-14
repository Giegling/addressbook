app.post("/",function(req,res){
	db.on('error', function (err) {
	console.log('connection error', err);
	});
	db.once('open', function () {
	console.log('connected.');
	});
	 
	var Schema = mongoose.Schema;
	var AddressSchema = new Schema({
	name : String,
	email : String,
	pass : String,
	num : Number
	});
	 
	var addresscols = mongoose.model('addresscols', AddressSchema);
	 
	var User = new addresscols({
	name : req.body.name,
	email : req.body.email,
	pass : req.body.pass,
	num : req.body.num
	});
	 
	User.save(function (err, data) {
	if (err) console.log(err);
	else console.log('Saved ', data );
	});
});