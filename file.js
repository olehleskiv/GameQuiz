

//instead of buttons I have created trees:

function Tree() {											//main tree object									

	this.x = 1;
	this.y = 1;
	this.background = "url(img/tree.png)";					//default background
}


Tree.prototype.Draw = function() {							//showing tree on the page function
	var block = document.getElementById('mainContainer');
	var tree = document.createElement('div');
	tree.setAttribute("class","tree");

	tree.style.background = this.background;

	tree.style.backgroundSize ="100%";
	tree.style.backgroundRepeat ="no-repeat";
	tree.style.top = this.x + "px";							//tree position from top
	tree.style.left = this.y + "px";						//tree position from left

	block.appendChild(tree);
};


function RedTree(x,y) {
	this.x = x;
	this.y = y;
	this.background = "url(img/tree.png)";
}

function GreenTree(x,y) {
	this.x = x;
	this.y = y;
	this.background = "url(img/tree1.png)";
}

function BlueTree(x,y) {
	this.x = x;
	this.y = y;
	this.background = "url(img/tree2.png)";
}

RedTree.prototype = new Tree();
GreenTree.prototype = new Tree();
BlueTree.prototype = new Tree();


//Lest create some trees:
var RedB = new RedTree(300,100);
RedB.Draw();

var GreenB = new GreenTree(122,190);
GreenB.Draw();

var BlueB = new BlueTree(400,200);
BlueB.Draw();

var GreenB = new GreenTree(600,900);
GreenB.Draw();

var GreenB = new GreenTree(138,605);
GreenB.Draw();

var RedB = new RedTree(600,0);
RedB.Draw();








/////////////////////////////////

/////////// Car Game ///////////

////////////////////////////////


function SW() {																//steering wheel object(never used it :)
	this.moveright = false;
	this.moveleft = false;
}

function body() {															//The body of the car object
	this.seats = 2;
	this.passengers = 0;

	this.startPosTop = "65px";												//Start position of the car from top
	this.startPosLeft = "10px";												//Start position of the car from left,
																			//these option can be redefined

	this.carBody = document.createElement('div');							
	this.carBody.setAttribute("id","car");
	this.carBody.setAttribute("class","dragable");							//this class will make the car react on drag and drop
	this.carBody.style.top = this.startPosTop;								//Start position top
	this.carBody.style.left = this.startPosLeft;							//Start position left

	this.stepsRight = 0;
	this.stepsTop = 0;
	var block = document.getElementById('mainContainer');
	block.appendChild(this.carBody);
}

function Engine() {															//Engine object
	this.size = 2.0;
	this.maxSpeed = 150;
	this.transmition = 5;
	this.mileage = 0;														//mileage is 0 and the beginning 
}

function GasolineTank() {													//GasolineTank object
	this.volume = 0;
	this.canFill = function(num) {											//increase the amount of gas in the tank
		this.volume += num;
	};
	this.goEmpty = function(num) {											//reduce the amount of gas in the tank
		this.volume -= num;
	};
}

function Vehicle() {														//Main Vehicle Object, this object is a composition
	this.carbody = new body();												//of body, engine, GasolineTank, SW objects
	this.engine = new Engine();
	this.gasolineTank = new GasolineTank();
	this.sweel = new SW();
	this.carPosition = $("#car").offset();									//jquery finding out position of the car
}

Vehicle.prototype.setPassengers = function(num) {							//this function inserts passengers into the car
	this.carbody.passengers = num;
};

