$(document).ready(function() {
	$('.menu-burger_header').click(function(){
        $('.menu-burger_header').toggleClass('open-menu');
        $('.header_nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});