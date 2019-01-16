$(document).ready(function(e) {
    $('.hero-item').click(function() {
        if(!$(this).hasClass('active')) {
            $('.hero-item.active').removeClass('active');
            $(this).addClass('active');
        } 
    });

    $(".sidebar-left button").click( function(e) {
        if(!$(this).hasClass('open')) {
            $(".sidebar-left button").removeClass("open");
            $(this).addClass("open");
        } else {
            $(".sidebar-left button").removeClass("open");
        }
    });
})

