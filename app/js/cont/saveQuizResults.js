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

        if (currentquestion == maxQuest-1) {
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
    
   setQuizName (name, 'js');
   setQuizName (name, 'html');
   setQuizName (name, 'css');
   setQuizName (name, 'jq');
   setQuizName (name, 'oop');
   
  }

return saveQuizResults;
});