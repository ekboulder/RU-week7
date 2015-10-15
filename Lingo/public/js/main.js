//Setting an Angular module: myApp
angular.module ('myApp',['ngMaterial'])

//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope, $mdSidenav, $http) {

	$scope.greeting = 'Hi Ed'


//For the Angular Material template
	$scope.toggleSidenav = function(menuId) {
    $scope.sideNavInvisible = !$scope.sideNavInvisible
   
    $mdSidenav(menuId).toggle();
  };

// for the form template
	$scope.translationRequest = {}

    $scope.languageList = {
  "Afrikaans": "af",
  "Albanian": "sq",
  "Arabic": "ar",
  "Armenian": "hy",
  "Azerbaijani": "az",
  "Basque": "eu",
  "Belarusian": "be",
  "Bengali": "bn",
  "Bosnian": "bs",
  "Bulgarian": "bg",
  "Catalan": "ca",
  "Cebuano": "ceb",
  "Chichewa": "ny",
  "Chinese Simplified": "zh-CN",
  "Chinese Traditional": "zh-TW",
  "Croatian": "hr",
  "Czech": "cs",
  "Danish": "da",
  "Dutch": "nl",
  "English": "en",
  "Esperanto": "eo",
  "Estonian": "et",
  "Filipino": "tl",
  "Finnish": "fi",
  "French": "fr",
  "Galician": "gl",
  "Georgian": "ka",
  "German": "de",
  "Greek": "el",
  "Gujarati": "gu",
  "Haitian Creole": "ht",
  "Hausa": "ha",
  "Hebrew": "iw",
  "Hindi": "hi",
  "Hmong": "hmn",
  "Hungarian": "hu",
  "Icelandic": "is",
  "Igbo": "ig",
  "Indonesian": "id",
  "Irish": "ga",
  "Italian": "it",
  "Japanese": "ja",
  "Javanese": "jw",
  "Kannada": "kn",
  "Kazakh": "kk",
  "Khmer": "km",
  "Korean": "ko",
  "Lao": "lo",
  "Latin": "la",
  "Latvian": "lv",
  "Lithuanian": "lt",
  "Macedonian": "mk",
  "Malagasy": "mg",
  "Malay": "ms",
  "Malayalam": "ml",
  "Maltese": "mt",
  "Maori": "mi",
  "Marathi": "mr",
  "Mongolian": "mn",
  "Myanmar (Burmese)": "my",
  "Nepali": "ne",
  "Norwegian": "no",
  "Persian": "fa",
  "Polish": "pl",
  "Portuguese": "pt",
  "Punjabi": "ma",
  "Romanian": "ro",
  "Russian": "ru",
  "Serbian": "sr",
  "Sesotho": "st",
  "Sinhala": "si",
  "Slovak": "sk",
  "Slovenian": "sl",
  "Somali": "so",
  "Spanish": "es",
  "Sudanese": "su",
  "Swahili": "sw",
  "Swedish": "sv",
  "Tajik": "tg",
  "Tamil": "ta",
  "Telugu": "te",
  "Thai": "th",
  "Turkish": "tr",
  "Ukrainian": "uk",
  "Urdu": "ur",
  "Uzbek": "uz",
  "Vietnamese": "vi",
  "Welsh": "cy",
  "Yiddish": "yi",
  "Yoruba": "yo",
  "Zulu": "zu"
}




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
angular.module('myApp').controller('mainController',['$scope','$mdSidenav','$http',mainControllerFunc]).config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('blue')
      .dark();
  });

/////////////////////////////////////////////////////





angular.module('myApp').controller('DemoCtrl', DemoCtrl);
  function DemoCtrl ($timeout, $q) {
    var self = this;
    // list of `state` value/display objects
    self.states        = loadAll();
    self.selectedItem  = null;
    self.searchText    = null;
    self.querySearch   = querySearch;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : [];
      return results;
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }
  }
