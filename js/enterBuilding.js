
define(['confirmStartQuiz'], function(confirmStartQuiz) {


	function enterBuilding(id) {
		var dudePos = $(id).offset();

		var htmlBuildingPos = $("#htmlBuilding").offset();
		var cssBuildingPos = $("#cssBuilding").offset();
		var jsBuildingPos = $("#javascriptBuilding").offset();
		var jqBuildingPos = $("#jqueryBuilding").offset();
		var oopBuildingPos = $("#oopBuilding").offset();

		if(dudePos.top > htmlBuildingPos.top + 100 && dudePos.left < htmlBuildingPos.left + 250 &&
			dudePos.top < htmlBuildingPos.top + 150) {

				confirmStartQuiz('html');

			}
		if(dudePos.top > cssBuildingPos.top + 100 && dudePos.left > cssBuildingPos.left &&
			dudePos.top < cssBuildingPos.top + 150) {

				confirmStartQuiz('css');

			}
		if(dudePos.top > jsBuildingPos.top + 100 && dudePos.left > jsBuildingPos.left &&
			dudePos.left < jsBuildingPos.left + 150 &&
			dudePos.top < jsBuildingPos.top + 280) {

				confirmStartQuiz('js');
				
			}
		if(dudePos.top > oopBuildingPos.top + 140 && dudePos.left < oopBuildingPos.left + 250 &&
			dudePos.top < oopBuildingPos.top + 190) {

				confirmStartQuiz('oop');
				
			}
		if(dudePos.top > jqBuildingPos.top + 80 && dudePos.left > jqBuildingPos.left &&
			dudePos.top < jqBuildingPos.top + 130) {

				confirmStartQuiz('jq');
		
			}
	}

	return enterBuilding;
});