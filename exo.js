/**
 * 
 * Module dependencies.
 */
// Dependencies
var fs = require('fs');
var express = require('express')
  , format = require('util').format;
var date = new Date();
var path = require('path')
var app = module.exports = express();

//Configuration
var uploadDirectory = './uploads/';
var idLength = 10;

// Functions
function makeid()
{
    var id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < idLength; i++ )	{
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}


//BodyParser
app.use(express.bodyParser({keepExtensions: true, uploadDir:uploadDirectory}))

// Form
app.get('/', function(req, res){
  res.send('<form method="post" enctype="multipart/form-data">'
    + '<p>Image: <input type="file" name="image" /></p>'
    + '<p><input type="submit" value="Upload" /></p>'
    + '</form>');
});

// Generate new ID (filename) for uploaded file)
app.post('/', function(req, res, next){
	var newFileName = makeid() + path.extname(req.files.image.name)
  	fs.renameSync(req.files.image.path, uploadDirectory + newFileName);
  	res.json(200, {imageID: newFileName})
});

if (!module.parent) {
  	app.listen(3000);
  	console.log('Node started on ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - " + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear());
}

