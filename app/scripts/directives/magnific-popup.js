'use strict';

/**
 * @ngdoc directive
 * @name girafalesHomeApp.directive:magnificPopup
 * @description
 * # magnificPopup
 */
angular.module('girafalesHomeApp')
  .directive('magnificPopup', function ($http) {
    return {
      restrict: 'A',
      scope: {
        templateUrl: "@",
        type:'@'
      },
      link: function postLink(scope, element, attrs) {
        var config = {
      		type: scope.type,
      		fixedContentPos: false,
      		fixedBgPos: true,
      		overflowY: 'auto',
      		closeBtnInside: true,
      		preloader: true,
      		midClick: true,
      		removalDelay: 300,
      		mainClass: 'my-mfp-zoom-in',
          callbacks:{
            close: function(e){
              console.log("closed")
            }
          },
          iframe:{
            patterns: {}
          }
      	}

        if(scope.type === "iframe")
          config.iframe.patterns = {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: '//www.youtube.com/embed/%id%?modestbranding=0&rel=0&showinfo=0&autoplay=0&vq=hd720'
            }
          }

        var magnificContainer = $('<div id="magnificContainer" class="zoom-anim-dialog mfp-hide"></div>')

        if(scope.templateUrl)
          $http.get(scope.templateUrl).success(function(data){
            $(magnificContainer).appendTo($("body"))
          });

        $(element).magnificPopup(config)
      }
    };
  });
