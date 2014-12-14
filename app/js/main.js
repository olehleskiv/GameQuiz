

require([ 'libs/libsMain',
	      'cont/contMain',
	      'class/modMain',
	      'views/viewMain',
	      ], function($, route, world, quiz_maker, addQuestion, mainHero) {

   	window.body.onblur  = function() {
	  return "Данные не сохранены. Точно перейти?";
	};

	return console.log('requre js success');

	


});