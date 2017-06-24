$(function(){

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    var s = $("#sticker");
    var pos = s.position();
    $(window).on('scroll', function() {
        var windowpos = $(window).scrollTop();
        if (windowpos > pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });

    // Typed words
    $(".typed-words").typed({
        strings: ["Web Development", "Photography", "App Development", "SEO Marketing", "UI / UX Design", "Video Commercial"],
        typeSpeed: 0,
        loop: true
    });

    // Masonry portfolio
    $(window).on('load',function() {
        $('.portfolio-items').isotope({
        });
    });
    $(window).on('load',function() {
        $('.portfolio-masonry').isotope({
            itemSelector: '.portfolio-single',
            layoutMode: 'masonry',
            resizesContainer: false
        });
    });
    $(window).on('load',function() {
        $('.portfolio-nav li').on('click', function(){

            $(".portfolio-nav li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".portfolio-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });

    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoPlay: false,
        slideSpeed:2000,
        pagination:true,
        navigation:false,
        items : 2,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,1],
        itemsMobile : [479,1]
    });

    // Team carousel
    $(".team-carousel").owlCarousel({
        autoPlay: false,
        slideSpeed:2000,
        pagination:true,
        navigation:false,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsMobile : [479,1]
    });
});
