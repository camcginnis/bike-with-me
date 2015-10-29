angular.module("bikeWithMe")
    .controller("ForumController", function($scope, comments){
        $scope.formData = {};

        $scope.createComment = function(){
            comments.create($scope.formData)
                    .then(function(response){
                      $scope.formData = {};
                    });
        };

        comments.getAll()
                .then(function(response){
                  $scope.comments = response.data;
        });

        $scope.removeComment = function(){
            comments.delete($scope.formData)
                .then(function(response){
                  console.log(response);
                });
        };

});
