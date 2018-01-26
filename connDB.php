<?php
	header("Content-Type:text/html;charset=utf8");//防止資料庫輸出亂碼
	$db_host = "localhost";	
	$db_user = "admin";
	$db_pw = "admin";
	$db_name = "banana";

	$conn = @mysqli_connect($db_host,$db_user,$db_pw,$db_name)or die("資料庫連結錯誤");
	//@可以將原生錯誤碼抑制, die("資料庫連結錯誤")提供User在連結錯誤時的說明

	mysqli_query($conn,"SET NAMES utf8")//query后的()裡是sql語法, 轉出時資料為utf8格式

?>