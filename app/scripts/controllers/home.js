'use strict';

/**
 * @ngdoc function
 * @name landscapeTemplateApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the landscapeTemplateApp
 */
angular.module('girafalesHomeApp')
  .controller('HomeCtrl', function ($timeout) {
    var self = this

    self.carouselInterval = false
    self.noWrapSlides = true

    self.slides = {
      students: { active: true },
      teachers: { active: false }
    }

    self.toStudents = function(e){
      e.preventDefault()
      $timeout(function(){
        self.slides.students.active = true
        self.slides.teachers.active = false
      },300)
    }

    self.toTeachers = function(e){
      e.preventDefault()
      $timeout(function(){
        self.slides.students.active = false
        self.slides.teachers.active = true
      },300)
    }

    self.signup_students = { name:null, email:null }
    self.signup_teachers = { name:null, email:null }

    self.submit_signup_students = function(form){
      if(form.$valid){
        var params = ["name="+self.signup_students.name, "email="+self.signup_students.email]
        window.location.href = "https://staging.girafales.com/student/new?" + params.join("&")
      }
    }

    self.submit_signup_teachers = function(form){
      if(form.$valid){
        var params = ["name="+self.signup_teachers.name, "email="+self.signup_teachers.email]
        window.location.href = "https://staging.girafales.com/professor/new?" + params.join("&")
      }
    }
  });
