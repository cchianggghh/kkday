$(function(){
	var w = $("#mwt_slider_content0").width();
	$('#mwt_slider_content0').css('height', ($(window).height() - 2) + 'px' ); //將區塊自動撐滿畫面高度

	//$("#mwt_fb_tab").mouseover(function(){ //滑鼠滑入時
	$("#showRight0").click(function(){ //滑鼠點下時
	if ($("#mwt_mwt_slider_scroll0").css('right') == '-'+w+'px')
	{
	$("#mwt_mwt_slider_scroll0").animate({ right:'0px' }, 600 ,'swing');
	}		
	});
		
	//$("#mwt_slider_content").mouseleave(function(){　//滑鼠離開後
	$("#cross1").click(function(){　//滑鼠再點一下後
	$("#mwt_mwt_slider_scroll0").animate({ right:'-'+w+'px' }, 600 ,'swing');
	});						
});
//*********************************************************************//
$(function(){
	var cross2 = document.getElementById("cross2");
    let aud = document.getElementById("AUD").value;
    let cny = document.getElementById("CNY");
    let eur = document.getElementById("EUR");
    let gbp = document.getElementById("GBP");
    let hkd = document.getElementById("HKD");
    let idr = document.getElementById("IDR");
    let jpy = document.getElementById("JPY");
    let krw = document.getElementById("KRW");
    let myr = document.getElementById("MYR");
    let php = document.getElementById("PHP");
    let sgd = document.getElementById("SGD");
    let thb = document.getElementById("THB");
    let twd = document.getElementById("TWD");
    let usd = document.getElementById("USD");
    let vnd = document.getElementById("VND");
	
	var w = $("#mwt_slider_content1").width();
	$('#mwt_slider_content1').css('height', ($(window).height() - 20) + 'px' ); //將區塊自動撐滿畫面高度

	$("#showRight1").click(function(){ //滑鼠點下時
	if ($("#mwt_mwt_slider_scroll1").css('right') == '-'+w+'px')
	{
	$("#mwt_mwt_slider_scroll1").animate({ right:'0px' }, 600 ,'swing');
	}
	});
	$("#cross2").click(function(){　//滑鼠再點一下後
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	});
    $("#AUD").click(function() {
  	//alert( " 澳幣 for .click() called." );
  	let rate = 0.0420;
  	
  	//j_currency = document.getElementById("j_currency");
  	//j_currency = "aud";
  	//document.write('j_currency');
  	//console.log(j_currency);
	});


	$("#CNY").click(function() {
  	alert( "人民幣 for .click() called." );
  	let rate = 0.2154;
	});
	$("#EUR").click(function() {
  	alert( "歐元 for .click() called." );
	let rate = 0.0274
	});
	$("#GBP").click(function() {
  	alert( "英鎊 for .click() called." );
	let rate = 0.0239
	});
	$("#HKD").click(function() {
  	alert( "港幣 for .click() called." );
	let rate = 0.2640
	});
	$("#IDR").click(function() {
  	alert( "印尼盾 for .click() called." );
	let rate = 387.5968
	});
	$("#JPY").click(function() {
  	alert( "日元 for .click() called." );
	let rate = 3.7258
	});
	$("#KRW").click(function() {
  	alert( "韓圓 for .click() called." );
	let rate = 33.9213
	});
	$("#MYR").click(function() {
  	alert( "馬幣 for .click() called." );
	let rate = 0.1250
	});
	$("#PHP").click(function() {
  	alert( "菲幣 for .click() called." );
	let rate = 1.5805
	});
	$("#SGD").click(function() {
  	alert( "新幣 for .click() called." );
	let rate = 0.0444
	});
	$("#THB").click(function() {
  	alert( "泰幣 for .click() called." );
	let rate = 1.0400
	});
	$("#TWD").click(function() {
  	alert( "台幣 for .click() called." );
	let rate = 1.0
	});
	$("#USD").click(function() {
  	alert( "美元 for .click() called." );
	let rate = 0.0339
	});
	$("#VND").click(function() {
  	alert( "越幣 for .click() called." );
	let rate = 709.2198
	});

});

//*********************************************************************//

//*********************************************************************//
		