
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
//window.onload = function(){
	/*$_y=document.getElementsByClassName("j_price");
  	console.log($_y);
	    for(var j = 0; j < $_y.length; j++){
	    	var $_ArrK = new Array();	
	    	$_ArrK = $_y[j].innerText;
	console.log($_ArrK);		    		    	 
			Object.freeze($_ArrK);
		};*/
//};

$(function(){	
	
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
	let rate1 = rate*1.2;

  	x=document.getElementsByClassName("j_currency");
  	console.log(x);
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='AUD';    // Change the content	    
	};	

	/*$_y=document.getElementsByClassName("j_price");
  	console.log($_y);
	    for(var j = 0; j < $_y.length; j++){
	    	Object.freeze($_ArrK);
	    	var $_ArrK = new Array();	
	    	$_ArrK = $_y[j].innerText;
	console.log($_ArrK);		    		    	 
			
	y=document.getElementsByClassName("j_price");
	console.log($_ArrK);
  	console.log(y);
	    for(var j = 0; j < y.length; j++){
	    	var ArrK = new Array();	
	    	ArrK = y[j].innerText;
	console.log(ArrK);		    		    	 
			Object.freeze(ArrK);
		var ip = new Array();

	console.log(ArrK);	
		 		var ip = new Array();
		    	ip = ArrK;
		 		console.log(ip);			 
		    ip *= rate1;
		    console.log(ip);
		   	ip = Math.floor(ip*10)/10; 
		   	console.log(ip);
		    
		    y[j].innerText = ip;
		    
		    //console.log(y);
		    console.log(ArrK);
		};	
		}; */
		$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };

	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');

	h=document.getElementById("showRight1"); 
	h.innerText='AUD' ;
	console.log(h);
	});

	    
		    	


	$("#CNY").click(function() {
  	//alert( "人民幣 for .click() called." );
  	
  	let rate = 0.2154;
	let rate1 = rate*1.2;
  	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='CNY';    // Change the content

		    };
	/*y=document.getElementsByClassName("j_price");
  	console.log(y);
	    for(var j = 0; j < y.length; j++){
	    	var ArrK = new Array();	
	    	ArrK = y[j].innerText;
	console.log(ArrK);		    		    	 
			Object.freeze(ArrK);
		var ip = new Array();

	console.log(ArrK);	
		 		var ip = new Array();
		    	ip = ArrK;
		 		console.log(ip);			 
		    ip *= rate1;
		    console.log(ip);
		   	ip = Math.floor(ip*10)/10; 
		   	console.log(ip);
		    
		    y[j].innerText = ip;
		    
		    //console.log(y);
		    console.log(ArrK);
		};*/
		$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');

	h=document.getElementById("showRight1"); 
	h.innerText='CNY' ;
	console.log(h);
	});


	$("#EUR").click(function() {
  	//alert( "歐元 for .click() called." );
	let rate = 0.0274;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='EUR';    // Change the content
		    };
	/*y=document.getElementsByClassName("j_price");  // Find the elements
  	console.log(y);
		    for(var j = 0; j < y.length; j++){	
		    	y[j].innerText *= rate1;    // Change the content
		    	y[j].innerText = Math.floor(y[j].innerText*10)/10;
		    };*/
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='EUR' ;
	console.log(h);
	});


	$("#GBP").click(function() {
  	//alert( "英鎊 for .click() called." );
	let rate = 0.0239;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='GBP';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='GBP' ;
	console.log(h);
	});


	$("#HKD").click(function() {
  	//alert( "港幣 for .click() called." );
	let rate = 0.2640;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='HKD';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='HKD' ;
	console.log(h);
	});


	$("#IDR").click(function() {
  	//alert( "印尼盾 for .click() called." );
	let rate = 387.5968;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='IDR';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='IDR' ;
	console.log(h);
	});


	$("#JPY").click(function() {
  	//alert( "日元 for .click() called." );
	let rate = 3.7258;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='JPY';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='JPY' ;
	console.log(h);
	});


	$("#KRW").click(function() {
  	//alert( "韓圓 for .click() called." );
	let rate = 33.9213;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='KRW';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='KRW' ;
	console.log(h);
	});


	$("#MYR").click(function() {
  	//alert( "馬幣 for .click() called." );
	let rate = 0.1250;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='MYR';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='MYR' ;
	console.log(h);
	});


	$("#PHP").click(function() {
  	//alert( "菲幣 for .click() called." );
	let rate = 1.5805;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='PHP';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='PHP' ;
	console.log(h);
	});


	$("#SGD").click(function() {
  	//alert( "新幣 for .click() called." );
	let rate = 0.0444;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='SGD';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='SGD' ;
	console.log(h);
	});


	$("#THB").click(function() {
  	//alert( "泰幣 for .click() called." );
	let rate = 1.0400;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='THB';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='THB' ;
	console.log(h);
	});


	$("#TWD").click(function() {
  	//alert( "台幣 for .click() called." );
	let rate = 1.0;
	
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='TWD';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='TWD' ;
	console.log(h);
	});


	$("#USD").click(function() {
  	//alert( "美元 for .click() called." );
	let rate = 0.0339;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='USD';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='USD' ;
	console.log(h);
	});


	$("#VND").click(function() {
  	//alert( "越幣 for .click() called." );
	let rate = 709.2198;
	let rate1 = rate*1.2;
	x=document.getElementsByClassName("j_currency");  // Find the elements
		    for(var i = 0; i < x.length; i++){
		    	x[i].innerText='VND';    // Change the content
		    };
	$_y=document.getElementsByClassName("j_price-hd");
  	console.log($_y);
	    	for(var j = 0; j < $_y.length; j++){
	    		$_y_1=$_y[j].innerText;    		    			    	
	    	
	    	y=document.getElementsByClassName("j_price");
  	console.log(y);
	    		for(var j = 0; j < y.length; j++){
	    			y_1 = y[j].innerText;
	    		if(y_1!=$_y_1){
	    			y[j].innerText=$_y[j].innerText;
	    		};
	    			y[j].innerText *= rate1;
		    		y[j].innerText = Math.floor(y[j].innerText*10)/10;
	    	};
	    };
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	h=document.getElementById("showRight1"); 
	h.innerText='VND' ;
	console.log(h);
	});

});

//*********************************************************************//

//*********************************************************************//
		