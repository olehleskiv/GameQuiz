define(['jquery', 'cont/quiz'], function($, createQuiz) { 

    ////////////////////////////////////////////////////////
    //This function makes main heroes to hit each other   //
    ////////////////////////////////////////////////////////
    function battle(name, choice, quiz, currentquestion) {
        var opponentId = name + 'Oponent';
        var opponent = document.getElementById(opponentId);
        var frame = document.getElementById('frame');
        
    
        if (choice == quiz[currentquestion].correct){
            $('.mainKnight').css('left','70%');
                
            setTimeout(function(){
                $('.mainKnight').css('left','2%');
                
                //$('.messageLeft').css('background-image','url(img/people/bang.png)');
                $('.bang').css('display','block');
                setTimeout(function(){
                    $('.bang').css('display','none');
                }, 200);
    
                var c = setInterval(function(){
                    $('.mainKnight').css('transform','rotate(-10deg)');
    
                    setTimeout(function(){
                        $('.mainKnight').css('transform','rotate(10deg)');
                    },
                    200);
                },
                400);
    
            },
            700);
            
            
        } else {
            opponent.style.right = '70%';
            setTimeout(function(){
                opponent.style.right = '2%';
            }, 700);
            //frame.style.display = 'none';
            setTimeout(function() {
                //frame.style.display = 'block';
                opponent.style.right = '2%';
                //$('.messageRight').css('background-image','url(img/people/bang.png)');
                $('.bang').css('display','block');
                setTimeout(function(){
                    $('.bang').css('display','none');
                }, 200);
    
                setInterval(function(){
                     opponent.style.transform = 'rotate(-10deg)';
    
                    setTimeout(function(){
                        opponent.style.transform = 'rotate(10deg)';
                    },
                    200);
                },
                400);
            },
            700);
        }
    
    }

return battle;
});