    $.getJSON('js/js.json', function(data) {
            for (var i = 0;i < data.users.length; i++) {
                $('#title').append('<tr><td>' + data.js[i].title + '</td><td>'); 
                //+ data.users[i].name + '</td><td>' + data.users[i].age + '</td><tr>');
            }
    });


  //.success(function() { alert("Успешное выполнение"); })
 // .error(function() { alert("Ошибка выполнения"); })
 // .complete(function() { alert("Завершение выполнения"); });