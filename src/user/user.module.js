import webApp from './user.component'

export default
  angular
    .module('webpack-app', ['ngRoute'])
    .component('webApp', webApp)
    .name
