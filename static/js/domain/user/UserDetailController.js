angular.module('app').controller('UserDetailController', ['UserDetailService', '$routeParams', function(UserDetailService, $routeParams)
{
	
	var ctrl = this;
	
	UserDetailService.getUserDetails($routeParams.id).then(function(result){
		ctrl.user = result.data;
	}, function(error){ctrl.user="error not found";});
	
	ctrl.availableRoles = ['admin', 'user', 'guest'];
	
	
	
}]);