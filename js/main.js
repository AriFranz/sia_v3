jQuery(document).ready(function ($) {

    var headerWidth =$('header').width();
    $('nav').css('width' , headerWidth);

    $( window ).resize(function() { 
        headerWidth = $('header').width();
        $('nav').css('width' , headerWidth);
    });

    $(window).scroll(function (e) {
	     if ($(this).scrollTop() > 67) {
            $('.logo').addClass('logo-fixed');
            $('.menu').addClass('menu-fixed');
         } else {
            $('.logo').removeClass('logo-fixed');
            $('.menu').removeClass('menu-fixed');
         }
    });
    

    var $frame = $('iframe#sia-video');

    // saves the current iframe source
    var vidsrc = $frame.attr('src');  

    $('div#play-video').click(function () {

        $('div#video-pop-out').removeClass('hide');
        $('div#video-pop-out').addClass('show');
        $('div.show').animate({
            opacity: 1
        }, 400);
    });

    $('div#video-pop-out').click(function () {

        $('div.show').animate({
            opacity: 0
        }, 100);
        $('div#video-pop-out').removeClass('show');
        $('div#video-pop-out').addClass('hide');
        // sets the source to nothing, stopping the video
        $frame.attr('src','');  
        $frame.attr('src', vidsrc);
    
    });

    $(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $('div.show').animate({
            opacity: 0
        }, 100);
        $('div#video-pop-out').removeClass('show');
        $('div#video-pop-out').addClass('hide');
        // sets the source to nothing, stopping the video
        $frame.attr('src','');  
        $frame.attr('src', vidsrc);
    }
});

});