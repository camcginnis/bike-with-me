angular.module("bikeWithMe").factory('comments', function($http) {
      var service = {};
      var baseUrl = "/api/comments";

      service.create = function(data){
        return $http.post(baseUrl, data);
      };

      //This is to obtain a specific comment utilizing a unique id
      //@params id --> The id of the comment
      //@return a single comment object
      service.getOne = function(id){
        var url = baseUrl+"/"+id;
        return $http.get(url);
      };

      //This is to obtain all of the comments from /api/comments
      //@params none
      //@return --> Collection of comments
      service.getAll = function(){
        return $http.get(baseUrl);
      };

      //This is to obtain a random comment
      //@params --> none
      //@return a random comment
      service.getRandom = function(){
        return $http.get(baseUrl)
              .then(function(response){
                var length = response.data.length;
                var rand = Math.round(Math.random() * length);
                return response.data[rand];
              });

      };

      //This is to delete a specific comment based on an id
      //@params --> id
      //@return
      service.delete = function(id){};


      return service;

  });
