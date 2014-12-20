
define(['views/mainHero','cont/showBadges'], function(mainHero, showBadges) {

	var confirmReset = document.getElementById('resetButton')
	confirmReset.onclick = function() {

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
				var bar = document.getElementById('htmlBuilding').firstChild.firstChild,
				mobres = document.getElementById('mobhtmlProgress');

				bar.innerHTML = mainDude.brain.html + "%";
				mobres.innerHTML = "HTML: " + mainDude.brain.jq + "%";
				bar.style.width = mainDude.brain.html + "%";

				//unset css3
				var bar = document.getElementById('cssBuilding').firstChild.firstChild,
				mobres = document.getElementById('mobcssProgress');

				bar.innerHTML = mainDude.brain.css + "%";
				mobres.innerHTML = "CSS: " + mainDude.brain.jq + "%";
				bar.style.width = mainDude.brain.css + "%";

				//unset js
				var bar = document.getElementById('javascriptBuilding').firstChild.firstChild,
				mobres = document.getElementById('mobjsProgress');

				bar.innerHTML = mainDude.brain.js + "%";
				mobres.innerHTML = "JavaScript: " + mainDude.brain.jq + "%";
				bar.style.width = mainDude.brain.js + "%";

				//unset jq
				var bar = document.getElementById('jqueryBuilding').firstChild.firstChild,
				mobres = document.getElementById('mobjqProgress');

				bar.innerHTML = mainDude.brain.jq + "%";
				mobres.innerHTML = "jQuery/Ajax: " + mainDude.brain.jq + "%";
				bar.style.width = mainDude.brain.jq + "%";
				
				//unset jq
				var bar = document.getElementById('oopBuilding').firstChild.firstChild,
				mobres = document.getElementById('moboopProgress');

				bar.innerHTML = mainDude.brain.oop + "%";
				mobres.innerHTML = "OOP: " + mainDude.brain.jq + "%";
				bar.style.width = mainDude.brain.oop + "%";
			}

		}

});