import templateUrl from './users.component.html'

export default {
  templateUrl,
  controllerAs: '$users',
  controller:
    /* @ngInject */
    class UsersController {
      constructor ($log, $http) {
        $log.debug('UsersController instantiated');
        var ctrl=this;
        this.message = '2';
        var url = 'http://localhost:1234/people/';
      	this.getAllUsers = function() { return $http.get(url) };
        this.getAllUsers().success(function(data){
          ctrl.users=data;
          console.log(data);
        });
      }
    }
}
