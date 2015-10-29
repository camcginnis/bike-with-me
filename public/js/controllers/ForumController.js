angular.module("bikeWithMe")
    .controller("ForumController", function($scope, comments){
        $scope.formData = {};

        $scope.createComment = function(){
            comments.create($scope.formData)
                    .then(function(response){
                      $scope.formData = {};
                      getComments();
                    });
        };


        var getComments = function(){
          comments.getAll()
                .then(function(response){
                  $scope.comments = response.data;
        });
      };
      getComments();

        $scope.removeComment = function(id){
            comments.delete(id)
                .then(function(response){
                  console.log(response);
                  getComments();
                });
        };

});
