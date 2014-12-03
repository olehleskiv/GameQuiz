



function Building() {
	this.id = "htmlBuilding";
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.j = 0;
}

Building.prototype.draw = function() {
	var block = document.getElementById('gamePage');
	var building = document.createElement('div');
	building.setAttribute("id",this.id);

	building.style.position = "relative";
	building.style.backgroundPosition = "center";
	building.style.marginTop = this.x + "px";
	building.style.marginLeft = this.z + "px";							
	building.style.marginRight= this.y + "px";	
	building.style.marginBottom= this.j + "px";					

	block.appendChild(building);
}


function cssBuilding(x, y, z, j) {

	this.id = "cssBuilding";
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
	if(arguments[0]) { this.x = x; }
	if(arguments[1]) { this.y = y; }
	if(arguments[2]) { this.z = z; }
	if(arguments[3]) { this.j = j; }
}

function oopBuilding(x, y, z, j) {

	this.id = "oopBuilding";
	if(arguments[0]) { this.x = x; }
	if(arguments[1]) { this.y = y; }
	if(arguments[2]) { this.z = z; }
	if(arguments[3]) { this.j = j; }}

function jqueryBuilding(x, y, z, j) {

	this.id = "jqueryBuilding";
	if(arguments[0]) { this.x = x; }
	if(arguments[1]) { this.y = y; }
	if(arguments[2]) { this.z = z; }
	if(arguments[3]) { this.j = j; }
}

function javascriptBuilding(x, y, z, j) {

	this.id = "javascriptBuilding";
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