Vehicle.prototype.move = function(direction, km) {							//This is the main function in the game, it receives
																			//the code of the button which was pushed on the
																			//keyboard, function will move the car only if it
																			//receives arrow buttons codes(37,38,39,40)		

	var alert = document.getElementById('alert');							//alert is the block with an error message

	var CarPos = $("#car").offset();										//<--jquery function to track cars position
		var menu; 
		if(CarPos.top > 30 && CarPos.top < 270 && CarPos.left > 900 && CarPos.left < 1200) { // position where we show the gas
			menu = document.getElementById('gasMenu');									 	 // station menu
			menu.style.visibility = "visible";

		}
		if(CarPos.top < 30 || CarPos.top > 270 || CarPos.left < 900 || CarPos.left > 1200) { //if car moves from the position
			menu = document.getElementById('gasMenu');									 	 // gas station menu will hide
			menu.style.visibility = "hidden";
		}
		if(CarPos.top > 450) {												//button which will ask the user if he
			confirm = document.getElementById('confirmPlay');				//wants to play, will only appear
			confirm.style.visibility = "visible";							//if car's distance from top is >  450px
      		var controlls = document.getElementById('hitButtons');
			controlls.style.display = "block";								//show game controlls(if they were hidden)

			var button;
			if(myCar.gasolineTank.volume > 0) {                             //if gasoline tank has gas inside
				button = document.getElementById('playButton');         	//green button will appear
				button.setAttribute("class", "btn btn-success btn-lg");			
				button.setAttribute("data-toggle", "modal");
				button.setAttribute("data-target", "#game");
				button.innerHTML = "play ?";

			} else {														//if gasoline tank is empty
				button = document.getElementById('playButton');				//red button will appear
				button.setAttribute("class", "btn btn-danger btn-lg");		//game is not available to play
				button.innerHTML = "you need gas!";
			}
		}
		if(CarPos.top < 450) {												//hide the button when the car drives
			confirm = document.getElementById('confirmPlay');				//and distance from top is < 450px
			confirm.style.visibility = "hidden";
		}
	


	if(this.carbody.passengers === 0 || this.carbody.passengers === undefined) {	//--human object must be dragged into the car
		alert = document.getElementById('alert');									//to start moving
		alert.setAttribute("class","alert alert-danger");
		alert.innerHTML = "Drag the driver in to the car!";

	} else if(this.carbody.passengers !== 0){									//--if there is someone in the car

		alert.style.display = "none";											//hide the block with error message

		if(direction == 39) {													// if "->" button is pressed
			this.carbody.carBody.style.background = "url('img/car.png')";
			this.carbody.carBody.style.transform = "rotate(0deg)";
			this.carbody.stepsRight += km;
			this.carbody.carBody.style.left = this.carbody.stepsRight + "px";
			if(CarPos.left > 1200) {											  // prevent the car from moving out from the
				this.carbody.stepsRight = 1000;									  // main block on right side
			}
		}
		if(direction == 37) {													// if "<-" button is pressed
			this.carbody.carBody.style.background = "url('img/back_car.png')";
			this.carbody.carBody.style.transform = "rotate(0deg)";
			this.carbody.stepsRight -= km;
			this.carbody.carBody.style.left = this.carbody.stepsRight + "px";
			if(CarPos.left < 0) {												// prevent the car from moving out from the
				this.carbody.stepsRight = 0;										// main block on left side
			}
		}
		if(direction == 40) {													// if "down" button is pressed
			this.carbody.carBody.style.transform = "rotate(90deg)";
			this.carbody.stepsTop += km;
			this.carbody.carBody.style.top = this.carbody.stepsTop + "px";
			if(CarPos.top > 500) {												// prevent the car from moving lover than
				this.carbody.stepsTop = 600;									// 500px from top
			}
		}
		if(direction == 38) {													// if "up" button is pressed
			this.carbody.carBody.style.transform = "rotate(-90deg)";
			this.carbody.stepsTop -= km;
			this.carbody.carBody.style.top = this.carbody.stepsTop + "px";
			if(CarPos.top < 50) {												// prevent the car from moving higher than
				this.carbody.stepsTop = 50;										// 50px from top
			}

		}
		this.engine.mileage += km/10;											//increase the mileage 
		
		var mileage = document.getElementById('milage');	
		var passengers = document.getElementById('passengers');
		var gas = document.getElementById('gas');

		mileage.innerHTML = Math.floor(this.engine.mileage);					//show mileage on page
		passengers.innerHTML = this.carbody.passengers;							//show passengers on page
		gas.innerHTML = this.gasolineTank.volume;								//show petrol left on page


		var myHelth = document.getElementById('myHelth');						//in the game pop-up, show amount
		var enemyHelth = document.getElementById('enemyHelth');					//of player and enemy car petrol inside
		myHelth.innerHTML = this.gasolineTank.volume;
		enemyHelth.innerHTML = this.gasolineTank.volume;

	}

};


