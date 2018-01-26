$(function(){
    $('.recommand-col').slick({
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      $(".slick-next").click(function(){
        $(".slick-next").addClass("opacity-0")
        $(".slick-prev").removeClass("opacity-0")
      })
      $(".slick-prev").click(function(){
        $(".slick-prev").addClass("opacity-0")
        $(".slick-next").removeClass("opacity-0")
      });
    $(".allCityCon").click(function(){
      console.log('yes');
      $(".allCity ul").slideToggle();
      // $(".allCity ul").toggleClass("openCity");
    });
      
    $('#thedate').datepicker({
      dateFormat: 'yy-mm-dd',
      minDate: 0,
      numberOfMonths: 2,
    });
    $(".aIconCon").hover(function(){
      console.log(thishi);
      $(".allMerchantList li").toggleClass("opa");
    })
      
      
})