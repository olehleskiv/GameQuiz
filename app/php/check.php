<?php
	$name = $_POST['name'];
	$pass = $_POST['pass'];

	$admin_name = "admin";
	$admin_pass = "04041992";
	
		if (($name == $admin_name) & ($pass == $admin_pass)) {
			$_SESSION['name']="name"; 
			$_SESSION['pass']="pass"; 
			header("location:admin.php");
		}

	else echo 'Bad login or pass!';

?>