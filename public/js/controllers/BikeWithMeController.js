angular.module("bikeWithMe")
    .controller("BikeWithMeController", function($scope, comments){
      $scope.comment = {};

      $scope.getRandom = function(){
        comments.getRandom()
                .then(function(response){
                  console.log(response);
                  $scope.comment = response;
                });
        };
});
