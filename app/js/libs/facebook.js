define(['jquery'], function($) { 

			$('#share_button').click(function(e){
				e.preventDefault();

				FB.ui({
					method: 'feed',
					name: 'LearnFrontEnd',
					link: 'http://learnfrontend.tk',
					picture: 'http://learnfrontend.tk/img/badges/jqBadgeMaster.png',
					caption: 'Learn FrontEnd Quiz!',

					description: 'I just passed Front End quiz!, my results:\n' + 
					'HTML ' + localStorage.getItem('htmlPoints') + ' points\n' + 
					'CSS: ' + localStorage.getItem('cssPoints') + ' points\n' +
					'JavaScript: ' + localStorage.getItem('jsPoints') + ' points\n' + 
					'Jquery: ' + localStorage.getItem('jqPoints') + ' points\n' +
					'OOP: ' + localStorage.getItem('jqPoints') + ' points',


					message: 'Try it your self!'
				});
			});

});