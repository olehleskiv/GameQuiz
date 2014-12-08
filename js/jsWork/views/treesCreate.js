
define(['models/Tree'], function(Tree) { 

	function tree1(x, y) {

		this.background = './img/world/tree.png';
		if(arguments[0]) {
			this.x = x;
		}
		if(arguments[1]) {
			this.y = y;
		}

	}
	tree1.prototype = new Tree();

	function tree2(x, y) {

		this.background = './img/world/tree1.png';
		if(arguments[0]) {
			this.x = x;
		}
		if(arguments[1]) {
			this.y = y;
		}

	}
	tree2.prototype = new Tree();

	function tree3(x, y) {

		this.background = './img/world/tree2.png';
		if(arguments[0]) {
			this.x = x;
		}
		if(arguments[1]) {
			this.y = y;
		}

	}
	tree3.prototype = new Tree();

	var tree1 = new tree1();
	var tree2 = new tree2();
	var tree3 = new tree3();

	tree1.draw(100, 50, 4);
	tree3.draw(-325, 230, 0);
	tree3.draw(115, 250, 4);
	tree2.draw(100, 400, 4);
	tree2.draw(-150, 250, 1);
	tree1.draw(85, 700, 4);
	tree1.draw(-125, 770, 1);
	tree1.draw(-370, 820, 0);
	tree2.draw(110, 950, 4);

});