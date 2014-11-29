<?php

	$question = $_POST;								//getting data from POST array

	$formated_question = array(						//forming approprite array for json file
		title => $question['title'],
		variants => array(
			$question['var1'],
			$question['var2'],
			$question['var3'],
			$question['var4'],
			$question['var5']
		),
		correct => $question['correct'],
		active => false,
	);

	$json = file_get_contents('../data/quiz.json'); // getting the json file
	if(!$json) {									//if coudn't get json - show error
		echo "could not open json file!";
	}
	$json = json_decode($json, true);				//decoding json

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

		echo "Thank you! you question has been submitted, it will be available after admin approval";
	}
?>