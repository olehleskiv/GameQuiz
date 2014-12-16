define(['jquery','views/mainHero'], function($, mainDude, createQuiz ) { 

function createQuiz(name, quizContainerId) {

    

    var quizURL = 'data/quiz.json';

    var JSONobject = $.getJSON(quizURL, function(data) {
        var subjectQuiz =  getQuizName(name, JSONobject["responseJSON"]);        //JSONobject["responseJSON"].js;
        var quiz = randomQuizQuestions(subjectQuiz);
        var currentquestion = 0,
            maxQuest = 25;
            score = 0;

        init();
    
    
    //////////////////////////////////////////////////////////
    //Function creates all dom elemebt for quiz and initiates it
    //////////////////////////////////////////////////////////
        function init() {
            if (typeof quiz !== "undefined") {
                //var id = 'js' + 'Quiz';
                var container = document.getElementById('frame'),
                    pager = document.createElement('p'),
                    questionTitle = document.createElement('h2'),
                    variants = document.createElement('ul'),
                    quizContainer = document.getElementById(quizContainerId);
                
                if (!container) {
                    var container = document.createElement('div');
                }
                container.innerHTML = '';

                container.setAttribute('id', 'frame');
                pager.setAttribute('id','pager');
                pager.innerHTML = 'Question 1 of ' + maxQuest;
                
                questionTitle.setAttribute('id','question');
                questionTitle.innerHTML = quiz[0].title;
                
                variants.setAttribute('id','choice-block');
                
                container.appendChild(pager);
                container.appendChild(questionTitle);
                container.appendChild(variants);

                quizContainer.appendChild(container);
    
                addQuestionVariants(quiz[0].variants);
                scoreCount();
            }
        }


    ////////////////////////////////////////////////////////
    //This function defines appropriate name of the quiz  //
    //from the JSON object                                //
    ////////////////////////////////////////////////////////
    function getQuizName(name, object) {
        var quizName = '';
        switch(name) {
            case 'html':
            quizName = object.html;
            break;
            case 'css':
            quizName = object.css;
            break;
            case 'js':
            quizName = object.js;
            break;
            case 'oop':
            quizName = object.oop;
            break;
            case 'jq':
            quizName = object.jq;
            break;
        }
        return quizName;
    }


    ////////////////////////////////////////////////////////
    //This function gets the object from JSON and shuffles//
    //it in random order                                  //
    ////////////////////////////////////////////////////////
        function randomQuizQuestions(subjectQuiz) {
            var randomQuestionsArray = new Array();
            for (i in subjectQuiz) {
                randomQuestionsArray.push(subjectQuiz[i]);
            }
            randomQuestionsArray.sort(compareRating);
    
            function compareRating(objectA, objectB) {
                return 0.5 - Math.random();
            }
            
            return randomQuestionsArray;
        }
    
    
    //////////////////////////////////////////////////////////
    //This function gets variants of answers from the object//
    //and creates the choise block                          //
    //////////////////////////////////////////////////////////
        function addQuestionVariants(variants) {
             if (typeof variants != '') {
                var choiseBlock = document.getElementById('choice-block');
                 choiseBlock.innerHTML = '';
                 for (var i = 0; i < variants.length; i++) {
                    var li = document.createElement('li');
                    li.className = 'choice choice-box';
                    li.setAttribute('data-index', i);
                    li.innerHTML = variants[i];
                    choiseBlock.appendChild(li);
                 }
             }
         }
    

    //////////////////////////////////////////////////////////
    //This function changes the title of question and makes //
    //a counter for randomQuestionsArray                    //
    //////////////////////////////////////////////////////////
        function nextQuestion() {
            var questionTitle = document.getElementById('question');
            if (quiz[currentquestion].active == true) {
                    questionTitle.innerHTML = quiz[currentquestion].title;
                }
            var questionNumber = document.getElementById('pager');
                questionNumber.innerHTML = 'Question ' + (currentquestion + 1) + ' of ' + maxQuest;
            
            addQuestionVariants(quiz[currentquestion].variants);
            scoreCount();

         }
    
    
    //////////////////////////////////////////////////////////
    //Function to count current questions
    //////////////////////////////////////////////////////////
        function processQuestion() {
            currentquestion++;
            if (currentquestion == maxQuest) {
                endQuiz();
            } 
            else {
                nextQuestion();
            }
        }
    
    
    //////////////////////////////////////////////////////////
    //Function to count and show the results of quiz
    //and to instert the result into the game page progress bar
    //////////////////////////////////////////////////////////

         function endQuiz() {
            var questionTitle = document.getElementById('question');
                questionTitle.innerHTML = 'You got ' + score + ' out of ' + maxQuest + ' correct.';
            var choiseBlock = document.getElementById('choice-block');
                choiseBlock.innerHTML = '';
    
            var result = document.createElement('h2');
                result.className = 'result';
            var res = Math.round(score / maxQuest * 100);
                result.innerHTML = res + '%';                
                questionTitle.appendChild(result);

                this.mainDude.study(name, res);
         }
    
    
    //////////////////////////////////////////////////////////
    //Function to check the score
    //////////////////////////////////////////////////////////
        function scoreCount() {
            $('.choice').on('click', function () {
                 choice = $(this).attr('data-index');
            //     $(this).css({
            //         'border-color': '#222',
            //         'font-weight': 700,
            //         'background-color': '#c1c1c1'
            //     });

                console.log(choice, '  ',  quiz[currentquestion].correct);

                if (choice == quiz[currentquestion].correct) {
                    score++;
                } 
    
                processQuestion();
            })
        }
    

    });
}

return createQuiz;
});

