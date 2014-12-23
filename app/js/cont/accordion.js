define(['jquery'], function($){

(function($) { 
			var defaults = { 
				openSymb : '\\25bc',
				closeSymb :'\\25ba',
				event: 'click'
			};

			$.fn.accordion = function(params){
				var options = $.extend({}, defaults, params);
				var thisClass = $(this).attr("class");
				var thisClassSpecial = $(this).attr("class") + 'special';
				var headerClosed = '<style>.' + thisClass + ':before{content:' + '\'' + options.closeSymb + '\''+ ';}</style>';
				var headerOpen = '<style>.' + thisClassSpecial + ':before{content:' + '\'' + options.openSymb + '\''+ ';}</style>';			
				$('head').append(headerClosed);
				$('head').append(headerOpen);

				switch (options.event) {
					case 'click':
						$(this).click(function(event){
							$(this).next().toggle(200);
							$(this).toggleClass(thisClassSpecial);
						});
					break;
					case 'hover':
						$(this).hover(function(){
							$(this).next().toggle(200);
							$(this).toggleClass(thisClassSpecial);
						});
					break;
				}
		 		return this;
			};
		})(jQuery);

		$('.table-header').accordion({event: 'click'});

});