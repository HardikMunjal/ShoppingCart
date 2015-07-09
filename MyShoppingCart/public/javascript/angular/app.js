var app = angular.module('SelectApp', [ ]);

app.controller('selectController', function($scope, $http) {
  $scope.category = ['Men', 'Women', 'Electronics', 'Video'];
  $scope.subcategory = ['Clothing', 'Footwear', 'Fashion', 'Huge'];
  
  $scope.onSelectChangeResult = "";
  $scope.onEditChangeResult = "";
  
  $scope.onEditChange = function () {
      $scope.onEditChangeResult = "the value is '" + $scope.editValue + "'";
    };
    
    $scope.onSelectChange = function (id) {
        
        var url = '/getsubcategory/'+id;
        $http({
            url: url, 
            method: "GET"
         }) .success(function(response) {$scope.names = response[0].sc_name;});
        
      };
      
});






