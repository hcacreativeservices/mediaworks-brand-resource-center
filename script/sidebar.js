$(document).ready(function(e) {
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

