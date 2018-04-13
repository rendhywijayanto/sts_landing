

(function($) {
    'use strict';

    // scrollspy
    $('body').scrollspy({ target: '#navigation' });

    // smooth scrolling
    $(function() {
        $(".navbar-nav a, .scroll-icon a, .appai-preview .button-group a").bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Navigation hide on scroll on mobile screen
    $(window).on('scroll', function() {
        $('.navbar-collapse').collapse('hide')
    });

    // // carousel one
    // $('.slider-wrapper').slick({
    //     arrows: false,
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: false,
    //     cssEase: 'ease',
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // });



})(jQuery);

