angular.module("bikeWithMe")
    .controller("BikeWithMeController", function($scope, comments){
      $scope.comments = [];

      comments.getAll()
              .then(function(response){
                $scope.comments = response.data;
              });




});
