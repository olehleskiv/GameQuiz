
define(['class/Tree'], function(Tree) { 

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

	tree1.draw(540, 50, 5);
	tree3.draw(325, 230, 3);
	tree3.draw(555, 250, 5);
	tree2.draw(540, 400, 5);
	tree2.draw(150, 250, 2);
	tree1.draw(525, 700, 5);
	tree1.draw(125, 770, 2);
	tree1.draw(370, 820, 3);
	tree2.draw(550, 950, 5);

});