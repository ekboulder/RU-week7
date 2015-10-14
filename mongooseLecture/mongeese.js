//require the mongoose node module
var mongoose = require('mongoose')

//we need to connect to the databse
//below is the quivalent mongo shell command: use candyDB
mongoose.connect('mongodb://localhost/candyDB')   //we just called the databse candyDB

var candySchema = mongoose.Schema({							//.SChema is capital because it's a constructor
	name			: {type: String, 	required 	: true}, //could hsve also added the unique key/proeprty 
	highFructose	: {type: Boolean, 	default		: true}, 
	nuts			: Boolean,
	calories		: Number,
	sweetness		: Number,
	bestFriend		: String,
	//anydatatype		:{},			//just pass an object for any data type
})

var Candy = mongoose.model('Candy', candySchema)  //in the shell, mongoose will lower case and pluralize 'Candy' into candies or candys


//create a new candy and save it to the database
// var heathBar = new Candy({
// 	name			: 'Scooby Doo',
// 	highFructose	: false,
// 	nuts			: true,
// 	calories		: 1020,
// 	sweetness		: 7.65,
// 	bestFriend		: 'Shaggy Snack',
// })

// heathBar.save(function(err, data) {
// 	console.log('Err: ', err)
// 	console.log('DATA: ', data)
// })

//Find Documents form the database
//equivalentto: db.collectionName.find()
var allMyCandies = []								// in a regular constructor, you would have passed this to your controller. but not in the case of a database. the array data may get stail. 


Candy.find({}, function (err, candies) {			// use the {} parameter to set a filter/search
	console.log('Candy... : ', candies)
	allMyCandies = candies
})

Candy.find(  {nuts: false}, function (err, candies) {			//filter your search
	console.log('Candy... : ', candies)
	allMyCandies = candies
})

Candy.find({calories : {$gt : 500} }, function (err, candies) {		//greater than operator'>'
	console.log('Candy... : ', candies)
	allMyCandies = candies
} )

console.log('---Async-----') //to illustrate the asynchrono9us nature of the mango calls.