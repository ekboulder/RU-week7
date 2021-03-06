//this is our server controller. It is also where we access the datbase

//require the databse model
var db = require('../models/applicantDBModel.js')

var createApplicant = function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	
	var newApplicant = new db.Applicant(req.body)
	newApplicant.save(function (err){
		if (err)
		console.log('error')
		else
		//res.send('Thank you for your application. It has been saved to our database.')
		res.redirect('/applicants')
	})
	console.log('the proof', req.body)
	// res.send('Success!!!!!');
	// res.redirect('/applicants')

}

var applicantsPage = function(req, res){
	res.sendFile('html/applicants.html', {root : './public'})
}

var applicantsListing = function(req, res){
	db.Applicant.find({}, function(error, data){
		if ( error ) console.log(error)
		else res.send(data)
	})
	// res.sendFile('html/applicants.html', {root : './public'});
}

var applicantDelete = function(req,res){
	console.log('>>>>>>>>',req.params.id)
	db.Applicant.remove({ _id : req.params.id }, function (error, removed){
		if (error ) console.log(error)
		else {
			// console.log('return of the remove method:', removed)
			// res.send(removed)
			db.Applicant.find({}, function(error, data){
				if ( error ) console.log(error)
				else res.send(data)
			})
		}
	})

}

var oneMore = function(req,res) {
	// console.log('>>>>>>>>',req.params.id)
	// console.log ('this is the applicant Profile Route')
	res.sendFile('html/oneMore.html', {root : './public'})

	// db.Applicant.find({_id : req.params.id }, function(error, data){
	// 			if ( error ) console.log(error)
	// 			else res.send(data)
	// }) 
}

var applicantProfile = function (req, res) {
	
	console.log('i am in the profile route: ', req.body )
	
	// db.Applicant.find({_id : req.body.id}, function(error, data){
	// 			if ( error ) console.log(error)
	// 			else res.send(data)
	// 		})

}

module.exports = {
	createApplicant		: createApplicant,
	applicantsPage		: applicantsPage,
	applicantsListing	: applicantsListing,
	applicantDelete		: applicantDelete,
	oneMore 			: oneMore,
	applicantProfile	: applicantProfile, 
}








