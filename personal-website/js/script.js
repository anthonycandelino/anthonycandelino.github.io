$(document).ready(function() {

    $('#slides').superslides({
        animation: 'slide',
        play: 4000,
        pagination: false,
    });

    // var typedTitle = new Typed(".typedTitle", {
    //     strings: ["ANTHONY CANDELINO"],
    //     typeSpeed: 80,
    //     startDelay: 200,
    //     showCursor: false,
    // });

    var typedSubTitles = new Typed(".typedSubTitles", {
        strings: ["Computer Science Student", "University of Guelph", "Co-op Computer Science Student"],
        typeSpeed: 80,
        // loop: true,
        startDelay: 1000,
        showCursor: false,
    });

    $('.owl-languages').owlCarousel({
        loop: true,
        items: 6,
        responsive:{
            0:{
                items: 1
            },
            480:{
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            },
            1080:{
                items: 5,
            },
            1440: {
                items: 6,
                loop: false,
            },
        }
    });

    $('.owl-tools').owlCarousel({
        loop: true,
        items: 5,
        responsive:{
            0:{
                items: 1
            },
            480:{
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            },
            1080:{
                items: 5,
                loop: false,
            },
        }
    });

    $('.owl-two').owlCarousel({
        loop: false,
        items: 1,
        // responsive:{
        //     0:{
        //         items: 1
        //     },
        //     480:{
        //         items: 2
        //     },
        //     768: {
        //         items: 3
        //     },
        //     938: {
        //         loop:false,
        //         items: 4
        //     },
        // }
    });

});