var app = angular.module('SelectApp', [ ]);

app.controller('selectController', function($scope) {
  $scope.category = ['Men', 'Women', 'Electronics', 'Video']
  $scope.subcategory = ['Clothing', 'Footwear', 'Fashion', 'Huge']
});