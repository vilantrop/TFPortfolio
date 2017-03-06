angular.module('myApp', ['ngRoute'])

.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'templates/mainView.html',
          controller: 'mainViewCtrl'
        })
      .otherwise({
          redirectTo: '/'
      });
})
.controller("mainViewCtrl", ['$scope', '$location', mainViewCtrl]);
