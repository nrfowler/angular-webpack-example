import templateUrl from './userDetailTemplate.html'

export default {
  templateUrl,
  controllerAs: '$user',
  controller:
    /* @ngInject */
    class UserController {
      constructor ($log, $http, $routeParams) {
        $log.debug('UserController instantiated');
        var ctrl=this;
        console.log('user.component is running')
        var url = 'http://localhost:1234/people/'+$routeParams.id;
      	this.getUser = function() { return $http.get(url) };
        this.getUser().success(function(data){
          ctrl.user=data;
          console.log(data);
        });
      }


    }
}
