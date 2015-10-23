angular.module("bikeWithMe")
    .controller("BikeWithMeController", function($scope, $http){
    $scope.create = [];

    var getComment = function(){
      $http.get("/api/forum")
        .then(function(response){
          $scope.comments = response.data;
        });
        };


    // getComments();
//
    // $scope.deleteComment = function(id){
    //     var url = "/api/forum"+id;
    //
    //     $http.delete(url)
    //       .then(function(response){
    //         getComments();
    //       });
    // };
});
