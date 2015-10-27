//Setting an Angular module: myApp
angular.module ('myApp',['ngMaterial'])

//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope, $mdSidenav, $http, languageFactory, translationService) {

	$scope.greeting = 'Hi Ed'


//For the Angular Material template
	$scope.toggleSidenav = function(menuId) {
    $scope.sideNavInvisible = !$scope.sideNavInvisible
   
    $mdSidenav(menuId).toggle();
  };

// for the form template
	$scope.translationRequest = languageFactory.translationRequest

	$scope.synchronize = function (parameter) {
    $scope.translationRequest = parameter
  }
  // $scope.translate = function() {
  //   return translationService.translate($scope.translationRequest, synchronize)
  // } 
  $scope.translate = translationService.translate
  
 

}// end of mainControllerFunc


//Registering the controller: mainController
angular.module('myApp').controller('mainController',['$scope','$mdSidenav','$http','languageFactory','translationService', mainControllerFunc]).config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('blue')
      .dark();
  });