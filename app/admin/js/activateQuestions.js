var quizURL = '../../data/quiz.json';

    var JSONObject = $.getJSON(quizURL, function(data) {
        var quizArray = [];
        var quizNames = ['JavaScript', 'OOP', 'CSS', 'HTML', 'JQuery'];

        for (i in data) {
            quizArray.push(data[i]);
        }

        createAllTables();

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
                '<td><%= i %></td>'+
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
                '<% if (themeQuiz.active == false) { %>'+
                    '<td class="uncheked"><input type="checkbox" name="<%= i %>"/></td>'+
                    '<% } else { %>'+
                    '<td><input type="checkbox" checked name="'+ name + '_' + '<%= i %>" class="active"/></td>'+
                    '<% } %>'+
             '</tr>'+
        '<% } %>';

        var form = document.getElementById('quiz-form'),
		    table = document.createElement('table'),
            compiledTemplate = _.template(tableTemplate),
            readyHtml = compiledTemplate({ object : objectArray }),
            header = document.createElement('h1');
            header.innerHTML = name + ' quiz';

		table.className = 'table';
		table.setAttribute('id', name);
        table.className = 'responstable';
        table.innerHTML = readyHtml;

        form.appendChild(header);
		form.appendChild(table);
	}
});


$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});


