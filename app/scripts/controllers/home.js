'use strict';

/**
 * @ngdoc function
 * @name landscapeTemplateApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the landscapeTemplateApp
 */
angular.module('girafalesHomeApp')
  .controller('HomeCtrl', function () {
    var self = this

    self.carouselInterval = false
    self.noWrapSlides = true
    self.slides = {
      students: { active: true },
      teachers: { active: false }
    }
    self.toStudents = function(e){
      e.preventDefault()
      self.slides.students.active = true
      self.slides.teachers.active = false
    }

    self.toTeachers = function(e){
      e.preventDefault()
      self.slides.students.active = false
      self.slides.teachers.active = true
    }
  });
