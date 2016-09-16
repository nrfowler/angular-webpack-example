/* @ngInject */
angular.
  module('webpack-app').
  config(['$routeProvider',
    function config($routeProvider) {
        console.log("hello console")
      $routeProvider.
      	when('/home', {

          template: '<users-app></users-app>'

        }).
      	when('/user', {

          template: '<p>hi</hi>'

        }).
        when('/user/:id', {

        	template: '<user-app></user-app>'
        }).
        otherwise('/home');
    }
  ]);
