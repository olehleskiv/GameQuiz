define(['cont/renderUserResultsTable'], function($, renderUserResultsTable){

	function renderFirstTimeResults() {

		if (localStorage.getItem('js')) {
			renderUserResultsTable('js');
		} 
		if (localStorage.getItem('html')) {
			renderUserResultsTable('html');
		} 
		if (localStorage.getItem('css')) {
			renderUserResultsTable('css');
		} 
		if (localStorage.getItem('jq')) {
			renderUserResultsTable('jq');
		} 
		if (localStorage.getItem('oop')) {
			renderUserResultsTable('oop');
		}
	}

return renderFirstTimeResults;
});