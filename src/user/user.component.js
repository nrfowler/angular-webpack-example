import templateUrl from './user.component.html'

export default {
  templateUrl,
  controllerAs: '$user',
  controller:
    /* @ngInject */
    class UserController {
      constructor ($log, $http) {
        $log.debug('UserController instantiated');
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
