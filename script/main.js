$(document).ready(function(e) {
    $('.hero-item').click(function() {
        if(!$(this).hasClass('active')) {
            $('.hero-item.active').removeClass('active');
            $(this).addClass('active');
        } 
    });
})

