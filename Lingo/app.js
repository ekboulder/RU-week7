// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

//Controllers
var router = require('./controllers/routingController') 

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', router.home)

app.post('/api/translate', router.translate)

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})