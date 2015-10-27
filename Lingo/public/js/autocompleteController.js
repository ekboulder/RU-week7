//Controller from the Angular Material site for the autocomplete functionality


angular.module('myApp').controller('DemoCtrl', DemoCtrl);
  
  function DemoCtrl ($timeout, $q, languageFactory) {
    var self = this;
    
    // list of `language` value/display objects
    self.languages     = languageFactory.languageList;
    
    self.selectedItem  = null;
    self.searchText    = null;
    self.querySearch   = querySearch;
    
    self.selectedItemChange_to = selectedItemChange_to;
    self.selectedItemChange_from = selectedItemChange_from;

    // ******************************
    // Internal methods
    // ******************************
    
    /**
     * Search for languages... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.languages.filter( createFilterFor(query) ) : [];
      return results;
    }

  
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(language) {
        return (language.value.indexOf(lowercaseQuery) === 0);
      };
    }

    function selectedItemChange_to(item) {
      if (item != undefined)
      languageFactory.translationRequest.to = item.abbrev  
    }

    function selectedItemChange_from(item) {
      if (item != undefined)
      languageFactory.translationRequest.from = item.abbrev
    }

  }