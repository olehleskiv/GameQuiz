
define([], function(enterBuilding) { 

	function zIndexCheck(position) {		//Z-index controll, visibility of
											//main caracter in front and behind
											//of the buildings
		var index;
		if(position > 250) {
			index =  1;
		} else if(position < 250){
			index = 0;
		}
		if(position > 400) {
			index = 2;
		} else if(position < 400 && position > 330){
			index = 1;
		}
		if(position > 500) {
			index = 3;
		} else if(position < 500 && position > 400){
			index = 2;
		}
		return index;
	};

	return zIndexCheck;
});