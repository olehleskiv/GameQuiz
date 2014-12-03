

define(['confirmStartQuiz'], function(confirmStartQuiz) { 

	function Building() {
		this.id = 'htmlBuilding';
		this.href = '#htmlQuiz';
		this.x = 0;
		this.y = 0;
	}

	Building.prototype.draw = function() {
		var block = document.getElementById('gamePage');
		this.building = document.createElement('div');
		this.building.setAttribute("id",this.id);
		this.building.setAttribute("href",this.href);

		this.building.style.position = "relative";
		this.building.style.backgroundPosition = "center";
		this.building.style.marginTop = this.x + "px";
		this.building.style.marginLeft = this.z + "px";
		this.building.style.marginRight= this.y + "px";
		this.building.style.marginBottom= this.j + "px";

		this.building.onclick = function() {
			var link = $(this).attr('href');

			if(link == '#htmlQuiz') {
				confirmStartQuiz('html');
			}
			if(link == '#cssQuiz') {
				confirmStartQuiz('css');
			}
			if(link == '#jsQuiz') {
				confirmStartQuiz('js');
			}
			if(link == '#oopQuiz') {
				confirmStartQuiz('oop');
			}
			if(link == '#jqQuiz') {
				confirmStartQuiz('jq');
			}
		};

		block.appendChild(this.building);
	};

	return Building;
});


