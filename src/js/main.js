$(function() {
    $('.linea-de-tiempo').fullpage({
        resize: false,
        anchors:['slide1', 'slide2', 'slide3', 'slide4'],
        navigation: true
    });
    $.localScroll({
    	duration: 300
    });
});