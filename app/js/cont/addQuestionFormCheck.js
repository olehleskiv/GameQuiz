define(['jquery'], function($, confirmStartQuiz) { 

	$(".input-group input:radio").attr('disabled',true);

	$( ".variant1 input:text" ).change(function() {
		if(!!this.value) {
			$(".variant1 input:radio").attr('disabled',false);
		} else {
	  		$(".variant1 input:radio").attr('disabled',true);
		}
	});

	$( ".variant2 input:text" ).change(function() {
	  	if(!!this.value){
			$(".variant2 input:radio").attr('disabled',false);
		} else {
	  		$(".variant2 input:radio").attr('disabled',true);
		}
	});

	$( ".variant3 input:text" ).change(function() {
	  	if(!!this.value){
			$(".variant3 input:radio").attr('disabled',false);
		} else {
	  		$(".variant3 input:radio").attr('disabled',true);
		}
	});

	$( ".variant4 input:text" ).change(function() {
	  	if(!!this.value){
			$(".variant4 input:radio").attr('disabled',false);
		} else {
	  		$(".variant4 input:radio").attr('disabled',true);
		}
	});

	$( ".variant5 input:text" ).change(function() {
	  	if(!!this.value){
			$(".variant5 input:radio").attr('disabled',false);
		} else {
	  		$(".variant5 input:radio").attr('disabled',true);
		}
	});
	
});