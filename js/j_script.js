$(function(){
	$('.fadeSlider').slick({
	  dots: false,
	  arrows: false,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 2500,//照片停留時間
	  //speed: 500,轉照片時間
	  fade: true,
	  cssEase: 'linear'
	});
})