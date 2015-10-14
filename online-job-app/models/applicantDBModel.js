//require mongoose module
var mongoose = require('mongoose')

//connect to MongoDB 
mongoose.connect('mongodb://localhost/Omega3Studios')

//define the schema
var applicantSchema = mongoose.Schema({
	name   	: String,
	bio		: String,
	skills	: String,
	years	: Number,
	why		: String,
})

//entrypoint into Database Collection: the document Constructor
var Applicant = mongoose.model('Applicant', applicantSchema)	//'Applicant' is thesingular name of the collection

module.exports = {
	Applicant		: Applicant, 
}
