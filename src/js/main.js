$(function() {
    $('.linea-de-tiempo').fullpage({
        resize: false,
        anchors:['slide1', 'slide2', 'slide3', 'slide4'],
        navigation: true
    });
    // $.localScroll({
    //     duration: 300
    // });
    $('.js-menu').click(function(){
        $(this).toggleClass('activo');
        $('.menu-desplegable').slideToggle();
        $('#fp-nav').toggleClass('hide');
    });
});