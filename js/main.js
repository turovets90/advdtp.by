$(document).ready(function(){

        $('.hamburger').click(function () {
            $('.main_menu').toggleClass('open');
            $('html').toggleClass('page-noscroll');

            $('.main_menu .mm_close').click(function () {
                $('.main_menu').removeClass('open');
                $('html').removeClass('page-noscroll');
            });
            return false;
        });
        $(document).on('click', function(e) {
            if (!$(e.target).closest(".main_menu.open").length) {
                $(".main_menu.open").removeClass('open');
                $("html").removeClass('page-noscroll');
            }
            e.stopPropagation();
        });


});


