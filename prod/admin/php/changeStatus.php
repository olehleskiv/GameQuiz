<?php

$json = file_get_contents('../../data/quiz.json'); // getting the json file
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

	echo json_encode($json);

	$json = json_encode($json);							 //decoding json

	if(file_put_contents('../../data/quiz.json', $json)) {  //putting json on the server
		echo "Thank you! you question has been submitted, it will be available after admin approval";
	}

?>