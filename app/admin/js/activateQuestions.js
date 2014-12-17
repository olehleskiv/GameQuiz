var quizURL = '../../data/quiz.json';


    var JSONObject = $.getJSON(quizURL, function(data) {
        var quizArray = [];
        var quizNames = ['JavaScript', 'OOP', 'CSS', 'HTML', 'JQuery'];

        for (i in data) {
            quizArray.push(data[i]);
        }
        console.log(quizArray);
        console.log(data);



        function createAllTables() {
            for (var i = 0; i < quizArray.length; i++ ) {
                renderTable(quizArray[i], quizNames[i]);
            }
            
        }

	function renderTable(objectQuizArray, quizName) {
        var name = quizName,
            objectArray = objectQuizArray;

        var tableTemplate = '<thead>'+
            '<tr>'+
                '<th>ID</th>'+
                '<th>Question</th>'+
                '<th>Variants</th>'+
                '<th>Corect</th>'+
                '<th>Status</th>'+
                '<th>Activate</th>'+
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
        var header = document.createElement('h1');
            header.innerHTML = name + ' quiz';

		table.className = 'table';
		//table.setAttribute('id', 'quiz-table');
        table.className = 'responstable';
        table.innerHTML = readyHtml;

        document.body.appendChild(header);
		document.body.appendChild(table);
	}

    createAllTables();
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
