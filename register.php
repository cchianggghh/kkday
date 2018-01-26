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
    <h1>註冊帳號請輸入自選帳號密碼及相關資料</h1>
  </div>

  <div class="content">

	 <div class="left"> 
   </div>

	 <div class="mid"> 
		<form action="addmember.php" method="post">
			<div class="form-control">
				帳&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;號 : <input type="text" name="username">
			</div><br>

			<div class="form-control">
				密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;碼 : <input type="text" name="pw">
			</div><br>

			<div class="form-control">			
				電子信箱 : <input type="text" name="mail" >			
			</div><br>
			
			<div class="form-control">
				電&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;話 : <input type="text" name="phone">
			</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" value="註冊">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="cancel" value="取消" onclick="location.href='index0.php'" > 
			</div>

			
		</form>
	</div>

  <div class="right"> </div> 
    </div>
	
</body>
</html>