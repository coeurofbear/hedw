$(function() {
    $('.linea-de-tiempo').fullpage({
        resize: false,
        anchors:['inicio', 'el-comienzo', 'diseno-tablas', 'nuevas-tecnologias', 'ascenso-flash-javascript', 'ascenso-part2', 'web2-0', 'web-digital'],
        navigation: true,
        scrollingSpeed: 450
    });
    $('.js-menu').click(function(){
        $(this).toggleClass('activo');
        $('.menu-desplegable').slideToggle();
        $('#fp-nav').toggleClass('hide');
    });
    $('.enlace-epoca').click(function(){
        $('.menu-desplegable').fadeOut('fast');
        $('.js-menu').removeClass('activo');
    });
});