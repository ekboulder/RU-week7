//Setting an Angular module: myApp
angular.module ('myApp',['ngMaterial'])

//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope, $mdSidenav, $http, languageFactory) {

	$scope.greeting = 'Hi Ed'


//For the Angular Material template
	$scope.toggleSidenav = function(menuId) {
    $scope.sideNavInvisible = !$scope.sideNavInvisible
   
    $mdSidenav(menuId).toggle();
  };

// for the form template
	$scope.translationRequest = languageFactory.translationRequest

	$scope.translate = function () {
		
		console.log('TRANSLATE')
		
		$http({
			method 	: 'POST',
			url		: '/api/translate',
			data	: $scope.translationRequest,
		}).then(
		function (returnData){
			console.log(returnData.data)
			$scope.translationRequest = returnData.data
		},
		function (error){
			console.log('error')
		})

	}


}// end of mainControllerFunc


//Registering the controller: mainController
angular.module('myApp').controller('mainController',['$scope','$mdSidenav','$http','languageFactory', mainControllerFunc]).config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('blue')
      .dark();
  });