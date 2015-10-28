angular.module("bikeWithMe")
    .controller("BikeWithMeController", function($scope, comments){
      $scope.comments = [];


      $scope.foster = function(){
        comments.getRandom()
                .then(function(response){
                  console.log(response);
                });
      };
});
