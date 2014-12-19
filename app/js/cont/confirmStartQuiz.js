
define(['jquery', 'cont/quiz'], function($, createQuiz, confirmStartQuiz) { 

	function confirmStartQuiz(name) {						//this function fires when enterBuilding
															//function indicates that the hero entered
															//the bulding
		
		//before showing the popup we fire this function
		//it disables the keyboard, for user not to make
		//unnessasary steps, it inserts needed question in to the
		//popup and button with approprite link to required quiz :

		$('#gameConfirm').on('show.bs.modal', function (e) {
			document.body.setAttribute("onkeydown","return false");						//disable keyboard
			var title = document.getElementById('gameConfirmTitle');
			title.innerHTML = 'Do you want to start ' + name + ' quiz?';

			var startButton = document.getElementById('confirmStart');
			startButton.setAttribute('href','#' + name + 'Quiz');
			var quizContainer = name + 'Quiz';
			createQuiz(name, quizContainer);
						
			// startButton.onclick = function() {
			// // 	console.log('on');
			//  	createQuiz(name, quizContainer);
			//  };
		});



		//this function enables the keyboard
		//after pop up is closed
		$('#gameConfirm').on('hide.bs.modal', function (e) {

			document.body.setAttribute("onkeydown","mainDude.move(event.keyCode,5);");	//enable keyboard
		});

		//this function opens the popup, after
		//above configs are setteled
		$('#gameConfirm').modal();

		//after popup is closed we move the main hero 30px lover
		//to make him visible
		mainDude.humanBody.stepsTop += 30;
		mainDude.humanBody.human.style.top = mainDude.humanBody.stepsTop + "px";
	}
	
	return confirmStartQuiz;
});