app.controller("ForumController", function($scope, $http){
  $scope.commentData = {};

  $scope.create = function(){
    $scope.comment.Data.completed = false;
    $http.post("/api/forum" , $scope.formData)
          .then(function(response){
            $scope.commentData = {};
          });
  };
});
