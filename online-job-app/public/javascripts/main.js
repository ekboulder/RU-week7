angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

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
