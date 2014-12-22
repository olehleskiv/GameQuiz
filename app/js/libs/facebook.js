


	$(document).ready(function(){
			$('#share_button').click(function(e){
				e.preventDefault();

				this.htmlpoints = localStorage.getItem('htmlPoints');

				FB.ui({
					method: 'feed',
					name: 'LearnFrontEnd',
					link: 'http://learnfrontend.tk',
					picture: 'http://learnfrontend.tk/img/badges/htmlBadgeMiddle.png',
					caption: 'LearnFrontEnd',
					description: 'I just got' + this.htmlpoints + 'points',
					message: ''
				});
			});
	});