var myCar = new Vehicle();														//create player car

var enemyCar = new Vehicle();												 	//create enemy car

enemyCar.carbody.startPosTop = "100px";											//configure enemy car start position
enemyCar.carbody.carBody.setAttribute("id","enemyCar");							//set a different id to enemy car



//Lets move the enemy car

function moveEnemyCar() {												//this function is for moving the enemy car
	var enemyCar = document.getElementById('enemyCar');
	if(enemyCar.style.left == "100px") {								//enemy car start position is left:100px
		enemyCar.style.background = "url('img/badCar.png')";					

		enemyCar.style.transition = "0.5s ease-out 0.5s";				//animation to move the car
		enemyCar.style.webkitTransition = "0.5s ease-out 0.5s";
		enemyCar.style.left = "800px";									//move the car to this position
	} else {
		enemyCar.style.background = "url('img/badCarBack.png')";		//change background if car goes back

		enemyCar.style.transition = "0.5s ease-out 0.5s";
		enemyCar.style.left = "100px";									//move car to start position
	}
}

setInterval(moveEnemyCar, 2000);								//every 2 seconds the enemy car will move
																//direction is set in the function




///////////////////////////////////
///////     Humans     ////////////
//////////////////////////////////

function Human(top, left, link) {								//object human
	this.top = 0 || top;										//position of human on page
	this.left = 0 || left;
	this.link =  link || "url(img/dude.png)";
}

Human.prototype.Draw= function() {								//function to show the human on the page
	this.dude = document.createElement('div');
	this.dude.setAttribute("class","");
	this.dude.style.background = this.link;
	this.dude.setAttribute("draggable","true");					//make human drop-able
	this.dude.setAttribute("class","dragable human");			//make human drag-able
	this.dude.style.top = this.top;
	this.dude.style.left = this.left;

	var block = document.getElementById('mainContainer');
	block.appendChild(this.dude);
};



function Dude(x, y, link) {						//create a Dude(basically the driver)

	this.top = x + "px";
	this.left = y + "px";
}


function passenger(x, y, link ) {				//create more people
	this.top = x + "px";
	this.left = y + "px";
	this.link = link;
}


Dude.prototype = new Human();
passenger.prototype = new Human();


var Driver = new Dude(40,160);
Driver.Draw();

var Passenger = new passenger(160, 330, "url(img/nerd.png)");	//set position and background for a human example
Passenger.Draw();

var Passenger = new passenger(160, 390, "url(img/hippy.png)");	//set position and background for a human example
Passenger.Draw();	






///////////////////////////
////       World       ////
///////////////////////////


function busStop() {                                //object bus stop
	this.busStop = document.createElement('div');
	this.busStop.setAttribute("id", "busStop");

	var block = document.getElementById('mainContainer');
	block.appendChild(busStop);
}

busStop();  //--create bus stop



function gasStation() {								//object gas station
	this.building = document.createElement('div');	//creating the gas station
	this.building.setAttribute("id","gastation");

	var block = document.getElementById('mainContainer');
	block.appendChild(this.building);

	this.gasMenu = document.createElement('div');			//gas station appearing menu
	this.gasMenu.setAttribute("id","gasMenu");
	this.gasMenu.innerHTML = "Lets tank?";
		var buttonyes = document.createElement('button');
		buttonyes.innerHTML = "yes";
		buttonyes.onclick = function() {					//if "yes" button is pressed gasTank will be filled with 50l
			myCar.gasolineTank.canFill(50);
			var gas = document.getElementById('gas');
			gas.innerHTML = myCar.gasolineTank.volume;
		};
		buttonyes.setAttribute("class", "btn btn-success");
		var buttonno = document.createElement('button');
		buttonno.innerHTML = "no";
		buttonno.onclick = function() {						//if "no" button is pressed we will hide the menu
			var menu = document.getElementById('gasMenu');
			menu.style.visibility = "hidden";
		};
		buttonno.setAttribute("class", "btn btn-danger");
	this.gasMenu.appendChild(buttonyes);
	this.gasMenu.appendChild(buttonno);

	this.building.appendChild(this.gasMenu);


}


