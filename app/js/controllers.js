(function(angular) {
  var AppController = function($scope, Item) {
    
    $scope.test="qqqq";
    $scope.items=[];
    
    $scope.addObject = function (obj) {
            $scope.items.push(obj);
        };
    
    Item.query(function(response) {
      $scope.items = response ? response : [];
    });
    
    $scope.addItem = function(description) {
      $scope.test="add";
      new Item({
        name: description
      }).$save(function(item) {
      	$scope.test=item.name;
        $scope.items.push(item);
      });
      $scope.newItem = "";
    };
    
    $scope.updateItem = function(item) {
      item.$update();
    };
    
    $scope.deleteItem = function(item) {
      $scope.test="delete";
      item.$remove(function() {
        $scope.items.splice($scope.items.indexOf(item), 1);
      });
    };
  };
  
  AppController.$inject = ['$scope', 'Item'];
  angular.module("myApp.controllers").controller("AppController", AppController);
}(angular));