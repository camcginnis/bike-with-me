angular.module("bikeWithMe")
    .controller("ForumController", function($scope, comments){
        $scope.formData = {};

        $scope.createComment = function(){
            comments.create($scope.formData)
                    .then(function(response){
                      $scope.formData = {};
                    });
        };

        $scope.test = function(){
          comments.getRandom()
                  .then(function(response){
                    console.log(response);
                  });
        };
  });
