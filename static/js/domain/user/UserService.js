/**
 * 
 */

angular.module('app').service('UserService', function($http){

	var url = 'http://localhost:8080/people/';
	
	this.getAllUsers = function() { return $http.get(url) };

	
});