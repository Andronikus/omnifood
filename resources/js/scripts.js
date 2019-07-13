$(document).ready(function () {

    /* Sticky navigation*/
    $('.js--section-features')
        .waypoint(function (direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
            {
                offset: '40px'
            })

    /* Scroll on buttons*/
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    })

    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    })

    /* Scroll on links */
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                });
            }
        }
    });

    /* Animation waypoints */
    $('.js--waypoint-1').waypoint(function(){
        $('.js--waypoint-1').addClass('animated fadeIn');
    },
    {offset: '50%'})
    
    $('.js--waypoint-2').waypoint(function(){
        $('.js--waypoint-2').addClass('animated fadeInUp');
    },
    {offset: '50%'})

    $('.js--waypoint-3').waypoint(function(){
        $('.js--waypoint-3').addClass('animated fadeIn');
    },
    {offset: '50%'})

    $('.js--waypoint-4').waypoint(function(){
        $('.js--waypoint-4').addClass('animated pulse');
    },
    {offset: '50%'})

});