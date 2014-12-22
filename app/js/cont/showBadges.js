define(['jquery'], function($) { 

	function showBadges(name, id) {

		var points = parseInt(localStorage.getItem(name))
		  , block = document.getElementById(id);

		if(points < 2000 || !points) {
			block.children[1].setAttribute('class', 'resbadgeBad');
			block.children[2].setAttribute('class', 'resbadgeBad');
			block.children[3].setAttribute('class', 'resbadgeBad');
		}

		if (points >= 2000) {
			var level = 'Rookie';
			showAwards(level, id);
			block.children[1].setAttribute('class', 'resbadgeGood');
			block.children[2].setAttribute('class', 'resbadgeBad');
			block.children[3].setAttribute('class', 'resbadgeBad'); 
		} 

		if (points >= 5000) {
			var level = 'Middle';
			showAwards(level, id);
			block.children[1].setAttribute('class', 'resbadgeGood');
			block.children[2].setAttribute('class', 'resbadgeGood');
			block.children[3].setAttribute('class', 'resbadgeBad');
		}

		if (points >= 7000) {
			var level = 'Master';
			showAwards(level, id);
			block.children[1].setAttribute('class', 'resbadgeGood');
			block.children[2].setAttribute('class', 'resbadgeGood');
			block.children[3].setAttribute('class', 'resbadgeGood');
		}

		function showAwards(level, id) {
				var awardName = id + level 
				  , award = document.getElementById(awardName)
				  , levelName = document.createElement('span')
				  , noBadgeImg = award.firstChild;
				
				noBadgeImg.setAttribute('src', 'img/badges/' + awardName + '.png');
				// levelName.innerText = level + ' Level'; 
				// award.appendChild(levelName);
		}
	}

			showBadges('htmlPoints','htmlBadge');
			showBadges('cssPoints','cssBadge');
			showBadges('jsPoints','jsBadge');
			showBadges('jqPoints','jqBadge');
			showBadges('oopPoints','oopBadge');

	return showBadges;
});