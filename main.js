var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var mongoose = require('mongoose');

var defectRoutes = require('./Routes/defectRoutes');
var defectModel = require('./Model/defect');

app.use('/DefectList/',defectRoutes);

mongoose.connect('mongodb://localhost');

var db = mongoose.connection;
db.on('error',function(err){console.log('connection error',err.message)});
db.once('open',function(callback){
	console.log('Conected');
})

// defectModel.Seed(function(message){
// 	console.log(message);
// });


server.listen(3000,function(){
	console.log('Server is listening on port 3000');
});