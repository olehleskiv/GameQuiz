

define([], function() { 

	function Tree() {
		this.class = 'tree';
		this.background = '../img/world/tree.png';
	}

	Tree.prototype.draw = function(x, y, ind) {
		var block = document.getElementById('gamePage');
		this.tree = document.createElement('div');
		this.tree.setAttribute("class",this.class);

		this.tree.style.position = "absolute";
		this.tree.style.background = 'url(' + this.background + ')';
		this.tree.style.zIndex = ind;
		this.tree.style.marginTop = x + "px";
		this.tree.style.marginLeft= y + "px";


		block.appendChild(this.tree);
	};

	return Tree;
});


