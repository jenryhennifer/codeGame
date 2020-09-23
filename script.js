


var start = document.getElementById('startButton');
var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var choice_A = document.getElementById('A');
var choice_B = document.getElementById('B');
var choice_C = document.getElementById('C');
var choice_D = document.getElementById('D');
var result = document.getElementById('result');



var correct = 0;
var correctResponse = "correct!";
var incorrect = 0;
var incorrectResponse = 'incorrect!';


//questions are placed into an array wiht objects
var allQuestions = [ 
    {   //question 1
        question: "1. Who sings the song 'The Joker'?",
        choiceA: "Journey",
        choiceB: "Queen",
        choiceC: "Steve Miller Band",
        choiceD: "Aerosmith",

        Correct: "Aerosmith",
    },
    {   //question 2
        question: "2. Who sings 'Sweet Child of Mine?",  
        choiceA: "Guns & Roses",
        choiceB: "Metallica",
        choiceC: "Van Halen",
        choiceD: "Foreigner",

        Correct: "Guns & Roses",
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
 ]
 var questionIndex = 0;

 //renders the question to the screen with buttons
 function produceQuestion(){
     let quest = allQuestions[questionIndex];
    question.innerHTML = quest.question;
    choice_A.textContent = quest.choiceA;
    choice_B.textContent = quest.choiceB;
    choice_C.textContent = quest.choiceC;
    choice_D.textContent = quest.choiceD;
 } 

 function answerChecker(){
     debugger;
    if (choice_A == allQuestions[questionIndex][5]){
        console.log('correct');
        //result.innerHTML = 'Correct!';
        correct++;
    }else{
        result.innerHTML = 'Incorrect!'
        incorrect++;
    }
    questionIndex++;
}

//starts the quiz
start.addEventListener('click', function(){
    start.style.display = 'none'; 
    produceQuestion();
    quiz.style.display = 'block';
} );

choice_A.addEventListener('click', answerChecker());
choice_B.addEventListener('click', answerChecker());
choice_C.addEventListener('click', answerChecker());
choice_D.addEventListener('click', answerChecker());



 function quiz(){
    for(var i=0; i<allQestions.length; i++){
        var questionPrint = document.getElementById('question');
         questionPrint.textContent((allQuestions[i])[0].question);
         

        if(response === allQuestions[i].answer){
            correct++;
        }
        else{incorrect++;}
     }
 }

