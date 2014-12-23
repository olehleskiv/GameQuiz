define(['jquery'], function($) { 

/////////////////////////////////////////////////////////////////////////////
function saveQuizResults(name, currentquestion, choice, correct, maxQuest){
   var title = document.getElementById('question');
   var object = '\"' + currentquestion + '\"' + ':' +
        '{' +
            '\"' + 'questionTitle' + '\"' + ':' + '\"' + title.innerHTML + '\"' + ',' +
            '\"' + 'userAnswer' + '\"' + ':' + '\"' + choice + '\"' + ',' +
            '\"' + 'correctAnswer' + '\"' + ':' + '\"' + correct + '\"' +
        '}';

        if (currentquestion == maxQuest - 1) {
            var question =  object; 
        } else {
            var question =  object + ',';
        }
   
    function setQuizName (name, currName){ 
        if (name == currName){
             if (localStorage.getItem(currName)) {
                var currentResult = localStorage.getItem(currName);
                localStorage.setItem(currName,currentResult + question);
            } else {
                localStorage.setItem(currName, question);
            }
        }
   }

    if(name == 'html') {
      setQuizName (name, 'html');
    }
    if(name == 'js') {
      setQuizName (name, 'js');
    }
    if(name == 'css') {
       setQuizName (name, 'css');
    }
    if(name == 'jq') {
        setQuizName (name, 'jq');
    }
    if(name == 'oop') {
       setQuizName (name, 'oop');
    }
  
   
   
  }

return saveQuizResults;
});