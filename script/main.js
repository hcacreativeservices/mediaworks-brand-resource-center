$(document).ready(function(e) {
    // Toggle Active Class on Hero Items

    $('.hero-item').click(function() {
        if(!$(this).hasClass('active')) {
            $('.hero-item.active').removeClass('active');
            $(this).addClass('active');
        } 
    });

    // Toggle Open Class on Sidebar Buttons

    $(".sidebar-left button").click( function(e) {
        if(!$(this).hasClass('open')) {
            $(".sidebar-left button").removeClass("open");
            $(this).addClass("open");
        } else {
            $(".sidebar-left button").removeClass("open");
        }
    });
    
    // Make Sidebar Nav sticky when top of window reaches it 

    var sidebarPosition = $('.sidebar-left').position();
    $( window ).scroll(function() {
        if ($(window).scrollTop() > sidebarPosition.top) {
            $('.accordion').addClass("fixed");
          } else {
            $('.accordion').removeClass("fixed");
          }
    });
});

