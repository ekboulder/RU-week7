angular.module('myApp').controller('SelectAsyncController', function($timeout, $scope, languageFactory) {
  

      $scope.language = null;
      $scope.languageList = languageFactory.languageList;
      $scope.loadLanguageList = function() {
              // Use timeout to simulate a 650ms request.
              return $timeout(function() {
                      $scope.languageList =  $scope.languageList  || [
                          { id: 1, name: 'Scooby Doo' },
                          { id: 2, name: 'Shaggy Rodgers' },
                          { id: 3, name: 'Fred Jones' },
                          { id: 4, name: 'Daphne Blake' },
                          { id: 5, name: 'Velma Dinkley' }
                      ];
               }, 650);
      };

});

angular.module('myApp').controller('AppCtrl', function($scope, wordGeneratorFactory) {
  
      new wordGeneratorFactory.Quiz
      $scope.quizArray = wordGeneratorFactory.QuizArray

      $scope.verifyTranslation = function(){
        console.log('is it your birthday?')
        
        var quizQuestion = $scope.quizArray.length
      }
  
  

  });

