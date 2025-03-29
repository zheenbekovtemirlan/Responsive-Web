/*! Modified for full functionality */
(function ($) {
    "use strict";

    // Smooth scrolling for all navigation links
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').stop().animate({
            scrollTop: (target.offset().top - 72)
        }, 1000, 'easeInOutExpo');
    });

    // Close responsive menu when clicking items
    $('.js-scroll-trigger').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar when page scroll
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    // Initialize immediately and on scroll
    navbarCollapse();
    $(window).on('scroll', navbarCollapse);

    // Initialize all Bootstrap components
    $(function () {
        // Initialize tooltips
        $('[data-toggle="tooltip"]').tooltip();

        // Initialize popovers
        $('[data-toggle="popover"]').popover();

        // Initialize modals
        $('.modal').modal();
    });

})(jQuery);