angular.module("bikeWithMe")
    .controller("BikeWithMeController", function($scope, comments){
      $scope.comment = {};

        comments.getRandom()
                .then(function(response){
                  console.log(response);
                  $scope.comment = response;
                });
});
