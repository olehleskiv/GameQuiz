define(['jquery', 'views/mainHero', 'cont/route', 'cont/quiz', 'cont/renderUserResultsTable'], 
    function($, mainDude, router, createQuiz, renderUserResultsTable) { 
    
    //////////////////////////////////////////////////////////
    //Function to count and show the results of quiz
    //and to instert the result into the game page progress bar
    //////////////////////////////////////////////////////////

        function displayResults(name,startTime, maxTime, maxQuest, score) {
            var endTime = new Date()
                , answersTime = endTime - startTime
                , pointsTime = maxTime - answersTime
                , playerPoints = Math.round((pointsTime * score) / 10000); 

            var questionTitle = document.getElementById('question')
                , choiseBlock = document.getElementById('choice-block')
                , result = document.createElement('h2')
                , points = document.createElement('p')
                , backToWorldButton = document.createElement('a')
                , backToResults = document.createElement('a')
                , res = Math.round(score / maxQuest * 100);
                
            questionTitle.innerHTML = 'You got ' + score + ' out of ' + maxQuest + ' correct.';
            choiseBlock.innerHTML = '';
            result.className = 'result';
            result.innerHTML = res + '%';

            if (answersTime > maxTime) {
                playerPoints = 0;
            }

            points.className = 'result';
            points.innerHTML = 'You got ' + playerPoints + ' points';
                
            backToWorldButton.setAttribute('href', '#gamePage');
            backToWorldButton.innerHTML = 'Go back to map';
            backToWorldButton.className = 'go-to-map-button';
            
            backToWorldButton.addEventListener("click", function(){
                renderUserResultsTable(name, maxQuest);
                router('#gamePage');
            });

            backToResults.setAttribute('href', '#results');
            backToResults.innerHTML = 'Go to results';
            backToResults.className = 'go-to-map-button';

            backToResults.addEventListener("click", function(){
                renderUserResultsTable(name, maxQuest);
                router('#results');
            });


            questionTitle.appendChild(result);
            questionTitle.appendChild(points);
            questionTitle.appendChild(backToWorldButton);
            questionTitle.appendChild(backToResults);

            setPointsToLocalStorage();
            

    ////////////////////////////////////////////////////////
    //This function puts the points which player scored to //
    //local storage                                       //
    ////////////////////////////////////////////////////////
            function setPointsToLocalStorage() {

                var storageId = name + 'Points'
                    , oldPoints = localStorage.getItem(storageId);
                    
                if (playerPoints > oldPoints) {
                    localStorage.setItem(storageId, playerPoints);
                }
            }
        }

return displayResults;
});