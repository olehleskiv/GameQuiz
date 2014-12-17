var quizURL = '../quiz.json';

    var JSONObject = $.getJSON(quizURL, function(data) {
    	var data = JSONObject["responseJSON"].js;
    	var objectArray = new Array();

		for (i in data) {
			objectArray.push(data[i]);
		}

	function renderTable() {
		var tableTemplate = document.getElementById('table-data').innerHTML;
		var table = document.createElement('table');
		table.className = 'table';
		table.setAttribute('id', 'quiz-table');
		table.innerHTML = _.template(tableTemplate,{object:objectArray});
		document.body.appendChild(table);
	}

	renderTable();
});


    var saveButton = document.getElementById('save');

    saveButton.addEventListener("click", function(){ 
    	console.log('click');
    	var check = $("#quiz-table .active:checked");
    	console.log(check);
    });



     function GetAllChecked() {
             var chkedshid = new Array();
             var rows = new Array();
             var table = document.getElementById("quiz-table");
             console.log(table);
             rows = table.getElementsByTagName("tr");
             trcount = rows.length;

                  var totlchk = new Array();    
             for (var i = 0; i < rows.length; i++) {
                 trid = rows[i].id;


                 if (inputList = document.getElementById(trid).getElementsByTagName("input")) {
                     for (var n = 0; n < inputList.length; n++) {
                         if (inputList[n].type == "checkbox") {
                             if (inputList[n].checked == true) {
                                 chkedshid[n] = inputList[n].id;
                             }
                         }
                     }
                     totlchk = totlchk.concat(chkedshid.join());
                     console.log(totlchk);
                 }

             }
        
             // document.getElementById('myHiddenfield').value = totlchk.join();
             // document.getElementById("BtnSav2Cart").click();
         }
