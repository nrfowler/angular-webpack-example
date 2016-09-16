import userApp from './user.component'

export default
  angular
    .module('webpack-app', ['ngRoute'])
    .component('userApp', userApp)
    .name
