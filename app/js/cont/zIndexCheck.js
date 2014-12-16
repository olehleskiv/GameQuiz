
define([], function(enterBuilding) { 

	function zIndexCheck(position) {		//Z-index controll, visibility of
											//main caracter in front and behind
											//of the buildings
		var index;
		if(position > 250 && position < 400) {
			index =  2;
			console.log("index1")
		} else if(position < 250){
			index = 1;
			console.log("index0")
		}
		else if(position > 400 && position < 500) {
			index = 3;
			console.log("index2")
		} else if(position < 400 && position > 330){
			index = 2;
			console.log("index1")
		}
		else if(position > 500) {
			index = 4;
			console.log("index3")
		} else if(position < 500 && position > 400){
			index = 3;
			console.log("index2")
		}
		return index;
	};

	return zIndexCheck;
});