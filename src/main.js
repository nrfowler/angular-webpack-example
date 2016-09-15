import './user/user.module'

/* @ngInject */
angular.
  module('webpack-app').
  config(['$routeProvider',
    function config($routeProvider) {
        console.log("hello console")
      $routeProvider.
      	when('/home', {

          templateUrl: './user/userTemplate.html',
          controller: 'HomeController',
          controllerAs: 'homeController'

        }).
      	when('/user', {

          templateUrl: 'http://localhost:8080/#/' + 'user/userTemplate.html',
          controller: 'UserController',
          controllerAs: 'userController',
          resolve: {
              allUsers: function(UserService){
	                  return UserService.getAllUsers();
	          }
          }

        }).
        when('/#user/:id', {

        	templateUrl: './user/userTemplate.html',
        	controller: 'UserDetailController',
        	controllerAs: 'userDetailController'
        }).
        otherwise('/home');
    }
  ]);
