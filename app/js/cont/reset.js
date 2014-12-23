
define(['views/mainHero',
		'cont/showBadges',
		'cont/renderUserResultsTable'], function(mainHero, 
												showBadges,
												renderUserResultsTable) {

	function reset() {

		$('#resetConfirm').modal();

			var reset = document.getElementById('reset');
			reset.onclick = function() {

				//remove score
				localStorage.setItem('brainJs','0');
				localStorage.setItem('brainHtml','0');
				localStorage.setItem('brainCss','0');
				localStorage.setItem('brainOop','0');
				localStorage.setItem('brainJq','0');

				//remove points
				localStorage.setItem('jsPoints',0);
				localStorage.setItem('htmlPoints',0);
				localStorage.setItem('cssPoints',0);
				localStorage.setItem('oopPoints',0);
				localStorage.setItem('jqPoints',0);
				
				//remove badges
				showBadges('htmlPoints','htmlBadge');
				showBadges('cssPoints','cssBadge');
				showBadges('jsPoints','jsBadge');
				showBadges('jqPoints','jqBadge');
				showBadges('oopPoints','oopBadge');


				//remove tables from local storadge
				localStorage.removeItem('html');
				localStorage.removeItem('js');
				localStorage.removeItem('css');
				localStorage.removeItem('jq');
				localStorage.removeItem('oop');


				//remove tables
				var htmlTable = document.getElementById('html-results');
				htmlTable.innerHTML = '';
				var cssTable = document.getElementById('css-results');
				cssTable.innerHTML = '';
				var jsTable = document.getElementById('js-results');
				jsTable.innerHTML = '';
				var jqTable = document.getElementById('jq-results');
				jqTable.innerHTML = '';
				var oopTable = document.getElementById('oop-results');
				oopTable.innerHTML = '';

				//remove badges
				$('.noBadgeImg').attr('src','img/badges/no-badge.png');

				//set braon to 0
				mainDude.brain.js = localStorage.getItem('brainJs');
				mainDude.brain.html = localStorage.getItem('brainHtml');
				mainDude.brain.css = localStorage.getItem('brainCss');
				mainDude.brain.oop = localStorage.getItem('brainOop');
				mainDude.brain.jq = localStorage.getItem('brainJq');

				//unset html
				var bar = document.getElementById('htmlBuilding').firstChild.firstChild;

				bar.innerHTML = mainDude.brain.html + "%";
				bar.style.width = mainDude.brain.html + "%";

				//unset css3
				var bar = document.getElementById('cssBuilding').firstChild.firstChild;

				bar.innerHTML = mainDude.brain.css + "%";
				bar.style.width = mainDude.brain.css + "%";

				//unset js
				var bar = document.getElementById('javascriptBuilding').firstChild.firstChild;

				bar.innerHTML = mainDude.brain.js + "%";
				bar.style.width = mainDude.brain.js + "%";

				//unset jq
				var bar = document.getElementById('jqueryBuilding').firstChild.firstChild;

				bar.innerHTML = mainDude.brain.jq + "%";
				bar.style.width = mainDude.brain.jq + "%";
				
				//unset jq
				var bar = document.getElementById('oopBuilding').firstChild.firstChild;

				bar.innerHTML = mainDude.brain.oop + "%";
				bar.style.width = mainDude.brain.oop + "%";
			}


			renderUserResultsTable();
		}

	var confirmReset = document.getElementById('resetButton');
	
	var mobConfirmReset = document.getElementById('mobResetButton');

	confirmReset.onclick = reset;
	mobConfirmReset.onclick = reset;

});