
define(['views/mainHero'], function(mainHero) {

	var confirmReset = document.getElementById('resetButton')
	confirmReset.onclick = function() {

		$('#resetConfirm').modal();

			var reset = document.getElementById('reset');
			reset.onclick = function() {

				localStorage.setItem('brainJs','0');
				localStorage.setItem('brainHtml','0')
				localStorage.setItem('brainCss','0')
				localStorage.setItem('brainOop','0')
				localStorage.setItem('brainJq','0')

				mainDude.brain.js = localStorage.getItem('brainJs');
				mainDude.brain.html = localStorage.getItem('brainHtml');
				mainDude.brain.css = localStorage.getItem('brainCss');
				mainDude.brain.oop = localStorage.getItem('brainOop');
				mainDude.brain.jq = localStorage.getItem('brainJq');

				//unset html
				var bar = document.getElementById('htmlProgress'),
				mobres = document.getElementById('mobhtmlProgress');

				bar.innerHTML = mainDude.brain.html + "%";
				mobres.innerHTML = "HTML: " + mainDude.brain.jq + "%";
				bar.style.width = mainDude.brain.html + "%";

				//unset css3
				bar = document.getElementById('cssProgress'),
				mobres = document.getElementById('mobcssProgress');

				bar.innerHTML = mainDude.brain.css + "%";
				mobres.innerHTML = "CSS: " + mainDude.brain.jq + "%";
				bar.style.width = mainDude.brain.css + "%";

				bar = document.getElementById('jsProgress'),
				mobres = document.getElementById('mobjsProgress');

				bar.innerHTML = mainDude.brain.js + "%";
				mobres.innerHTML = "JavaScript: " + mainDude.brain.jq + "%";
				bar.style.width = mainDude.brain.js + "%";

				bar = document.getElementById('jqProgress'),
				mobres = document.getElementById('mobjqProgress');

				bar.innerHTML = mainDude.brain.jq + "%";
				mobres.innerHTML = "jQuery/Ajax: " + mainDude.brain.jq + "%";
				bar.style.width = mainDude.brain.jq + "%";

				bar = document.getElementById('oopProgress'),
				mobres = document.getElementById('moboopProgress');

				bar.innerHTML = mainDude.brain.oop + "%";
				mobres.innerHTML = "OOP: " + mainDude.brain.jq + "%";
				bar.style.width = mainDude.brain.oop + "%";
			}
		}

});