define(['jquery'], function($) { 

	function showBadges(name, id) {

		var points = localStorage.getItem(name),
		block = document.getElementById(id);


		if(points < 2000) {
			block.children[1].setAttribute('class', 'resbadgeBad');
			block.children[2].setAttribute('class', 'resbadgeBad');
			block.children[3].setAttribute('class', 'resbadgeBad');
		}

		if(points >= 2000 && points <= 5000) {
			block.children[1].setAttribute('class', 'resbadgeGood');
			block.children[2].setAttribute('class', 'resbadgeBad');
			block.children[3].setAttribute('class', 'resbadgeBad');
		} 

		if(points >= 5000 && points <= 7000) {
			block.children[1].setAttribute('class', 'resbadgeGood');
			block.children[2].setAttribute('class', 'resbadgeGood');
			block.children[3].setAttribute('class', 'resbadgeBad');
		}

		if(points >= 7000 && points <= 11000) {
			block.children[1].setAttribute('class', 'resbadgeGood');
			block.children[2].setAttribute('class', 'resbadgeGood');
			block.children[3].setAttribute('class', 'resbadgeGood');
		}
	}
	return showBadges;
});