
define([], function() { 


	//this function insterts result of user tests (in %)
	//into the page, first in progress bars, then
	//into mobile results spans
	//it requires 
	//	- name - the hame of the discipline(shown on progress bars)
	//	- amout - tha amout of progress to add(in %)
	//	- id - id of the progress bar to instert
	//	- idMob - id the mobile result span


	function showRes(name, amount, id, idMob) {

		var bar = document.getElementById(id).firstChild.firstChild,
		mobres = document.getElementById(idMob);

		if(amount > 0) {
			bar.style.color = 'white';
		}
		bar.innerHTML = amount + "%";
		mobres.innerHTML = name + " " +  amount + " %";
		console.log('loh' + idMob)
		bar.style.width = amount + "%";
	}

	return showRes;
});