


var start = document.getElementById('startButton');

//change
start.addEventListener('click', () => console.log('hello'));

//questions are placed into an array wiht objects
var allQuestions = [ 
    {   //question 1
        Question: "1. What element do you use in HTML to use JavaScript?",
        Answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
        Correct: "a",
    },
    {   //question 2
        Question: "2. How do you add a comment in JavaScript?", 
        Answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
        Correct: "a",
    },   
    {   //question 3
        Question: "3. Is JavaScript case sensitive?", 
        Answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
        Correct: "a",
    }, 
    {   //question 4
        Question: "4. What would you use to turn a string into an array?", 
        Answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
        Correct: "a",
    },   
    {   //question 5
        Question: "5. How would you reperesent 'or' in a statment", 
        Answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
        Correct: "a",
    }      
 ]