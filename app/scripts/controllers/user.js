'use strict';

/**
  * @ngdoc function
  * @name revilistApp.controller:UserCtrl
  * @description
  * # UserCtrl
  * Controller of the revilistApp
*/
angular.module('revilistApp')
  .controller('UserCtrl', function () {
    this.user = {
      username: 'Foo',
      email: 'bar@example.com',
      authed: true,
      company: 'ACME Corp.',
      projects: [1, 2, 3],
      profileImg: '/images/yeoman.png'
    };
  });
