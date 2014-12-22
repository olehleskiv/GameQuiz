define(['jquery'], function($) { 
	
	function renderAwardsTable() {
		var container = document.getElementById('results');

		var quizArray = ['htmlBadge' , 'cssBadge' , 'jsBadge' , 'jqBadge' , 'oopBadge']; 
		var badges = ['Rookie', 'Middle', 'Master'];
		var quizNamesArray = ['HTML', 'CSS', 'JS', 'JQuery', 'OOP'];

		for (var i = 0; i < quizArray.length; i++) {
			var quizNameDiv = document.createElement('div');
				quizNameDiv.innerHTML = quizNamesArray[i] + ' achievements';
				quizNameDiv.className = 'result-names';
				container.appendChild(quizNameDiv);
			for (var j = 0; j < badges.length; j++) {
				var div = document.createElement('div');
				var noBadgeImg = document.createElement('img');
				noBadgeImg.setAttribute('id', 'noBadgeImg');
				noBadgeImg.setAttribute('src', 'img/badges/no-badge.png');

				div.setAttribute('id', quizArray[i] + badges[j]);
				div.className = 'no-badge';
				//div.innerText = badges[j];
				div.appendChild(noBadgeImg);
				container.appendChild(div);
			}
			container.innerHTML += '<br>';
		}
	}

return renderAwardsTable;
});

