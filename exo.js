/**
 * 
 * Module dependencies.
 */
 
var fs = require('fs');
var express = require('express')
  , format = require('util').format;
var date = new Date();
var path = require('path')
var app = module.exports = express();

// Functions

function makeid()
{
    var id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    
    return id;
}

//BodyParser
app.use(express.bodyParser({keepExtensions: true, uploadDir:'./uploads'}))

// Form
app.get('/', function(req, res){
  res.send('<form method="post" enctype="multipart/form-data">'
    + '<p>Title: <input type="text" name="title" /></p>'
    + '<p>Image: <input type="file" name="image" /></p>'
    + '<p><input type="submit" value="Upload" /></p>'
    + '</form>');
});

// Generate new ID (filename) for uploaded file)
app.post('/', function(req, res, next){
	var newFileName = makeid() + path.extname(req.files.image.name)
  	fs.renameSync(req.files.image.path, './uploads/' + newFileName);
  	console.log('File uploaded: ' + newFileName);
  	
  	res.send('Find your image on 127.0.0.1:3000/uploads/' + newFileName);
  	
});

if (!module.parent) {
  	app.listen(3000);
  	console.log('Node started on ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - " + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear());
}

