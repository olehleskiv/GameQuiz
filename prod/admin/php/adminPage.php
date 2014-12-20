<?php
	session_start();
	if (isset( $_SESSION['user'])) {
		header("location:../admin.html");
		die();
	}
	include "../html/adminPage.html";
?>

