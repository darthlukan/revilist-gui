'use strict';

/**
  * @ngdoc function
  * @name revilistApp.controller:LoginCtrl
  * @description
  * # LoginCtrl
  * Controller of the revilistApp
*/
angular.module('revilistApp')
  .controller('LoginCtrl', function () {
    this.user = {'email': '', 'password': ''};

    this.submit = function(user) {
      if (user.email && this.password) {
        this.user.email = user.email;
        this.user.password = user.password;  // TODO: Don't send a plaintext password here!
        // TODO: Make the request to the server
        return true;
      } else {
        return false;
      }
    };
  });
