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
    
    var sidebarPosition = $('.toolkit .sidebar-left').position();
    $( window ).scroll(function() {
        if ($(window).scrollTop() > sidebarPosition.top) {
            $('.toolkit .accordion').addClass("fixed");
          } else {
            $('.toolkit .accordion').removeClass("fixed");
          }
    });
});

