$(document).ready(function(){
    
    $('.activ-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
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



    $('.project-activ').owlCarousel({
        loop:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1200:{
                items:4
            }
        }
    })



    $('.activ-popup').magnificPopup({
        type: 'image'
        // other options
      });



      $('.activ-carosel').owlCarousel({
        loop:true,
        nav:true,
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


    $('.activ-testimonial').owlCarousel({
        loop:true,
        nav:true,
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

// meamenu

    jQuery('#mobile-menu').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: '.mobile-menu'
      });
    
    

    $('.activ-brand').owlCarousel({
        loop:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })




})