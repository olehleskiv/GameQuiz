define(['jquery', 'underscore'], function($, _ ) { 

/////////////////////////////////////////////////////////////////////////
    function renderUserResultsTable(name) {
        var localAnswers = '{' + localStorage.getItem(name) + '}';
        var localObject = JSON.parse(localAnswers);
        console.log(localObject);

        var tableTemplate = '<tbody>'+
            '<tr>'+
                '<th>ID</th>'+
                '<th>Question</th>'+
                '<th>Your Answer</th>'+
                '<th>Corect Answer</th>'+
            '</tr>'+

        '<% for (var i in object) { %>'+
            '<% var question = object[i]; %>'+
   
            '<tr>'+
                '<td><%= i %></td>'+
                '<td><%= question.questionTitle %></td>'+
                '<td><%= question.userAnswer %></td>'+
                '<td><%= question.correctAnswer %></td>'+
            '</tr>'+
        '<% } %>' +
        '</tbody>';

        var table = document.getElementById(name + '-results')
            , compiledTemplate = _.template(tableTemplate)
            , readyHtml = compiledTemplate({ object : localObject });

        table.innerHTML = '';

    //Huck for IE9 to append content into table
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = '<table>' + readyHtml + '</table>';
        table.appendChild(tempDiv.firstChild.firstChild);

    }


///////////////////////////////////////////////////////////////////////

return renderUserResultsTable;
});