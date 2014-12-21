
define(['views/mainHero','cont/showBadges'], function(mainHero, showBadges) {

	function reset() {

		$('#resetConfirm').modal();

			var reset = document.getElementById('reset');
			reset.onclick = function() {

				localStorage.setItem('brainJs','0');
				localStorage.setItem('brainHtml','0');
				localStorage.setItem('brainCss','0');
				localStorage.setItem('brainOop','0');
				localStorage.setItem('brainJq','0');

				localStorage.setItem('jsPoints',0);
				localStorage.setItem('htmlPoints',0);
				localStorage.setItem('cssPoints',0);
				localStorage.setItem('oopPoints',0);
				localStorage.setItem('jqPoints',0);
				
				showBadges('htmlPoints','htmlBadge');
				showBadges('cssPoints','cssBadge');
				showBadges('jsPoints','jsBadge');
				showBadges('jqPoints','jqBadge');
				showBadges('oopPoints','oopBadge');

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

		}

	var confirmReset = document.getElementById('resetButton');
	var mobConfirmReset = document.getElementById('mobResetButton');

	confirmReset.onclick = reset;
	mobConfirmReset.onclick = reset;

});