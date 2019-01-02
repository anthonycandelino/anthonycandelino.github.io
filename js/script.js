$(document).ready(function() {

    $('#slides').superslides({
        animation: 'slide',
        play: 4000,
        pagination: false,
    });

    var typedSubTitles = new Typed(".typedSubTitles", {
        strings: ["Computer Science Student", "University of Guelph",],
        typeSpeed: 85,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    });
    
});