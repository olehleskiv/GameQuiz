

define(['enterBuilding', 'zIndexCheck'], function(enterBuilding, zIndexCheck) {

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

	return Human;
});