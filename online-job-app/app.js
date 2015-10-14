// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
// var path = require('path')


//require the databse model
//var db = require('./models/applicantDBModel.js') //moved to the routingController

//require the routingController
var routingController = require('./controllers/serverController.js')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// creates an applicant
app.post('/applicant', routingController.createApplicant)

// routes to new html page: applicants.html
app.get('/applicants', routingController.applicantsPage)

// displays a list of applicants
app.get('/applicants-query', routingController.applicantsListing)


app.delete('/applicants/:id', routingController.applicantDelete)

app.get('/applicant-profile', routingController.applicantProfile)

app.get('/profile/:id',routingController.oneMore)







// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})