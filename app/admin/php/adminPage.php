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
		<h1>Hello Admin! </h1>
		<span class="admin-tip">You can activate user's questions on this page</span>
		<a href="#" class="scrollToTop"></a>
		
		<form id="quiz-form" action="changeStatus.php" method="post">
			<input type="submit" class="submit-button" id="save" value="Save changes">
		</form>

		<script src="../js/activateQuestions.js"></script>
	</body>
</html>