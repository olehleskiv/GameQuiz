define(['jquery'], function($) { 

	function showBadges(name, id) {


		var points = parseInt(localStorage.getItem(name)),
		block = document.getElementById(id);


		if(points < 2000 || !points) {
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

			showBadges('htmlPoints','htmlBadge');
			showBadges('cssPoints','cssBadge');
			showBadges('jsPoints','jsBadge');
			showBadges('jqPoints','jqBadge');
			showBadges('oopPoints','oopBadge');

	return showBadges;
});