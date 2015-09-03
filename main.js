var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var morgan = require('morgan');
var defectRoutes = require('./Routes/defectRoutes');
var userRoutes = require('./Routes/userRoutes');
var defectModel = require('./Model/defect');

var app = express();
var server = http.createServer(app);

app.use('/DefectList/',defectRoutes);
app.use('/Login/',userRoutes);

// app.use(morgan('dev'));



mongoose.connect('mongodb://localhost');

var db = mongoose.connection;
db.on('error',function(err){console.log('connection error',err.message)});
db.once('open',function(callback){
	console.log('Conected');
})


process.on('uncaughtException', function(err) {
    console.log(err);
});


server.listen(3000,function(){
	console.log('Server is listening on port 3000');
});