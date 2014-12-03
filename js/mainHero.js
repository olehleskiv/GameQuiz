
define(['Human'], function(Human) {

	this.mainDude = new Human();
					
	this.mainDude.humanBody.human.setAttribute("id","mainGuy");
	this.mainDude.humanBody.human.style.top = "100px";
	this.mainDude.humanBody.human.style.left = "730px";
	this.mainDude.humanBody.stepsTop = 100;
	this.mainDude.humanBody.stepsRight = 730;

	var gameArea = document.getElementById('gamePage');
	document.body.setAttribute("onkeydown","mainDude.move(event.keyCode,5);");
	document.body.setAttribute("onkeyup", "mainDude.stop();");
	


			//test stydy buttons should be deleted
			var button = document.createElement('button');
			button.setAttribute('class','testButton');
			button.innerHTML = "study html";


			button.onclick = function() {
				mainDude.study('html', 5);
			}
			gameArea.appendChild(button);

			var button = document.createElement('button');
			button.setAttribute('class','testButton1');
			button.innerHTML = "study css";


			button.onclick = function() {
				mainDude.study('css', 5);
			}
			gameArea.appendChild(button);

			var button = document.createElement('button');
			button.setAttribute('class','testButton2');
			button.innerHTML = "study js";


			button.onclick = function() {
				mainDude.study('js', 5);
			}
			gameArea.appendChild(button);

			var button = document.createElement('button');
			button.setAttribute('class','testButton3');
			button.innerHTML = "study jq";


			button.onclick = function() {
				mainDude.study('jq', 5);
			}
			gameArea.appendChild(button);

			var button = document.createElement('button');
			button.setAttribute('class','testButton4');
			button.innerHTML = "study oop";


			button.onclick = function() {
				mainDude.study('oop', 5);
			}
			gameArea.appendChild(button);



	return mainDude;
	
});