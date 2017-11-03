$(document).ready(function() {

	$('.p-photo__item').hover(function() {
		$(this).children().children('.p-photo__patern').stop(false, true).fadeIn();
	}, function() {
		$(this).children().children('.p-photo__patern').stop(false, true).fadeOut();
	});

	if ($(window).width() > 768) {
		/*header-subnav*/
		$('.h-nav__item').hover(function() {
			$(this).addClass('h-nav__item-active');
			$(this).children('.h-subnav').stop(false, true).fadeIn();
			}, function() {
				$(this).removeClass('h-nav__item-active');
				$(this).children('.h-subnav').stop(false, true).fadeOut();
		});
	}
	if ($(window).width() < 768) {
		/*header-nav*/
		$('.h-nav__mob').on('click', function() {
			$(this).parent().children('.h-nav').slideToggle();
			return false;
		});

		/*header-subnav*/
		$('.h-nav__item').on('click', function() {
			$(this).toggleClass('h-nav__item-active');
			$(this).children('.h-subnav').stop(false, true).slideToggle();
			return false;
		});
	}

	$('.h-profil-nologin').fancybox();
	$('.p-photo__link').fancybox();
});