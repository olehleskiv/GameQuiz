(function(){
var quizURL = 'data/js.json';
var currentQuestion = 0,
	score = 0;

$("#but1").click(initStage);


function initStage(){
	var JSONobject = $.getJSON(quizURL, function(data) {
	var quizObject = JSONobject["responseJSON"];
	var holderElements = createQuizHolder();

	var mainHolder = holderElements['quizHolder'];
	var answerList = holderElements['answersHolder'];
	//var ok = createOKButton(holderElements['quizHolder']);
	var ok = createOKButton();

	ok.onclick = function () {
		if (mainHolder.innerHTML) {
			mainHolder.innerHTML = '';
		}
		mainHolder.innerHTML += showOneQuestion(quizObject, currentQuestion);
		currentQuestion++;
	}
	//box.innerHTML += showAllQuestions(quizObject);
	});
}

	function createQuizHolder() {

		var quizHolder = document.createElement('div');
		quizHolder.className = 'holder';
		var quizStyle = quizHolder.style;
		var elementsArray = [];
		
		// quizStyle.width = '700px';
		// quizStyle.height = 'auto';
		// quizStyle.margin = '0 auto';
		// quizStyle.backgroundColor = '#adf7b5';
		// quizStyle.fontSize = '25px';

		var question = document.createElement('span');
		var answers = document.createElement('ul');

		quizHolder.appendChild(question);
		quizHolder.appendChild(answers);


		document.body.appendChild(quizHolder);

		elementsArray['quizHolder'] = quizHolder;
		elementsArray['questionHolder'] = question;
		elementsArray['answersHolder'] = answers;


		return elementsArray;
	}

	function createOKButton(quizHolder) {
		var OKbutton = document.createElement("button");
		OKbutton.innerHTML = 'OK';
		OKbutton.style.backgroundColor = 'red';
		OKbutton.style.width = '100px';
		OKbutton.style.height = '50px';
		OKbutton.style.position = 'relative';
		OKbutton.style.top = '10px';
		//quizHolder.appendChild(OKbutton);
		document.body.appendChild(OKbutton);
		return OKbutton;
	}


// 	function showAllQuestions(quizObject) {
// 		var allQuestions = '';
// 		for (var i = 0; i < quizObject.js.length; i++) {
// 			allQuestions += '<hr>' + (i+1) + '. ' + quizObject.js[i].title + '<br>';
// 			for (var j = 0; j < quizObject.js[i].variants.length; j++) {
// 				allQuestions += quizObject.js[i].variants[j] + '<br>';
// 			}
// 		}
// 		return allQuestions;
// 	}


	function showOneQuestion(quizObject, number) {
		var question = '';
		question += (number + 1) + '. ' + quizObject.js[number].title + '<br>';
		question += addAnswers(quizObject.js[number].variants);
		// for (var j = 0; j < quizObject.js[number].variants.length; j++) {
		// 		question += quizObject.js[number].variants[j] + '<br>';
		// }
		return question;
}

	function addAnswers(answers,ul) {
		var answersText = '';
		for (var i = 0; i < answers.length; i++) {
			//var answerHolder = document.createElement('li');
			//answerHolder.innerHTML = answers[i];
			answersText += '<li>' + answers[i] + '</li>';
			//document.ul.appendChild(answerHolder);
		}
	return answersText;
	}




// function elements() {
// 		this.creator = function(type) {
// 			var obj;
// 			if (type == 'span') {
// 				obj = new spanConstructor;
// 			} 
// 			else if (type == 'div') {
// 				obj = new divConstructor;
// 			}
// 			else if (type == 'ul') {
// 				obj = new ulConstructor;
// 			}

// 			obj.voice = function() {
// 				console.log(this.value);
// 			}
// 			return obj;
// 		}


// 		var spanConstructor = function() {
// 			//this.value = 10;
// 			var span = document.createElement('span');
// 			return span;
// 		}

// 		var divConstructor = function() {
// 			var div = document.createElement('div');
// 			return span;
// 		}

// 		var ulConstructor = function() {
// 			var ul = document.createElement('ul');
// 			return span;
// 		}
// 	}

// var span = elements.creator('span');
// span.innerHTML = 'fdsfdsfdffds';
// document.body.appendChild(span);




})();

