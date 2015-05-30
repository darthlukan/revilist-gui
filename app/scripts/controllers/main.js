'use strict';

/**
 * @ngdoc function
 * @name revilistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the revilistApp
 */
angular.module('revilistApp')
  .controller('MainCtrl', function ($scope) {
    this.documents = [
      {
        title: 'A title',
        revision: 1,
        status: '02',
        edit: false
      },
      {
        title: 'Another title',
        revision: 3,
        status: '01',
        edit: false
      },
      {
        title: 'Yet another title',
        revision: 1,
        status: '05',
        edit: false
      }
    ];

    this.awesomeThings = {
      'html': 'HTML5 Boilerplate',
      'angular': 'AngularJS',
      'karma': 'Karma'
    };

    this.selected = 1;

    this.isSelected = function(value) {
      return this.selected === value;
    };

  });
