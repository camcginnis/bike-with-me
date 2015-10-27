angular.module("bikeWithMe")
    .controller("BikeWithMeController", function($scope, $http){
    $scope.comments = {};

    var getComment = function(){
      $http.get("/api/comments")
        .then(function(response){
          $scope.comments = response.data;
        });
        };
        getComment();
});
