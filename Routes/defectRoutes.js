var express = require('express');
var defectModel = require('../Model/defect');
var bodyParser = require('body-parser');

var router = express.Router();
var parseUrlEncoded = bodyParser.urlencoded({extended:true});

router.route('/')
		.get(function(req,res){
			defectModel.GetAll(function(dd){
				res.send(dd);
			})
		})
		.post(parseUrlEncoded,function(req,res){
			defectModel.Add(new defectModel.Defect(req.body),function(err){
				res.send(err.message);
			});
			res.sendStatus(200);
		});


router.route('/:id')
.get(function(req,res){
	res.send(req.params.id);
});


module.exports = router;