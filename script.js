var start = document.getElementById('startButton');
var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var choice_A = document.getElementById('A');
var choice_B = document.getElementById('B');
var choice_C = document.getElementById('C');
var choice_D = document.getElementById('D');
var result = document.getElementById('result');
var score = document.getElementById('score');
var inputName = document.getElementById('inputName');
var submit = document.getElementById('submit');
var scoreBoard = document.querySelector('.card-body');
var timer = document.getElementById('timer');
var toggleBoard = document.getElementById('toggle-board');
var toggleTimer = document.getElementById('toggleTimer');


var correct = 0;
var correctResponse = "correct!";
var incorrect = 0;
var incorrectResponse = 'incorrect!';

toggleTimer.style.display = 'none'

//questions are placed into an array wiht objects
var allQuestions = [ 
    {   //question 1
        question: "1. Who sings the song 'The Joker'?",
        choiceA: "Journey",
        choiceB: "Queen",
        choiceC: "Steve Miller Band",
        choiceD: "Aerosmith",

        Correct: "Steve Miller Band",
    },
    {   //question 2
        question: "2. Who sings 'Sweet Child of Mine?",  
        choiceA: "Guns N' Roses",
        choiceB: "Metallica",
        choiceC: "Van Halen",
        choiceD: "Foreigner",

        Correct: "Guns N' Roses",
    },   
    {   //question 3
        question: "3. Who sings 'Don't Stop Believin'?",  
        choiceA: "Duran Duran",
        choiceB: "Steve Miller Band",
        choiceC: "Queen",
        choiceD: "Journey",

        Correct: "Journey",
    },   
    {   //question 4
        question: "4. Who sings 'Thunderstruck?",  
        choiceA: "ZZ Top",
        choiceB: "AC/DC",
        choiceC: "Sting",
        choiceD: "Aerosmith",

        Correct: "AC/DC",
    },
    {   //question 5
        question: "5. What song is NOT written by the Queen?",  
        choiceA: "Bohemian Rhapsody",
        choiceB: "Cat Scratch Fever",
        choiceC: "Under Pressure",
        choiceD: "We Will Rock You",

        Correct: "Cat Scratch Fever",
    },
    {   //question 6
        question: "6. Which of the following is NOT an example of a metamorphic rock?",  
        choiceA: "Gneiss",
        choiceB: "Schist",
        choiceC: "Marble",
        choiceD: "Basalt",

        Correct: "Basalt",
    },        
 ]

var interval;
var questionIndex = 0;

 //renders the question to the screen with buttons
function produceQuestion(){
    result.innerHTML = '';
    const currentQuestion = allQuestions[questionIndex]; 
    //when allQuestions[questionIndex] returns as undefined it will go to the else statement :)
    if(currentQuestion){
        question.innerHTML = currentQuestion.question;
        choice_A.innerHTML = currentQuestion.choiceA;
        choice_B.innerHTML = currentQuestion.choiceB;
        choice_C.innerHTML = currentQuestion.choiceC;
        choice_D.innerHTML = currentQuestion.choiceD;
    }
    else{
        quiz.style.display = 'none';
        score.style.display = 'block';
        toggleTimer.style.display = 'none';

        clearInterval(interval); //stops timer
        
        submit.addEventListener('click', function(){
            localStorage.setItem(inputName.value, correct);
            inputName.style.display = 'none';
            submit.style.display = 'none';
            toggleBoard.style.display = 'block';
            


            //adding local scores to scoreboard
            var keyArray = Object.keys(localStorage);
            for(var i = 0; i < keyArray.length; i++){
                var key = keyArray[i];
                var keyValue = localStorage.getItem(key);
                var child = document.createElement('div');
                child.innerHTML = key + ": " +keyValue;
                var line = document.createElement('hr')
                scoreBoard.appendChild(child);
                scoreBoard.appendChild(line);
            }
        });
    }
 } 


var timeLeft = 45;
function checkTime(n = 1){
    timeLeft -= n;
    timer.innerHTML = timeLeft;
    if(timeLeft <= 0){
        questionIndex = Infinity; //this allows me to add as many questions as i want
        produceQuestion(); //takes it to the else statement in produceQuestion
    }
}

//starts the quiz
start.addEventListener('click', function(){
    start.style.display = 'none'; 
    produceQuestion();
    quiz.style.display = 'block';
    toggleTimer.style.display = 'block';
    interval = setInterval(checkTime, 1000);
    timer.innerHTML = timeLeft;
} );

//score checkers
choice_A.addEventListener('click', function(){
    if (choice_A.innerHTML === allQuestions[questionIndex].Correct){
       result.innerHTML = 'Correct!';
       correct++;
   }else{
        result.innerHTML = 'Incorrect!';
        checkTime(5);
    }
   questionIndex++;
   setTimeout(produceQuestion, 1000); //gives delay before producing the next question
});

choice_B.addEventListener('click', function(){
   if (choice_B.innerHTML === allQuestions[questionIndex].Correct){
       result.innerHTML = 'Correct!';
       correct++;
   }else{
       result.innerHTML = 'Incorrect!'
       checkTime(5);
       }
   questionIndex++;
   setTimeout(produceQuestion, 1000);
});

choice_C.addEventListener('click', function(){
   if (choice_C.innerHTML === allQuestions[questionIndex].Correct){
       result.innerHTML = 'Correct!';
       correct++;
   }else{
       console.log('incorrect')
       result.innerHTML = 'Incorrect!'
       checkTime(5);
   }
   questionIndex++;
   setTimeout(produceQuestion, 1000);
});

choice_D.addEventListener('click', function(){
   if (choice_D.innerHTML === allQuestions[questionIndex].Correct){
       console.log('correct');
       result.innerHTML = 'Correct!';
       correct++;
   }else{
       result.innerHTML = 'Incorrect!'
       checkTime(5);
   }
   questionIndex++;
   setTimeout(produceQuestion, 1000);
});




/*

timer for 30 seconds

setInterval() -- will continue until you stop it (clear interval)

decrement the timer --
set div to timer



*/