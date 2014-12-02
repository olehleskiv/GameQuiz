

zIndexCheck = function(position) {		//Z-index controll, visibility of
										//main caracter in front and behind
										//of the buildings
	var index;
	if(position > 250) {
		index =  2;
	} else if(position < 250){
		index = 1;
	}
	if(position > 400) {
		index = 3;
	} else if(position < 400 && position > 330){
		index = 2;
	}
	if(position > 500) {
		index = 4;
	} else if(position < 500 && position > 400){
		index = 3;
	}
	return index;
};


function confirmStartQuiz(name) {									//this function fires when enterBuilding
																	//function indicates that the hero entered
																	//the bulding
	
	//before showing the popup we fire this function
	//it disables the keyboard, for user not to make
	//unnessasary steps, it inserts needed question in to the
	//popup and button with approprite link to required quiz :

	$('#gameConfirm').on('show.bs.modal', function (e) {
		document.body.setAttribute("onkeydown","return false");						//disable keyboard
		var title = document.getElementById('gameConfirmTitle');
		title.innerHTML = 'do you want to start ' + name + ' quiz?';

		var startButton = document.getElementById('confirmStart');
		startButton.setAttribute('href','#' + name + 'Quiz');
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


function enterBuilding(id) {
	var dudePos = $(id).offset();

	var htmlBuildingPos = $("#htmlBuilding").offset();
	var cssBuildingPos = $("#cssBuilding").offset();
	var jsBuildingPos = $("#javascriptBuilding").offset();
	var jqBuildingPos = $("#jqueryBuilding").offset();
	var oopBuildingPos = $("#oopBuilding").offset();

	if(dudePos.top > htmlBuildingPos.top + 100 && dudePos.left < htmlBuildingPos.left + 250 &&
		dudePos.top < htmlBuildingPos.top + 150) {

			confirmStartQuiz('html');

		}
	if(dudePos.top > cssBuildingPos.top + 100 && dudePos.left > cssBuildingPos.left &&
		dudePos.top < cssBuildingPos.top + 150) {

			confirmStartQuiz('css');

		}
	if(dudePos.top > jsBuildingPos.top + 100 && dudePos.left > jsBuildingPos.left &&
		dudePos.left < jsBuildingPos.left + 150 &&
		dudePos.top < jsBuildingPos.top + 280) {

			confirmStartQuiz('js');
			
		}
	if(dudePos.top > oopBuildingPos.top + 140 && dudePos.left < oopBuildingPos.left + 250 &&
		dudePos.top < oopBuildingPos.top + 190) {

			confirmStartQuiz('oop');
			
		}
	if(dudePos.top > jqBuildingPos.top + 80 && dudePos.left > jqBuildingPos.left &&
		dudePos.top < jqBuildingPos.top + 130) {

			confirmStartQuiz('jq');
	
		}
}






function brain() {
	this.js = 0;
	this.html = 0;
	this.css = 0;
	this.oop = 0;
	this.jq = 0;
}

function body() {

	this.human = document.createElement('div');
	this.human.style.zIndex = 0;
	this.stepsRight = 0;
	this.stepsTop = 0;
	var block = document.getElementById('gamePage');
	block.appendChild(this.human);

}

function Human(){
	this.brain = new brain();
	this.humanBody = new body();
}

Human.prototype.move = function(direction, speed) {

		var dudePos = $("#mainGuy").offset();

		if(direction == 39) {												        // if "->" button is pressed
			this.humanBody.stepsRight += speed;
			this.humanBody.human.style.left = this.humanBody.stepsRight + "px";
			this.humanBody.human.style.background = "url(img/people/walker.gif)";
			this.humanBody.human.style.backgroundPosition = '-100px -5px';
			if(dudePos.left > 1250) {
				this.humanBody.stepsRight = 1150;									
			}
			return;
		}
		if(direction == 37) {													// if "<-" button is pressed
			this.humanBody.stepsRight -= speed;
			this.humanBody.human.style.left = this.humanBody.stepsRight + "px";
			this.humanBody.human.style.background = "url(img/people/walker.gif)";
			this.humanBody.human.style.backgroundPosition = '-100px -90px';
			if(dudePos.left < 100) {
				this.humanBody.stepsRight = 0;
			}
			return;
		}
		if(direction == 40) {													// if "down" button is pressed
			this.humanBody.stepsTop += speed;
			this.humanBody.human.style.top = this.humanBody.stepsTop + "px";
			this.humanBody.human.style.background = "url(img/people/walker.gif)";
			this.humanBody.human.style.backgroundPosition = '-8px -10px ';
			if(dudePos.top > 600) {
				this.humanBody.stepsTop = 600;								
			}

			this.humanBody.human.style.zIndex = zIndexCheck(dudePos.top);		//set z-index 

			return;
		}
		if(direction == 38) {													// if "up" button is pressed
			this.humanBody.stepsTop -= speed;
			this.humanBody.human.style.top = this.humanBody.stepsTop + "px";
			this.humanBody.human.style.background = 'url(img/people/walker.gif)';
			this.humanBody.human.style.backgroundPosition = '-10px 85px';
			if(dudePos.top < 50) {
				this.humanBody.stepsTop = 50;
			}

			enterBuilding("#mainGuy");

			this.humanBody.human.style.zIndex = zIndexCheck(dudePos.top);		//set z-index 

			return;
		}
};

Human.prototype.stop = function() {
	this.humanBody.human.style.background = "url(img/people/walker.gif)";
	this.humanBody.human.style.backgroundPosition = '-55px -50px';
};

Human.prototype.study = function(name, points) {
	if(name == "html"){
		this.brain.html += points;
		var bar = document.getElementById('htmlProgress');
		bar.innerHTML = mainDude.brain.html + "%";
		bar.style.width = mainDude.brain.html + "%";
	}
	if(name == "css"){
		this.brain.css += points;
		var bar = document.getElementById('cssProgress');
		bar.innerHTML = mainDude.brain.css + "%";
		bar.style.width = mainDude.brain.css + "%";
	}
	if(name == "js"){
		this.brain.js += points;
		var bar = document.getElementById('jsProgress');
		bar.innerHTML = mainDude.brain.js + "%";
		bar.style.width = mainDude.brain.js + "%";
	}
	if(name == "jq"){
		this.brain.jq += points;
		var bar = document.getElementById('jqProgress');
		bar.innerHTML = mainDude.brain.jq + "%";
		bar.style.width = mainDude.brain.jq + "%";
	}
	if(name == "oop"){
		this.brain.oop += points;
		var bar = document.getElementById('oopProgress');
		bar.innerHTML = mainDude.brain.oop + "%";
		bar.style.width = mainDude.brain.oop + "%";
	}
};

var mainDude = new Human();
			
mainDude.humanBody.human.setAttribute("id","mainGuy");
mainDude.humanBody.human.style.top = "100px";
mainDude.humanBody.human.style.left = "730px";
mainDude.humanBody.stepsTop = 100;
mainDude.humanBody.stepsRight = 730;

var gameArea = document.getElementById('gamePage');
document.body.setAttribute("onkeydown","mainDude.move(event.keyCode,5);");
document.body.setAttribute("onkeyup", "mainDude.stop();");









//test stydy buttons
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