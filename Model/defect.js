var mongoose = require('mongoose');

var defectSchema = mongoose.Schema({
	name:String,
	description:String,
	priority:Number,
	fixDate:Date,
	status:String
});

exports.GetAll = function(callback){
	var defectModel = mongoose.model('defectModel',defectSchema);
	
	defectModel.find(function(err,defects){
		callback(defects);
	});
};

exports.Add = function(newDefect,callback){
	newDefect.save(function(err){
		if(err)
			callback(err);
	});
}

exports.Defect = mongoose.model('defectModel',defectSchema);

exports.Seed = function(callback){
	
	var Defect = mongoose.model('defectModel',defectSchema);
	
	var Defect1 = new Defect({name:"1",priority:1});
	
	Defect1.save(function(err){
		if (err) {
			callback(err);
		}
	});
}