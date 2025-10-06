(function ($) {
    "use strict";

    /*====  Document Ready Function =====*/
    jQuery(document).ready(function($){
        //Mobile Menu
        $("#main-menu").slicknav({
            allowParentLinks: true,
            prependTo: '#mobile-menu-wrap',
            label: '',
        });

        $(".mobile-menu-trigger").on("click", function(e) {
            $(".mobile-menu-container").addClass("menu-open");
            e.stopPropagation();
        });

        $(".mobile-menu-close").on("click", function(e) {
            $(".mobile-menu-container").removeClass("menu-open");
            e.stopPropagation();
        });

        // Enable inline Background image
        $("[data-background]").each(function () {
            $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
        });

        // Scroll To Top
        $(window).on("scroll",function(){
            var pagescroll = $(window).scrollTop();
            if(pagescroll > 100){
                $(".scroll-to-top").addClass("scroll-to-top-visible");

            }else{
                $(".scroll-to-top").removeClass("scroll-to-top-visible");
            }
        });

        $(".scroll-to-top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

        // Home slider
        function TdHomeSlider() {
            var SliderActive = $('.wrd-home-slider-wrapper');

            SliderActive.slick({
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 1000, // slide speed
                dots: false,
                fade: true,
                draggable: true,
                pauseOnHover: false,
                arrows: true,
                prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
                nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            });


            function doAnimations(elements) {
                var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function () {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                    });
                    $this.addClass($animationType).one(animationEndEvents, function () {
                        $this.removeClass($animationType);
                    });
                });
            }

            SliderActive.on('init', function (e, slick) {
                var $firstAnimatingElements = $('.wrd-single-slide-item:first-child').find('[data-animation]');
                doAnimations($firstAnimatingElements);
            });

            SliderActive.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('.wrd-single-slide-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);
            });

        }
        TdHomeSlider();

        // Partner Image Slider
        $(".wrd-partner-image-slider").slick({
            slidesToShow: 6,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: false,
            infinite: true,
            pauseOnHover: false,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5, //768-991
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3, // 0 -767
                    }
                }
            ]
        });


        // Team Image Slider
        $(".team-slider-wrapper").slick({
            slidesToShow: 5,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: false,
            prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
            nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            infinite: true,
            pauseOnHover: false,
            centerMode: false,
            responsive: [

                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4, //1024
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3, //768-991
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1, // 0 -767
                    }
                }
            ]
        });


        // Testimonial Slider
        $(".wrd-testimonial-slider").slick({
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: false,
            prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
            nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            infinite: true,
            pauseOnHover: false,
            centerMode: true,
            centerPadding: '0px',
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2, //1024
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2, //768-991
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1, // 0 -767
                    }
                }
            ]
        });

        // Testimonial Two Slider
        $(".wrd-testimonial-slider-two-active").slick({
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: true,
            prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
            nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            infinite: true,
            pauseOnHover: false,
            centerMode: true,
            centerPadding: '0px',
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2, //1024
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2, //768-991
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1, // 0 -767
                        arrows: false,
                    }
                }
            ]
        });

        // Testimonial Two Slider (Vertical )
        $(".wrd-vertical-testimonial-slider").slick({
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: true,
            prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
            nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            infinite: true,
            pauseOnHover: false,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1, //1024
                    }
                }
            ]

        });

        //Service Slider
        $(".wrd-service-slider-wrapper").slick({
            slidesToShow: 4,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: true,
            prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
            nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            infinite: true,
            pauseOnHover: false,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3, //1024
                    }
                },

                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2, //768-991
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1, // 0 -767
                        arrows: false,
                    }
                }
            ]
        });


        // Team Image Slider
        $(".wrd-service-details-slider-wrapper").slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: true,
            arrows: true,
            prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
            nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            infinite: true,
            fade: true,
            pauseOnHover: false,
            centerMode: false,
        });


        //Projects Slider
        $(".wrd-project-slider").slick({
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: true,
            prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
            nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            infinite: true,
            pauseOnHover: false,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2, //1024
                    }
                },

                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2, //768-991
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1, // 0 -767
                        arrows: false,
                    }
                }
            ]
        });

        // Project Details Slider
        $(".wrd-project-details-main-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: false,
            infinite: true,
            fade: true,
            pauseOnHover: false,
            centerMode: false,
            asNavFor: '.wrd-project-details-slider-nav'
        });

        $(".wrd-project-details-slider-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: false,
            infinite: true,
            pauseOnHover: false,
            centerMode: true,
            centerPadding: '0px',
            asNavFor: '.wrd-project-details-main-slider',
            focusOnSelect: true,
        });

        // Accordion
        $(".wrd-accordion-wrapper .card-header").on("click", function () {
            if ($(this).hasClass("active")){
                $(this).removeClass("active");
            }else{
                $(".wrd-accordion-wrapper .card-header").removeClass("active");
                $(this).addClass("active");
            }
        });

        //Project Masonry
        $(".wrd-gallery-item-wrapper").masonry({
            itemSelector: ".wrd-gallery-item",
            columnWidth: 1

        });

        // Popup Image
        $('.wrd-popup-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        // Popup Video
        $(".wrd-video-button").magnificPopup({
            type: 'video'
        });

        // Toggle Sidebar
        $(".header-mini-cart").on("click", function () {
            $(".toggle-bg, .toggle-cart-products").addClass("toggle-active");
        });

        $(".toggle-close,.toggle-bg").on("click", function () {
            $(".toggle-bg, .toggle-cart-products").removeClass("toggle-active");
        });

        // Count Number
        $(".wrd-counter-with-image .wrd-count-number").counterUp({
            delay: 10,
            time: 2000,
        });

        // Skill Bar
        $(".wrd-skillbar").each(function() {
            $(this).appear(function() {
                $(this).find(".wrd-count-bar").animate({
                    width:$(this).attr("data-percent")
                },3000);
            });
        });

        // Post Print
        $(document).on('click', '.print-button', function(e){
            console.log();
            e.preventDefault();
            window.print();
            return false;
        });

        // Wow Init
        new WOW().init();

    });

    /*====  Window Load Function =====*/
    jQuery(window).on('load', function() {
        //Preloader
        $('.preloader-wrapper').delay(1000).fadeOut('slow');
        setTimeout(function() {
            $('.site').addClass('loaded');
        }, 500);
    });

}(jQuery));
