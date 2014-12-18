<?php


if($_POST['change']) {

	$json = file_get_contents('../data/quiz.json'); // getting the json file
	if(!$json) {									//if coudn't get json - show error
		echo "Could not open json file!";
	}
	
	$json = json_decode($json, true);

	for ($i = 0; $i < count($json['js']); $i++) { 
		$json['js'][$i]['active'] = false;
	}

	for ($i = 0; $i < count($json['js']); $i++) { 
		$prefix = 'JavaScript_' . $i;
		if (isset($_POST[$prefix])) {
			$json['js'][$i]['active'] = true;
		}
	}

	//echo json_encode($json);

	$json = json_encode($json);							 //decoding json

	if(file_put_contents('../data/quiz.json', $json)) {  //putting json on the server
		unset($_POST['change']);

		$_SESSION['name'] = "name"; 
		$_SESSION['pass'] = "pass"; 

		echo "<p>Changes saved</p>";
		header ('location: ./');

	}


}
if($_POST['name'] || $_SESSION['name']) {
	$name = $_POST['name'];
	$pass = $_POST['pass'];

	$admin_name = "admin";
	$admin_pass = "04041992";
	
		if ((($name == $admin_name) & ($pass == $admin_pass)) || $_SESSION['name']) {

			$_SESSION['name'] = "name"; 
			$_SESSION['pass'] = "pass"; 

			include 'php/adminPage.php';

			//echo "
			//<html>
			//	<head>
			//		<title>Admin Title</title>
			//		<link rel=\"stylesheet\" href=\"css/admin.css\">
			//		<script src=\"js/libs/jquery.js\"></script>
			//		<script src=\"js/libs/underscore/underscore.js\"></script>
			//	</head>
//
			//	<body>
			//		<h1>Hello Admin! </h1>
			//		<span class=\"admin-tip\">You can activate user's questions on this page</span>
			//		<a href=\"#\" class=\"scrollToTop\"></a>
			//		
			//		<form id=\"quiz-form\" action=".$_SERVER['SCRIPT_NAME']." method=\"post\">
			//			<input name=\"change\" type=\"submit\" class=\"submit-button\" id=\"save\" value=\"Save changes\">
			//		</form>
//
			//		<script src=\"js/activateQuestions.js\"></script>
			//	</body>
			//</html>
			//";
		}

	else echo '<p>Bad login or pass!</p>';
} else echo "

<!DOCTYPE html>
<html lang=\"en\">
<head>
	<meta charset=\"UTF-8\">
	<title>Admin page</title>
	<link rel=\"stylesheet\" type=\"text/css\" href=\"css/admin.css\">
	<script src=\"js/libs/jquery.js\"></script>
</head>

<body>
	<h1>You think you are a king here? Then please log in!</h1>
	<div class=\"crown-image\">
		<img src=\"../img/main/crown.png\">
	</div>
	
	<span href=\"#\" class=\"button\" id=\"toggle-login\">Log in</span>
	<div id=\"login\">
		<div id=\"triangle\"></div>
		<h1>Log in</h1>
		<form class=\"login-form\" action=".$_SERVER['SCRIPT_NAME']." method=\"post\">
			<input type=\"text\" class=\"login_input\" name=\"name\" id=\"name\" placeholder=\"Login\">
			<input type=\"password\" class=\"login_input\" name=\"pass\" id=\"pass\" placeholder=\"Password\">
			<input name=\"submit\" type=\"submit\" id=\"ok\" value=\"Log In\">
		</form>
	</div>

	<script src=\"js/admin_login.js\"></script>
</body>
</html>";

?>