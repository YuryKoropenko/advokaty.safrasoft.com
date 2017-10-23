$(document).ready(function() {
	/*header-nav*/
	$('.h-nav__mob').on('click', function() {
		$(this).parent().children('.h-nav').slideToggle();
		return false;
	});
});