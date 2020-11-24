$(document).ready(function(e) {
    // Make Sidebar Nav sticky when top of window reaches it 

    var sidebarPosition = $('.sidebar-left').position();
    if($(window).width() >= 768){
    $( window ).scroll(function() {
        if ($(window).scrollTop() > sidebarPosition.top) {
            $('.accordion').addClass("fixed");
          } else {
            $('.accordion').removeClass("fixed");
          }
    });
    }

    // FAQs sidebar active class
    $(".faqs .sidebar-left a").click( function(e) {
        if(!$(this).hasClass('active-primary')) {
            $(".faqs .sidebar-left a").removeClass("active-primary");
            $(this).addClass("active-primary");
        }
    });
});

