
define(['class/Human'], function(Human) {

	this.mainDude = new Human();
					
	this.mainDude.humanBody.human.setAttribute("id","mainGuy");
	this.mainDude.humanBody.human.style.top = "450px";
	this.mainDude.humanBody.human.style.left = "330px";
	this.mainDude.humanBody.stepsTop = 100;
	this.mainDude.humanBody.stepsRight = 730;

	var gameArea = document.getElementById('gamePage');
	document.body.setAttribute("onkeydown","mainDude.move(event.keyCode,5);");
	document.body.setAttribute("onkeyup", "mainDude.stop();");
	

	return mainDude;
	
});