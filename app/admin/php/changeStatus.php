<?php

$json = file_get_contents('../../data/quiz.json'); // getting the json file
	if(!$json) {									//if coudn't get json - show error
		echo "Could not open json file!";
	}
	
	$json = json_decode($json, true);

	$prefixes = array(
		0 => 'JavaScript_',
		1 => 'OOP_',
		2 => 'CSS_',
		3 => 'HTML_',
		4 => 'JQuery_',
		);
	$index = 0;

	foreach ($json as $key => $value) {
		$json[$key] = changeStatus($prefixes[$index], $value);
		$index ++;
	}

	$json = json_encode($json);							 //decoding json

	if(file_put_contents('../../data/quiz.json', $json)) {  //putting json on the server
	}


//Function chages the status field at quiz JSON
	function changeStatus ($pref, $arr) {
		for ($i = 0; $i < count($arr); $i++) { 
			$arr[$i]['active'] = false;
		}

		for ($i = 0; $i < count($arr); $i++) { 
			$prefix = $pref . $i;
			if (isset($_POST[$prefix])) {
				$arr[$i]['active'] = true;
			}
		}
		return $arr;

	}
//end of function

	include "../html/submited.html";
?>

