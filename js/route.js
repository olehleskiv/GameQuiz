

///////////////////////////////////////////////
// Router functiob.
// Adding new page:
// 1- get the button or <a> tag that you want to route to some page
// 2- set is onclick action to router function
// 3- in the router function, add needed page to array
// --your link should have in it's href attribute the id of the block(page), 
//   that you want it to carry you to

//
///////////////////////////////////////////////
(function() {

	function router(){
		var link = $(this).attr('href');
		var page,
			addPage;

		link = link.slice(1, link.length);

		var pages = ['mainPage','gamePage','addNewQuestion'];

		for (var i = 0; i < pages.length; i++) {
			if(pages[i] == link) {
				var page = document.getElementById(pages[i]);
				page.style.display = 'block';
			} else {
				var page = document.getElementById(pages[i]);
				page.style.display = 'none';
			}
		}
	}

	//top menu
	var menu = document.getElementById('mainMenu').getElementsByTagName('a');
	for(var i = 0; i < menu.length; i++) {
		menu[i].onclick = router;
	}

	//start game button
	var playButton = document.getElementById('playButton');
	playButton.onclick = router;

	//to main page
	var playButton = document.getElementById('goHome');
	playButton.onclick = router;

})();