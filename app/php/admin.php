<?php
	session_start();
	if (isset( $_SESSION['user'])) {
		header("location:../admin.html");
		die();
	}

?>

<html>
	<head>
		<title>Admin Title</title>
		<link rel="stylesheet" href="../css/admin.css">
		<script src="../js/libs/jquery.js"></script>
		<script src="../js/libs/underscore/underscore.js"></script>
	</head>

	<body>
		<h1>Hello Admin!</h1>

	<input type="button" id="save" value="Save changes">
		<script src="../js/admin.js"></script>
	</body>
</html>