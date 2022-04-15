$(document).ready(function(){


    jQuery('#mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu2',
    });


    // slide-active
    $('.slide-active').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    // project-active
    $('.project-active').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    })


        // blog-active
        $('.blog-active').owlCarousel({
            loop:true,
            nav:true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })


                // blog-active
                $('.brand-active').owlCarousel({
                    loop:true,
                    nav:true,
                    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        800:{
                            items:2
                        },
                        992:{
                            items:4
                        },
                        1200:{
                            items:6
                        },
                        
                    }
                })
        


    // video-popup
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });





});







