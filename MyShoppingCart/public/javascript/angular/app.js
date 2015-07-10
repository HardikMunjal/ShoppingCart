var app = angular.module('SelectApp', [ ]);

app.controller('selectController', function($scope, $http) {
  $scope.category = ['Men', 'Women', 'Electronics', 'Video'];
  
  
  $scope.onSelectChangeResult = "";
 
    $scope.onSelectChange = function (id) {
        
        var url = '/getsubcategory/'+id;
        $http({
            url: url, 
            method: "GET"
         }) .success(function(response) {$scope.names = response;});
        
      };
      
});






