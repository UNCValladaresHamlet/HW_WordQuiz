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

// Object of all questions and answer choices
var quizQuestions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

// variables to reference DOM elements
var questionsEl = document.getElementById("question-container");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("answer-btns");
var submitBtn = document.getElementById("submit-btn");
var startBtn = document.getElementById("start-btn");
var initialsEl = document.getElementById("initials");
// var feedbackEl = document.getElementById("feedback");

// startBtn.addEventListener('click', startQuestions)

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var questionIndex = 0;

function loadQuestions() {
 var questionPresented = quizQuestions[questionIndex];
 var questiondisplayEl = document.getElementById("question-display");
 
 questiondisplayEl.innerText = questionPresented.question;  
 btn1.innerText = questionPresented.choices[0];
 btn2.innerText = questionPresented.choices[1];
 btn3.innerText = questionPresented.choices[2];
 btn4.innerText = questionPresented.choices[3];
//  console.log("questionPresented:", questionPresented);
}