gasStation(); //--create gas station


function controlls() {											//This is the instruction that appears when the page loads
	this.controlls = document.createElement('div');				//it disappears when you start moving

	this.controllsInstruction = document.createElement('div');
	this.controllsInstruction.innerHTML = "Use these keys to move the car";
	this.controllsInstruction.setAttribute("id","instruction");

	this.controlls.setAttribute("id","controlls");
	this.controlls.appendChild(this.controllsInstruction);

	var block = document.getElementById('mainContainer');
	block.appendChild(controlls);
}

controlls(); //--create controls instruction




function gameConfirm() {									//this is the button which appears when you drive
															//to enemy car, it dispays - "play ?" is you have gas
															//in your car, and "you need gas" if you have no gas

	var confirmPlay = document.createElement('div');			
	confirmPlay.setAttribute("id", "confirmPlay");			

		
			var play = document.createElement('button');
			play.setAttribute("id", "playButton");
			confirmPlay.appendChild(play);

	var block = document.getElementById('mainContainer');
	block.appendChild(confirmPlay);
}

gameConfirm(); //--create confirm play button




///////////////////////////////////
/////         game          ///////
///////////////////////////////////

	var myHelth = document.getElementById('myHelth');       //insert gas amount value in the game pop up
	var enemyHelth = document.getElementById('enemyHelth'); 
	myHelth.innerHTML = myCar.gasolineTank.volume;
	enemyHelth.innerHTML = myCar.gasolineTank.volume;		//enemy gas will be the same as players


function hit(value) {										//hit function

		var myHelth = document.getElementById('myHelth');
		var enemyHelth = document.getElementById('enemyHelth');
		var gameRes = document.getElementById('gameRes');

		function getRandomInt(min, max) {					//function for creating random numbers
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		var helth = myCar.gasolineTank.volume
		if(value == getRandomInt(1,3)) {					//if the button number you clicked is the same as 
															//a random button, you caught him and computer 
															//health will decrease
			gameRes.innerHTML = "got him";
			var val = getRandomInt(50,200)
			enemyHelth.innerHTML = myCar.gasolineTank.volume - val; //decrease hell amount with a 
			myCar.gasolineTank.volume = val;						//random value from 5- to 100

		} else {
			gameRes.innerHTML = "missed";					//if the button number you clicked NOT the same as 
															//a random button, player missed and his health will decrease
			myHelth.innerHTML = myCar.gasolineTank.volume - getRandomInt(50,200);
		}
		if(myHelth.innerHTML <= 0) {						//If player gas amount will be lower than 0 player will loose
			myHelth.innerHTML = "<span style='color:red'>You looser!</span>";
			var controlls = document.getElementById('hitButtons');
			controlls.style.display = "none";				//hide game controlls
			myCar.gasolineTank.volume = 0;
			alert("you looser");
		}
		if(enemyHelth.innerHTML <= 0) {						//If computer gas amount will be lower than 0 player will win
			enemyHelth.innerHTML = "<span style='color:red'>Computer lost the game!</span>";
			var controlls = document.getElementById('hitButtons');
			controlls.style.display = "none";				//hide game controlls
			alert("you win");
		}
}









//Drag and drop


function handleDragStart(e) {
  // Target (this) element is the source node.
  this.style.opacity = '0 !important';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.

}
var a = 0;
function handleDrop(e) {

  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.

  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the columnwe dropped on.
    var inst = document.getElementById('controlls');
	inst.style.display = "none";
    dragSrcEl.style.display = "none";
    a++;
    myCar.setPassengers(a); 												//set passengers inside the car
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragEnd(e) {
    // this/e.target is the source node.
	
	this.classList.remove('over');
    [].forEach.call(cols, function (col) {
    col.classList.remove('over');

  });
}

var cols = document.querySelectorAll('.dragable');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});


