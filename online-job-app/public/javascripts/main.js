angular.module('JobApp', ['ngRoute'])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp').config(function($routeProvider){
	$routeProvider
		.when('/profile/:id', {
			controller 	: 'oneMoreController',
			templateUrl : 'oneMore.html', 
		})
		.otherwise({
			redirectTo: '/'
		})
})


angular.module('JobApp')
	.controller('oneMoreController', ['$scope','$http', '$routeParams','$location', function($scope, $http, $routeParams, $location){
			
			$scope.applicant = {}
			$scope.temp = $routeParams
			console.log('Location!!!!:', $location)
			console.log('we are in', $scope.temp)
			
			// $http({
			// 	method 	: 'GET',
			// 	url		: '/applicant-profile',
			// 	data 	: $routeParams,
			// }).then(function(returnData){
			// 	$scope.applicant = returnData.data
			// 	console.log('>>>',returnData)
			// 	console.log('>>>>>', returnData.data)
			// }, function (error){
			// 	console.log('error:', error)
			// })
	}])

angular.module('JobApp')
	.controller('applicantController', ['$scope','$http', function($scope, $http){
		
		$scope.applicantsList = []
		
		// $scope.getApplicantsList = function() {	
			$http({
				method 	: 'GET',
				url		: '/applicants-query',
			}).then(function(returnData){
				$scope.applicantsList = returnData.data
				// console.log($scope.applicantsList)
				console.log('>>>>>', returnData.data)
			}, function (error){
				console.log('error:', error)
			})
		
		// }// end of getApplicantsList

		$scope.deleteApplicant = function (applicantId) {
			// console.log($http.delete)
			$http({
				method	: 'DELETE',
				url		: '/applicants/'+applicantId,
			}).then(function(returnData){
				console.log('<<<<<<<', returnData.data)
				$scope.applicantsList = returnData.data
			}, function(error){
				console.log('error2:', error)
			})

		}//end of deleteApplicant

}]);  //end of applicantController
