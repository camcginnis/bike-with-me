angular.module("bikeWithMe", ['ngRoute']);

angular.module("bikeWithMe")
    .config(function($routeProvider){
          $routeProvider
          .when("/home",{
            templateUrl: "html/home.html"
          })
          .when("/forum", {
            templateUrl: "html/forum.html",
            controller: "ForumController"
          })
          .when("/bikewithme",{
            templateUrl: "html/bikewithme.html",
            controller: "BikeWithMeController"
          })
          .otherwise({
            redirectTo: "/home"
        });
    });