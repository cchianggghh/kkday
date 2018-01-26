$(function(){
	$('.fadeSlider').slick({
		dots: false,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2500,
		fade: true,
		cssEase: 'linear'
	});
	$(".menuSlider").slick({
		dots: false,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 3000,
		slidesToShow: 4,
		slidesToScroll: 1,
		cssEase: "linear", 
		responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
	})
})