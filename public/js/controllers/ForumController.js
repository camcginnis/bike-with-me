angular.module("bikeWithMe")
    .controller("ForumController", function($scope){
    $scope.formData = {};

    $scope.createComment = function(){
      $scope.formData.completed = false;
      $http.post("/api/forum", $scope.formData)
      .then(function(response){
        $scope.formData = {};
      });
    };
  });
