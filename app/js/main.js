require.config({
    paths: {
        'jquery': 'libs/jquery'
    }
});

require([ 
	      'libs/libsMain',
	      'cont/contMain',
	      'models/modMain',
	      'views/viewMain',
	      ], 

	      function($, route, world, quiz_maker, addQuestion, mainHero) {
   
	return console.log('success');

});