$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 97) {
            $("header").addClass('shrink');
        } else {
            $("header").removeClass("shrink");
        }
    });
});