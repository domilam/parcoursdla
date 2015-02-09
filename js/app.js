(function($)
{

	$('.carousel').owlCarousel
	({
		items: 3,
		autoPlay: true,
		stopOnHover : true,
		itemscustom: [[0,1],[768,3],[992,4]]
		});

})(jQuery);