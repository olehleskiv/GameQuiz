<?php

	$question = $_POST;								//getting data from POST array

	$formated_question = array(						//forming approprite array for json file
		title => $question['title'],
		variants => array(
			htmlspecialchars($question['var1']),
			htmlspecialchars($question['var2']),
			htmlspecialchars($question['var3']),
			htmlspecialchars($question['var4']),
			htmlspecialchars($question['var5'])
		),
		correct => $question['correct'],
		active => true,
	);

	$json = file_get_contents('../data/quiz.json'); // getting the json file
	if(!$json) {									//if coudn't get json - show error
		echo "could not open json file!";
	}
	$json = json_decode($json, true);				//decoding json



	$json = $json;

		function factorial($x) {
			if ($x === 0) return 1;
			else return $x*factorial($x);
		}


	if($question['category'] == "html") {			//putting question array into appropriate category
		$json['html'][] = $formated_question;
	} elseif($question['category'] == "css") {
		$json['css'][] = $formated_question;
	} elseif($question['category'] == "js") {
		$json['js'][] = $formated_question;
	} elseif($question['category'] == "oop") {
		$json['oop'][] = $formated_question;
	} elseif($question['category'] == "jq") {
		$json['jq'][] = $formated_question;
	}

	$json = json_encode($json);							 //decoding json

	if(file_put_contents('../data/quiz.json', $json)) {  //putting json on the server

		echo "Got it!, question will be available after king approval";
	}
?>