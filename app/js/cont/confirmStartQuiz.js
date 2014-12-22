
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
			
			///////////////////////////////////////////////////////////////////
			/// If the test was already passed- we display results in popup ///
			///////////////////////////////////////////////////////////////////

			if(localStorage.getItem('brain' + (name.slice(0, 1).toUpperCase() + name.slice(1))) != 0) {

				var score = localStorage.getItem('brain' + (name.slice(0, 1).toUpperCase() + name.slice(1))),
				points = localStorage.getItem(name + "Points"),
				mesBody = document.getElementById('gameConfirmBody');

				mesBody.innerHTML = "<p>you have already passed this test!, you current score is<h2>" + 
										score + "%" + 
									"</h2></p><p>your points:<h3>" + points + "</h3>" +
									"your current result will be overridden</p>";
			} else {
				var mesBody = document.getElementById('gameConfirmBody');
				mesBody.innerHTML = "";
			}



			var startButton = document.getElementById('confirmStart');
			startButton.setAttribute('href','#' + name + 'Quiz');
			var quizContainer = name + 'Quiz';

			createQuiz(name, quizContainer);
						
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