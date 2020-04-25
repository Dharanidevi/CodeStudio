$(function() {
    $('.custom-toggler').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });

     ///animation
    
    AOS.init({
        easing: 'ease',
        duration: 1000,
    });
});