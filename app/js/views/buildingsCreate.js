
define(['class/Building', 'cont/showRes'], function(Building, showRes) { 

	function cssBuilding(x, y, z, j) {

		this.id = "cssBuilding";
		this.href = '#cssQuiz';
		if(arguments[0]) {
			this.x = x;
		}
		if(arguments[1]) {
			this.y = y;
		}
	}

	function htmlBuilding(x, y, z, j) {

		this.id = "htmlBuilding";
		this.href = '#htmlQuiz';
		if(arguments[0]) { 
			this.x = x; 
		}
		if(arguments[1]) { 
			this.y = y; 
		}
	}

	function oopBuilding(x, y, z, j) {

		this.id = "oopBuilding";
		this.href = '#oopQuiz';
		if(arguments[0]) { 
			this.x = x; 
		}
		if(arguments[1]) { 
			this.y = y; 
		}

	}

	function jqueryBuilding(x, y, z, j) {

		this.id = "jqueryBuilding";
		this.href = '#jqQuiz';
		if(arguments[0]) { 
			this.x = x; 
		}
		if(arguments[1]) { 
			this.y = y; 
		}
	}

	function javascriptBuilding(x, y, z, j) {

		this.id = "javascriptBuilding";
		this.href = '#jsQuiz';
		if(arguments.x) { 
			this.x = x; 
		}
		if(arguments.y) { 
			this.y = y; 
		}
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

		//memorize js
		this.js = parseInt(localStorage.getItem('brainJs'));
		showRes('JS', this.js, 'javascriptBuilding"', 'mobjsProgress');
		console.log('loh');
		
		//memorize html
		this.html = localStorage.getItem('brainHtml');
		showRes('JS', this.js, 'htmlBuilding"', 'mobjsProgress');


		//memorize css
		this.css = localStorage.getItem('brainCss');
		showRes('JS', this.js, 'cssBuilding"', 'mobjsProgress');



		//memorize oop
		this.oop = localStorage.getItem('brainOop');
		showRes('JS', this.js, 'oopBuilding"', 'mobjsProgress');



		//memorize jq
		this.jq = localStorage.getItem('brainJq');
		showRes('JS', this.js, 'jqueryBuilding"', 'mobjsProgress');

});