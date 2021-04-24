//Build Quiz and show results
//1.Have a welcoming page explaining the objective of the quiz
//2.This welcoming page should also store high scores for the users who have played
//3.It also has a timer that will start once the user clicks "start quiz"
//4.Once the timer is started, The questions and answers are presented
//5.If a user picks the correct answer, then points will be ADDED to the kept score
//6.If a user picks the wrong answer, then time will be subtracted from the timer
//7.When the game is over or the time reaches zero, it presents the user their final score and a option to play again
//8.When the final score is shown, the app gives the user an option to save their score in 'HIGHSCORES' using their initials 
//// 1.variables to keep track of quiz state
//// 2.variables to reference DOM elements
//// 3.hide start screen
//// 4.get current question object from array
//// 5.update title with current question
//// 6.clear out any old question choices
//// 7.loop over choices
//// 8.create new button for each choice
//// 9.attach click event listener to each choice
//// 10.display on the page
//// 11.check if user guessed wrong
//// 12.display new time on page
//// 13.flash right/wrong feedback on page for half a second
//// 14.move to next question
//// 15.check if we've run out of questions
//// 16.stop timer
//// 17.show end screen
//// 18.show final score
//// 19.hide questions section
//// 20.update time
//// 21.check if user ran out of time
//// 22.get value of input box - high & low scores
//// 23.make sure value wasn't empty
//// 24.get saved scores from localstorage, or if not any, set to empty array
//// 25.format new score object for current user
//// 26.save to localstorage
//// 27.redirect to next page for final score display
//// 28."13" represents the enter key - saving high score
//// 29.user clicks button to submit initials
//// 30.user clicks button to start quiz

// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");


var gameQuestions = [
    {
        question: 'Commonly used Data Types do not include:',
        choice1: 'Strings',
        choice2: 'Booleans',
        choice3: 'Alerts',
        choice4: 'Numbers',
        correctAnswer: 3
    },
    {
        question: 'The condition in an if/else statement is enclosed within _______.',
        choice1: 'Quotes',
        choice2: 'Curly brackets',
        choice3: 'Paranthesis',
        choice4: 'Square brackets',
        correctAnswer: 3
    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        choice1: 'Numbers and strings',
        choice2: 'Other Arrays',
        choice3: 'Booleans',
        choice4: 'All the above',
        correctAnswer: 4
    },
    {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        choice1: 'Commas',
        choice2: 'Curly brackets',
        choice3: 'Quotes',
        choice4: 'Parenthesis',
        correctAnswer: 3
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice1: 'Javascript',
        choice2: 'Terminal/bash',
        choice3: 'For loops',
        choice4: 'Console.log',
        correctAnswer: 4
    }
];

