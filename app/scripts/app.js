angular.module('girafalesHomeApp',['ngAnimate','ui.bootstrap']).run(function($rootScope){
  var small_device = 750
  //Force Resize
  if(window.screen.width > small_device){
    var intro_header_height = $(window).height() + 15
    console.log(intro_header_height)
    $('.intro-header').height(intro_header_height)
  }

  $(window).resize(function(){
    //Force Resize
    if(window.screen.width > small_device){
      var intro_header_height = $(window).height() + 15
      console.log(intro_header_height)
      $('.intro-header').height(intro_header_height)
    }
  })

  var scrollY = 0
  $(window).scroll(function(e){
    e.preventDefault()
    if(scrollY < e.currentTarget.scrollY){
      $rootScope.$topNav = false
      scrollY = e.currentTarget.scrollY
    }
    else if(scrollY > (e.currentTarget.scrollY + 75) ){
      $rootScope.$topNav = true
      scrollY = e.currentTarget.scrollY
    }
    $rootScope.$apply()
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 75
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '#top'
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  $('div.modal').on('show.bs.modal', function() {
    var modal = this;
    var hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function() {
      if (!location.hash){
        $(modal).modal('hide');
      }
    }
  });

  // console.log($("#services").offset().top)

  $("#top").affix({
    offset:{
      top: $("#services").offset().top
    }
  })

  // stops video on closing modal
  $("#presentation-modal").on('hidden.bs.modal', function (e) {
    $("#presentation-modal iframe").attr("src", $("#presentation-modal iframe").attr("src"));
  });
})
