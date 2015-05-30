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
    this.documents = [];
    this.projects = [];
    this.populate = function() {
      for (var i = 1; i <= 25; i++) {
        this.documents.push({
          title: 'Title ' + i,
          revision: i,
          status: i < 10 ? '0' + i: i,
          edit: false
        });
        if (i < 7) {
          this.projects.push({
            name: 'Project Name ' + i
          });
        };
      };
    };
    this.populate();
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
