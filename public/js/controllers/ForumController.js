angular.module("bikeWithMe")
    .controller("ForumController", function($scope, $http){
        $scope.formData = {};

        $scope.createComment = function(){
          $scope.formData.completed = false;
            var url="/api/comments";
              $http.post("/api/comments", $scope.formData)
              .then(function(response){
                $scope.formData = {};
              });

    };
  });
