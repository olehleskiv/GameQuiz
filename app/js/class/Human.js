

define(['cont/enterBuilding', 'cont/zIndexCheck', 'cont/showRes'], function(enterBuilding, zIndexCheck, showRes) {


	function brain() {
		if(!localStorage.getItem('brainJs')) {

			localStorage.setItem('brainJs',0)
			localStorage.setItem('brainHtml',0)
			localStorage.setItem('brainCss',0)
			localStorage.setItem('brainOop',0)
			localStorage.setItem('brainJq',0)
		}

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
		
			document.getElementById('startInstruction').style.display = "none";

			var dudePos = $("#mainGuy").position();

			if(direction == 39) {												        // if "->" button is pressed
				this.humanBody.stepsRight += speed;
				this.humanBody.human.style.left = this.humanBody.stepsRight + "px";
				this.humanBody.human.style.background = "url(img/people/walker.gif)";
				this.humanBody.human.style.backgroundPosition = '-100px -5px';
				if(dudePos.left > 1200) {
					this.humanBody.stepsRight = 1200;									
				}
				return;
			}
			if(direction == 37) {													// if "<-" button is pressed
				this.humanBody.stepsRight -= speed;
				this.humanBody.human.style.left = this.humanBody.stepsRight + "px";
				this.humanBody.human.style.background = "url(img/people/walker.gif)";
				this.humanBody.human.style.backgroundPosition = '-100px -90px';
				if(dudePos.left < 0) {
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
			var result = points;
			localStorage.setItem('brainHtml',result);
			this.brain.html = result;
			showRes('HTML', result, 'htmlBuilding', 'mobhtmlProgress');

		}
		if(name == "css"){
			var result = points;
			localStorage.setItem('brainCss',result);
			this.brain.css = result;
			showRes('CSS', result, 'cssBuilding', 'mobcssProgress');

		}
		if(name == "js"){
			var result = points;
			localStorage.setItem('brainJs',result);
			this.brain.js = result;
			showRes('JS', result, 'javascriptBuilding', 'mobjsProgress');
		}
		if(name == "jq"){
			var result = points;
			localStorage.setItem('brainJq',result);
			this.brain.jq = result;
			showRes('jQuery/ajax', result, 'jqueryBuilding', 'mobjqProgress');

		}
		if(name == "oop"){
			var result = points;
			localStorage.setItem('brainOop',result);
			this.brain.oop = result;
			showRes('jQuery/ajax', result, 'oopBuilding', 'moboopProgress');
		}
	};

	return Human;
});