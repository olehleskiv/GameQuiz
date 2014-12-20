require.config({
	deps: ['main'],
    baseUrl: 'js/',
});


require(['libs/jquery',
		 'libs/libsMain',
	     'cont/contMain',
	     'class/modMain',
	     'views/viewMain',
	      ], function($, router, world, quiz_maker, addQuestion, mainHero) {

	return console.log('requrejs BUILD!');
});