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
    self.slides = [
      {templateUrl:"app/templates/service-1.html"},
      {templateUrl:"app/templates/service-2.html"},
      {templateUrl:"app/templates/service-3.html"},
      {templateUrl:"app/templates/service-4.html"},
      {templateUrl:"app/templates/service-5.html"}
    ]

    this.toSlide = function(index,$event){
      $event.preventDefault()
      angular.forEach(this.slides, function(slide){   slide.active = false  })
      this.slides[index].active = true
    }
  });
