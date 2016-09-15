import templateUrl from './app.component.html'

export default {
  templateUrl,
  controllerAs: '$app',
  controller:
    /* @ngInject */
    class AppController {
      constructor ($log, $http) {
        $log.debug('AppController instantiated');
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
