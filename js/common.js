$(function() {

	//tabs logic
	$('.tab_links a').on('click', function(e){
		e.preventDefault();

		var parent = $(this).closest('.tab_links'),
			targetWrapper = $(parent.data('target')),
			targetItem = $($(this).attr('href'));

		parent.find('.active').removeClass('active');
		$(this).addClass('active');

		targetWrapper.find('.active').removeClass('active');
		targetItem.addClass('active')

	})

	$('.faq_item_q').on('click', function(){
		$(this).toggleClass('open').next().slideToggle()
	})

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



	$('.main_photo').slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
		asNavFor: '.thumb_photos',
		responsive: [
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			  }
			}
		]
	})
	$('.thumb_photos').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.main_photo',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		vertical: true
	});
});
