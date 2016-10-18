(function(angular) {
  var ItemFactory = function($resource) {
    return $resource('http://localhost:8080/api/users/:id', {
      id: '@id'
    }, {
      post: {method:'POST'},
      update: {
        method: "PUT"
      },
      remove: {
        method: "DELETE"
      }
    });
  };
  
  ItemFactory.$inject = ['$resource'];
  angular.module("myApp.services").factory("Item", ItemFactory);
}(angular));