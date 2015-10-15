//require the Model
var db = require('../models/wordModel')
//require google Translate
var googleTranslate = require('../node_modules/google-translate')('AIzaSyCBqU-YbJKMOJdGDdxBkgDDUev_l_vGemQ');




var home = function(req, res){
  	console.log('this is the server')
	res.sendFile('html/home.html', {root : './public'})
  //res.send('Hello Ed')
}



var translate = function(req, res){
	console.log('Ready to translate: ', req.body)
	
	var translationRequest = req.body
	
	googleTranslate.translate(translationRequest.word, translationRequest.from, translationRequest.to, function(err, translation) {
		if(err) { 
			console.log('Error from the google translation API: ', err)
		} else {
			translationRequest.result = translation.translatedText
			console.log(translationRequest)

			res.send(translationRequest)
		}
	})
	
}



module.exports = {
	home		: home,
	translate	: translate,
}