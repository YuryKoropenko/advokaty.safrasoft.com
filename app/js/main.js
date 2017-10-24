$(document).ready(function() {

	if ($(window).width() > 991) {
		/*header-subnav*/
		$('.h-nav__item').hover(function() {
			$(this).children('.h-subnav').stop(false, true).fadeIn();
			}, function() {
				$(this).children('.h-subnav').stop(false, true).fadeOut();
		});
	}
	if ($(window).width() < 991) {
		/*header-nav*/
		$('.h-nav__mob').on('click', function() {
			$(this).parent().children('.h-nav').slideToggle();
			return false;
		});

		/*header-subnav*/
		$('.h-nav__item').on('click', function() {
			$(this).children('.h-subnav').stop(false, true).slideToggle();
			return false;
		});
	}

	$('.p-photo__link').fancybox();
});