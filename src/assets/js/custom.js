
(function ($) {

  $.fn.menumaker = function (options) {

    var cssmenu = $(this), settings = $.extend({
      title: "",
      format: "dropdown",
      sticky: false
    }, options);

    return this.each(function () {
      cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
      $(this).find("#menu-button").on('click', function () {
        $(this).toggleClass('menu-opened');
        var mainmenu = $(this).next('ul');
        if (mainmenu.hasClass('open')) {
          mainmenu.hide().removeClass('open');
        }
        else {
          mainmenu.show().addClass('open');
          if (settings.format === "dropdown") {
            mainmenu.find('ul').show();
          }
        }
      });

      cssmenu.find('li ul').parent().addClass('has-sub');

      multiTg = function () {
        cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
        cssmenu.find('.submenu-button').on('click', function () {
          $(this).toggleClass('submenu-opened');
          if ($(this).siblings('ul').hasClass('open')) {
            $(this).siblings('ul').removeClass('open').hide();
          }
          else {
            $(this).siblings('ul').addClass('open').show();
          }
        });
      };

      if (settings.format === 'multitoggle') multiTg();
      else cssmenu.addClass('dropdown');

      if (settings.sticky === true) cssmenu.css('position', 'fixed');

      resizeFix = function () {
        if ($(window).width() > 944) {
          cssmenu.find('ul').show();
        }

        if ($(window).width() <= 944) {
          cssmenu.find('ul').hide().removeClass('open');
        }
      };
      resizeFix();
      return $(window).on('resize', resizeFix);

    });
  };
})(jQuery);

(function ($) {
  $(document).ready(function () {

    $(document).ready(function () {
      $("#cssmenu").menumaker({
        title: "",
        format: "multitoggle"
      });

      $("#cssmenu").prepend("<div id='menu-line'></div>");

      var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;

      $("#cssmenu > ul > li").each(function () {
        if ($(this).hasClass('active')) {
          activeElement = $(this);
          foundActive = true;
        }
      });

      if (foundActive === false) {
        activeElement = $("#cssmenu > ul > li").first();
      }

      defaultWidth = lineWidth = activeElement.width();

      defaultPosition = linePosition = activeElement.position().left;

      menuLine.css("width", lineWidth);
      menuLine.css("left", linePosition);

      $("#cssmenu > ul > li").hover(function () {
        activeElement = $(this);
        lineWidth = activeElement.width();
        linePosition = activeElement.position().left;
        menuLine.css("width", lineWidth);
        menuLine.css("left", linePosition);
      },
        function () {
          menuLine.css("left", defaultPosition);
          menuLine.css("width", defaultWidth);
        });

    });


  });
})(jQuery);


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        // window.location.hash = target;
	    });
	});
});

// Banner Slider
$(document).ready(function(){
  $('#baner_caro').owlCarousel({
    loop:true,      
    autoplay:true, 
    autoplayTimeout:3000,     
    nav:false,
    dots:true,
    animateOut: 'fadeOut',
    responsive:{  
      0:{
        items:1
      },
      600:{
        items:1,
      },
      1000:{
        items:1,
      }
    }
  })
});

// Media & News Carousel
$(document).ready(function(){
  $('#media_caro').owlCarousel({
    loop:true,      
    autoplay:false, 
    autoplayTimeout:3000,     
    nav:true,
    dots:false,
    responsive:{  
      0:{
        items:1
      },
      600:{
        items:2,
      },
      1000:{
        items:3,
      }
    }
  })
});

// video popup
$('#facebook_1').magnificPopup({
	items: {
		src: 'assets/img/2640843012805309.mp4'},
	type: 'iframe'
});

// partner slid
$('#gallery').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  pauseOnHover: false,
  navigator:false,
  arrows: false,
  nav:false,
  cssEase: 'linear'
});

// Testimonial Carousel
$(document).ready(function(){
  $('#tstimo_caro').owlCarousel({
    loop:true,      
    autoplay:false, 
    autoplayTimeout:3000,     
    nav:true,
    dots:false,
    responsive:{  
      0:{
        items:1
      },
      600:{
        items:1,
      },
      1000:{
        items:1,
      }
    }
  })
});
// gallery Carousel
$(document).ready(function(){
  $('#galary_caro').owlCarousel({
    loop:true,      
    autoplay:false, 
    autoplayTimeout:3000,     
    nav:true,
    dots:false,
    responsive:{  
      0:{
        items:1
      },
      600:{
        items:2,
      },
      1000:{
        items:5,
      }
    }
  })
});

// Accreditation Carousel
$(document).ready(function(){
  $('#accreditation_caro').owlCarousel({
    loop:true,      
    autoplay:false, 
    autoplayTimeout:3000,     
    nav:false,
    dots:false,
    margin:50,
    responsive:{  
      0:{
        items:1
      },
      600:{
        items:2,
      },
      1000:{
        items:5,
      }
    }
  })
});