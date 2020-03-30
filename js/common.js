$(function() {

	$('.small_card_img').slick({
		dots: true,
		arrows: false
	})

	$('.pop_slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1509,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	})


	// menu
	$('#toggler').on('click', function(){
		$(this).toggleClass('active').next().toggleClass('active');
	})

	$('.filtr_item_titl').on('click', function(){
		$(this).toggleClass('open').next().slideToggle();
	})
});
