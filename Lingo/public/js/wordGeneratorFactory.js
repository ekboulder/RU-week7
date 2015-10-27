angular.module('myApp')
	.factory('wordGeneratorFactory', [function(){

 
var randomWords = ['hello', 'food', 'yes', 'no', 'shoe', 'cold', 'nose', 'thank you', ' book', 'baby', 'drink', 'mother', 'hair', 'sun', 'son', 'snow', 'failure', 'beach', 'car', 'school'
   ]

var randomSelect = function () {
    return randomWords[Math.floor(Math.random()*randomWords.length)]
}

var QuizArray = []
var Quiz = function (from, to) {
      this.from               = from
      this.to                 = to
      this.word               = randomSelect()
      this.userTranslation    = ''
      this.googleTranslation  = 'equal to google\'s result'
      this.tryAgain           = "please try again"
      
      QuizArray.push(this)
 }

return {
        Quiz          : Quiz,
        QuizArray     : QuizArray,
			}
}])
