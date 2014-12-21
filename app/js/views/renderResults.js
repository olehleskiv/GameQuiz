define(['jquery'], function($) { 
	
	function renderAwardsTable() {
		var container = document.getElementById('results');
		var awardTable = document.createElement('table');

		var quizArray = ['htmlBadge' , 'cssBadge' , 'jsBadge' , 'jqBadge' , 'oopBadge']; 
		var badges = ['Rookie', 'Middle', 'Master'];

		for (var i = 0; i < quizArray.length; i++) {
			for (var j = 0; j < badges.length; j++) {
				var div = document.createElement('div');
				div.setAttribute('id', quizArray[i] + badges[j]);
				div.className = 'no-badge';
				container.appendChild(div);
			}
			container.innerHTML += '<br>';
		}
	}

return renderAwardsTable;
});

