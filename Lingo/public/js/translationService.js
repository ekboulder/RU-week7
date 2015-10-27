angular.module('myApp')
	.service('translationService', ['$http', function($http){

this.translate = function (translationRequest, callBack) {
		
		console.log('TRANSLATE PLEASE')
		
		$http({
			method 	: 'POST',
			url		: '/api/translate',
			data	: translationRequest,
		}).then(
		function (returnData){
			console.log('return data:',returnData.data)
			// translationRequest = returnData.data
			callBack(returnData.data)
		},
		function (error){
			console.log('error')
			translationRequest.result = 'Please try again'
		})


	}


}])