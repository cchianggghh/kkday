<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="style.css">
	<!-- 以下3個連結是給日期選擇器用-->
	<link rel="stylesheet" href="jquery/jquery-ui.css" />

 	<script type="text/javascript" src="https://code.jquery.com/jquery.min.js"></script>

	<script src="jquery//jquery-ui.js"></script>

<!--***********************************************************************************************-->

	 <link rel="stylesheet" type="text/css" href="jquery/jquery.timepicker.css">
  	<script type="text/javascript" src="jquery/jquery.timepicker.js"></script>
</head>
<body>
  <div class="head" >
    <h1>已有帳號者,請輸入帳號密碼登入</h1>
  </div>

  <div class="content">

	 <div class="left"> 
   </div>

	 <div class="mid"> 
		<form action="verify.php" method="post">
			<div class="form-control">
				帳&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;號 : <input type="text" name="username">
			</div><br>
			<div class="form-control">
				密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;碼 : <input type="text" name="pw">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" value="登入">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="cancel" value="取消"  onclick="location.href='index0.php'"  > 
			</div><br>			
		</form>
	</div>

  <div class="right"> </div> 
    </div>
	
</body>
</html>