define(['jquery'
        , 'cont/saveQuizResults'
        , 'cont/battle'
        , 'cont/displayResults' 
        , 'views/mainHero'], 
    function($
        , saveQuizResults
        , battle
        , displayResults
        , mainDude
        , createQuiz) { 

function createQuiz(name, quizContainerId) {

    var quizURL = 'data/quiz.json';

    var JSONobject = $.getJSON(quizURL, function(data) {
        var subjectQuiz =  getQuizName(name, JSONobject["responseJSON"]);        //JSONobject["responseJSON"].js;
        var quiz = randomQuizQuestions(subjectQuiz);
        var currentquestion = 0
            , maxQuest = 15
            , score = 0
            , maxTime = 4500000
            , startTime = new Date();
        
        init();

    //////////////////////////////////////////////////////////
    //Function creates all dom elemebt for quiz and initiates it
    //////////////////////////////////////////////////////////
        function init() {
            if (typeof quiz !== "undefined") {
                
                var container = document.getElementById('frame')
                    ,pager = document.createElement('p')
                    ,questionTitle = document.createElement('h2')
                    ,variants = document.createElement('ul')
                    ,quizContainer = document.getElementById(quizContainerId);
                
                if (!container) {
                    var container = document.createElement('div');
                }
                container.innerHTML = '';

                container.setAttribute('id', 'frame');
                pager.setAttribute('id','pager');
                pager.innerHTML = 'Question 1 of ' + maxQuest;
                
                questionTitle.setAttribute('id','question');
                questionTitle.innerHTML = quiz[currentquestion].title;
                
                variants.setAttribute('id','choice-block');
                
                container.appendChild(pager);
                container.appendChild(questionTitle);
                container.appendChild(variants);

                quizContainer.appendChild(container);
                
                addQuestionVariants(quiz[currentquestion].variants);
                if (localStorage.getItem(name)) {
                    localStorage.removeItem(name);
                }

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
                if (subjectQuiz[i].active == true) {
                    randomQuestionsArray.push(subjectQuiz[i]);
                }
            }
            
            randomQuestionsArray.sort(compareRating);
    
            function compareRating(objectA, objectB) {
                return 0.5 - Math.random();
            }
            
            return randomQuestionsArray;
        }
    
    //////////////////////////////////////////////////////////
    //Function to check the score
    //////////////////////////////////////////////////////////
        function scoreCount() {
            $('.choice').on('click', function () {
                choice = $(this).attr('data-index');
                var choiceText = $(this).html()
                  , correctAns = quiz[currentquestion].correct
                  , correctText = quiz[currentquestion].variants[correctAns];
                
                $('.messageRight').css('display','none');
                $('.messageLeft').css('display','none');
                
                if (choice == correctAns) {
                    score++;
                } 

                saveQuizResults(name, currentquestion, choiceText, correctText, maxQuest);

                battle(name, choice, quiz, currentquestion);
                processQuestion();
            })
        }


    //////////////////////////////////////////////////////////
    //Function to count current questions
    //////////////////////////////////////////////////////////
        function processQuestion() {
            currentquestion++;
            if (currentquestion == maxQuest) {
                var res = Math.round(score / maxQuest * 100);
                displayResults(name, startTime, maxTime, maxQuest, score);
                this.mainDude.study(name, res);                     //inserting into progress bars
            } 
            else {
                nextQuestion();
            }
        }
    
    //////////////////////////////////////////////////////////
    //This function changes the title of question and makes //
    //a counter for randomQuestionsArray                    //
    //////////////////////////////////////////////////////////
        function nextQuestion() {
            var questionTitle = document.getElementById('question')
              , questionNumber = document.getElementById('pager');

                questionTitle.innerHTML = quiz[currentquestion].title;
                questionNumber.innerHTML = 'Question ' + (currentquestion + 1) + ' of ' + maxQuest;
                
                if (quiz[currentquestion].variants) {
                    addQuestionVariants(quiz[currentquestion].variants);
                }
                scoreCount();
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
                    if (variants[i]) {
                        var li = document.createElement('li');
                        li.className = 'choice choice-box';
                        li.setAttribute('data-index', i);
                        li.innerHTML = variants[i];
                        choiseBlock.appendChild(li);
                    }
                }
            }
        }


    });

}

return createQuiz;
});

