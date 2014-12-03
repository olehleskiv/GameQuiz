



function brain() {
	this.js = 0;
	this.html = 0;
	this.css = 0;
	this.oop = 0;
	this.jquery = 0;
}

function body() {

	this.human = document.createElement('div');						
	this.human.style.top = "130px";								//Start position top
	this.human.style.left = "730px";
	this.human.style.zIndex = 0;							//Start position left

	this.stepsRight = 730;
	this.stepsTop = 100;
	var block = document.getElementById('gamePage');
	block.appendChild(this.human);

}

function Human(){
	this.brain = new brain();
	this.humanBody = new body();
}

Human.prototype.move = function(direction, speed) {

		var dudePos = $("#mainGuy").offset();

		var htmlBuildingPos = $("#htmlBuilding").offset();
		var cssBuildingPos = $("#cssBuilding").offset();
		var jsBuildingPos = $("#javascriptBuilding").offset();
		var jqBuildingPos = $("#jqueryBuilding").offset();
		var oopBuildingPos = $("#oopBuilding").offset();
		var left  = 37,
			up    = 38,
			right = 39,
			down  = 40;

		if(direction == right) {												        // if "->" button is pressed
			this.humanBody.stepsRight += speed;
			this.humanBody.human.style.left = this.humanBody.stepsRight + "px";
			this.humanBody.human.style.background = "url(img/people/walker_right.gif)";
			if(dudePos.left > 1250) {											    // prevent the car from moving out from the
				this.humanBody.stepsRight = 1150;									// main block on right side
			}
			return;
		}
		if(direction == left) {													// if "<-" button is pressed
			this.humanBody.stepsRight -= speed;
			this.humanBody.human.style.left = this.humanBody.stepsRight + "px";
			this.humanBody.human.style.background = "url(img/people/walker_left.gif)";
			if(dudePos.left < 100) {												// prevent the car from moving out from the
				this.humanBody.stepsRight = 0;										// main block on left side
			}
			return;
		}
		if(direction == down) {													// if "down" button is pressed
			this.humanBody.stepsTop += speed;
			this.humanBody.human.style.top = this.humanBody.stepsTop + "px";
			this.humanBody.human.style.background = "url(img/people/walker_down.gif)";
			if(dudePos.top > 600) {												// prevent the car from moving lover than
				this.humanBody.stepsTop = 600;									// 500px from top
			}

			//Z-index controll, visibility of
			//main caracter in front and on te back
			//of the buildings
			if(dudePos.top > 250) {
				this.humanBody.human.style.zIndex = 1;
			} else if(dudePos.top < 330){
				this.humanBody.human.style.zIndex = 0;
			}
			if(dudePos.top > 400) {
				this.humanBody.human.style.zIndex = 2;
			} else if(dudePos.top < 400 && dudePos.top > 330){
				this.humanBody.human.style.zIndex = 1;
			}
			if(dudePos.top > 510) {
				this.humanBody.human.style.zIndex = 3;
			} else if(dudePos.top < 470 && dudePos.top > 400){
				this.humanBody.human.style.zIndex = 2;
			}


			return;
		}
		if(direction == up) {													// if "up" button is pressed
			this.humanBody.stepsTop -= speed;
			this.humanBody.human.style.top = this.humanBody.stepsTop + "px";
			this.humanBody.human.style.background = "url(img/people/walker_up.gif)";
			if(dudePos.top < 50) {												// prevent the car from moving higher than
				this.humanBody.stepsTop = 50;										// 50px from top
			}
			if(dudePos.top > htmlBuildingPos.top + 100 && dudePos.left < htmlBuildingPos.left + 250 &&
				dudePos.top < htmlBuildingPos.top + 150) {

				alert("html here!")
				//Open popup here!

			}
			if(dudePos.top > cssBuildingPos.top + 100 && dudePos.left > cssBuildingPos.left &&
				dudePos.top < cssBuildingPos.top + 150) {

				alert("css here!")
				//Open popup here!

			}
			if(dudePos.top > jsBuildingPos.top + 100 && dudePos.left > jsBuildingPos.left &&
				dudePos.left < jsBuildingPos.left + 150 &&
				dudePos.top < jsBuildingPos.top + 280) {

				alert("js here!")
				//Open popup here!

			}
			if(dudePos.top > oopBuildingPos.top + 140 && dudePos.left < oopBuildingPos.left + 250 &&
				dudePos.top < oopBuildingPos.top + 190) {

				alert("oop here!")
				//Open popup here!

			}
			if(dudePos.top > jqBuildingPos.top + 80 && dudePos.left > jqBuildingPos.left &&
				dudePos.top < jqBuildingPos.top + 130) {

				alert("jQuery here!")
				//Open popup here!

			}

			//Z-index controll, visibility of
			//main caracter in front and on te back
			//of the buildings
			if(dudePos.top > 250) {
				this.humanBody.human.style.zIndex = 1;
			} else if(dudePos.top < 330){
				this.humanBody.human.style.zIndex = 0;
			}
			if(dudePos.top > 400) {
				this.humanBody.human.style.zIndex = 2;
			} else if(dudePos.top < 400 && dudePos.top > 330){
				this.humanBody.human.style.zIndex = 1;
			}
			if(dudePos.top > 510) {
				this.humanBody.human.style.zIndex = 3;
			} else if(dudePos.top < 470 && dudePos.top > 400){
				this.humanBody.human.style.zIndex = 2;
			}


			return;
		}
		this.function
};

Human.prototype.stop = function() {
	this.humanBody.human.style.background = "url(img/people/walker.png)";
}



var mainDude = new Human();														
			
mainDude.humanBody.human.setAttribute("id","mainGuy");	
mainDude.humanBody.stepsTop += 50;	

var gameArea = document.getElementById('gamePage');
document.body.setAttribute("onkeydown","mainDude.move(event.keyCode,5);")
document.body.setAttribute("onkeyup", "mainDude.stop();")

