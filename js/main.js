


var playButton = document.getElementById('playButton');

playButton.onclick = function() {
	var mainContainer = document.getElementById('mainPage');
	var gameContainer = document.getElementById('gamePage');
	var backButton = document.getElementById('backButton');

	if(mainContainer.style.display == "visible") {
		mainContainer.style.display = "none"
		gameContainer.style.display = "block";
	} else {
		mainContainer.style.display = "none"
		gameContainer.style.display = "block";
		backButton.style.visibility = "visible";
		backButton.onclick = function() {
			gameContainer.style.display = "none";
			mainContainer.style.display = "block";
		}
	}
}


$('#example').popover("options")