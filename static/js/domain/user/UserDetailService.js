angular.module('app').service('UserDetailService', ['$http', function($http) {
	
	var url = 'http://localhost:8080/people/';
	
	this.getUserDetails = function(id) { return $http.get(url + id) };
	
}])