var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var correct = document.querySelector("correct");
var wrong = document.querySelector("wrong");
var score = document.querySelector("score");
var timerElement = document.querySelector(".timer-count");
var startButton= document.getElementById(".start-button");
var questions=document.querySelector('questions');

var currentQuestionIndex = 0;
var time = question.length *15;
var timerID;

var timeEl = document.querySelector("time");



//Write the quiz func
function makeQuiz(){};

function giveQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
        answers =[];

    for(letter in questions[i].answers){
        answers.push(
            '<label>'
        );

    }




// giveQuestions(questions, quizContainer);
//giveQuestions();
    const myQuestions = [
        {
            question: "Commonly used data types do NOT include?",
            answers: 
                ["a: strings",
                 "b: booleans",
                 "c: alerts",
                 "d: numbers"],
        
            correctAnswer: "c: alerts"
        },
        {
            question: "Arrays in JavaScript can be used to store _______?",
            answers: 
                ["a: numbers and strings",
                 "b: other arrays",
                 "c: booleans",
                 "d: all of the above"],
         
            correctAnswer: "d: all of the above"
        },
        {
            question: "The condition in an if/else statement is enclosed with ______?",
            answers: 
                ["a: quotes",
                 "b: curly brackets",
                 "c: parentheses",
                 "d: square brackets"],
         
            correctAnswer: "c: parentheses"
        },
        {
            question: "String values must be enclosed within  _______ when being assigned to variables?",
            answers: 
                ["a: commas",
                 "b: curly brackets",
                 "c: quotes",
                 "d: all of the above"],
         
            correctAnswer: "c: quotes"
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is _______?",
            answers: 
                ["a: JavaScript",
                 "b: terminal/bash",
                 "c: for loops",
                 "d: console log"],
         
            correctAnswer: "d: console log"
        },





    ];

// submitButton.addEventListener('click', showResults);
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);

}

answers.push(
    '<label>'
        + '<input type="onclick" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + questions[i].answers[letter]
    + '</label>'
);


// add this question and its answers to the output
output.push(
'<div class="question">' + questions[i].question + '</div>'
+ '<div class="answers">' + answers.join('') + '</div>'
);
} 

quizContainer.innerHTML = output.join('');
}

giveQuestions(questions, quizContainer);



function giveResults(){

};
