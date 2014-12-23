<?php
	$name = $_POST['name'];
	$pass = $_POST['pass'];

	$admin_name = "admin";
	$admin_pass = "04041992";
	
		if (($name == $admin_name) & ($pass == $admin_pass)) {
			$_SESSION['name'] = "name"; 
			$_SESSION['pass'] = "pass"; 
			header("location:adminPage.php");
		}

	else echo '
	<link rel="stylesheet" type="text/css" href="../css/admin.css">
		<h1>Bad login or password!</h1>
		<div class="crown-image">
			<img src="../../img/main/error-mesage.png">
		</div>
		<a href="../admin.html" class="button">Try again</a>
	';

?>