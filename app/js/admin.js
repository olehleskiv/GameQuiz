var quizURL = '../data/quiz.json';


    var JSONObject = $.getJSON(quizURL, function(data) {
        // var quizArray = [];

        // for (i in data) {
        //     quizArray.push(data[i]);
        // }
        // console.log(quizArray[1][0]);
        // console.log(quizArray.length);


    	data = JSONObject["responseJSON"].js;
    	var objectArray = new Array();

		for (i in data) {
			objectArray.push(data[i]);
		}

        function createAllTables() {
            for (var i = 0; i < quizArray.length; i++ ) {
                    renderTable(quizArray[i]);
            }
            
        }

	function renderTable(objectQuizArray) {

        var tableTemplate = '<thead>'+
            '<tr>'+
                '<td>ID</td>'+
                '<td>Question</td>'+
                '<td>Variants</td>'+
                '<td>Corect</td>'+
                '<td>Status</td>'+
                '<td>Activate</td>'+
            '</tr>'+
        '</thead>'+

        '<% for (var i = 0; i < object.length; i++) { %>'+
            '<% var themeQuiz = object[i]; %>'+
            '<tr>'+
                '<td><%= themeQuiz.ID %></td>'+
                '<td><%= themeQuiz.title %></td>'+
                '<td>'+
                    '<ol type="1" start="0">'+
                        '<li><%= themeQuiz.variants[0] %></li>'+
                        '<li><%= themeQuiz.variants[1] %></li>'+
                        '<li><%= themeQuiz.variants[2] %></li>'+
                        '<li><%= themeQuiz.variants[3] %></li>'+
                        '<li><%= themeQuiz.variants[4] %></li>'+
                    '</ol>'+
                '</td>'+
                '<td><%= themeQuiz.correct %></td>'+
                '<td><%= themeQuiz.active %></td>'+
                '<td><input type="checkbox" class="active rounded"/></td>'+
             '</tr>'+
        '<% } %>';

		var table = document.createElement('table'),
            compiledTemplate = _.template(tableTemplate),
            readyHtml = compiledTemplate({ object : objectArray }); 

		table.className = 'table';
		//table.setAttribute('id', 'quiz-table');
        table.className = 'responstable';
        table.innerHTML = readyHtml;

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
