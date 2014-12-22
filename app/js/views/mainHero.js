
define(['class/Human'], function(Human) {

	this.mainDude = new Human();
					
	this.mainDude.humanBody.human.setAttribute("id","mainGuy");
	this.mainDude.humanBody.human.style.top = "450px";
	this.mainDude.humanBody.human.style.left = "330px";
	this.mainDude.humanBody.stepsTop = 450;
	this.mainDude.humanBody.stepsRight = 330;

	this.mainDude.humanBody.human.onclick = function() {
		if ( !$("#mainGuy").hasClass("activeMainGuy") ) {
			mainDude.showMessage();
		} else {
			mainDude.hideMessage();
		}
	}

	var gameArea = document.getElementById('gamePage');
	document.body.setAttribute("onkeydown","mainDude.move(event.keyCode,5);");
	document.body.setAttribute("onkeyup", "mainDude.stop();");
	
	mainDude.showMessage();
	return mainDude;
	
});