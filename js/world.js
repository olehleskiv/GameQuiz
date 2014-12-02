

function Building() {
	this.id = 'htmlBuilding';
	this.href = '#htmlQuiz';
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.j = 0;
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
		console.log(link);
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

function cssBuilding(x, y, z, j) {

	this.id = "cssBuilding";
	this.href = '#cssQuiz';
	if(arguments[0]) {
		this.x = x;
	}
	if(arguments[1]) {
		this.y = y;
	}
	if(arguments[2]) {
		this.z = z;
	}
	if(arguments[3]) { this.j = j; }
}

function htmlBuilding(x, y, z, j) {

	this.id = "htmlBuilding";
	this.href = '#htmlQuiz';
	if(arguments[0]) { this.x = x; }
	if(arguments[1]) { this.y = y; }
	if(arguments[2]) { this.z = z; }
	if(arguments[3]) { this.j = j; }
}

function oopBuilding(x, y, z, j) {

	this.id = "oopBuilding";
	this.href = '#oopQuiz';
	if(arguments[0]) { this.x = x; }
	if(arguments[1]) { this.y = y; }
	if(arguments[2]) { this.z = z; }
	if(arguments[3]) { this.j = j; }}

function jqueryBuilding(x, y, z, j) {

	this.id = "jqueryBuilding";
	this.href = '#jqQuiz';
	if(arguments[0]) { this.x = x; }
	if(arguments[1]) { this.y = y; }
	if(arguments[2]) { this.z = z; }
	if(arguments[3]) { this.j = j; }
}

function javascriptBuilding(x, y, z, j) {

	this.id = "javascriptBuilding";
	this.href = '#jsQuiz';
	if(arguments.x) { this.x = x; }
	if(arguments.y) { this.y = y; }
	if(arguments.z) { this.z = z; }
	if(arguments.j) { this.j = j; }
}
htmlBuilding.prototype = new Building();

var htmlBuild = new htmlBuilding(125);
htmlBuild.draw();

cssBuilding.prototype = new Building();

var cssBuild = new cssBuilding(125, 0);
cssBuild.draw();

javascriptBuilding.prototype = new Building();

var javascriptBuilding = new javascriptBuilding();
javascriptBuilding.draw();

jqueryBuilding.prototype = new Building();

var jQueryBuild = new jqueryBuilding(-130, 0);
jQueryBuild.draw();

oopBuilding.prototype = new Building();

var oopBuild = new oopBuilding(-180, 20);
oopBuild.draw();







