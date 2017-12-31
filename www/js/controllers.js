angular.module('shopping')
.controller('ShoppingCtrl', function($scope, $http) {
  var url = 'https://projet-mobile-279c4.firebaseio.com/items.json';

  $scope.items = getItems();

  $scope.addItem = function() {
    var name = prompt("Nom des articles à acheter :");
    if (name) {
      var postData = {
        "name": name
      };
      $http.post(url, postData).success(function(data) {
        $scope.items = getItems();
      });
    }
  };


  function getItems() {
    var items = [];
    $http.get(url).success(function(data) {
      angular.forEach(data, function(value, key) {
        var name = {name: value.name};
          items.push(name);
      });
    });

    return items;
  }

});


