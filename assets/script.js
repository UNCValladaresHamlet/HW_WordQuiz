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

// Object of all questions/choices and answers
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
var submitscoreBtn = document.getElementById("submitscore-btn");
var startBtn = document.getElementById("start-btn");
var initialsEl = document.getElementById("user-initials");
var endScoreEl = document.getElementById("end-score");
// var feedbackEl = document.getElementById("feedback");

// startBtn.addEventListener('click', startQuestions)

var btn1 = document.getElementById("btn1"); // variables assigned to the HTML buttons to the answers
var btn2 = document.getElementById("btn2"); // chosen from the choice array in the quizQuestions 
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");


var questionIndex = 0; //Index is assigned/set to zero (later in LoadQuestions Function)
var timeLeft = 10; //timeLeft is assigned/set to be 75 (75 seconds later in the TIMER) 
var currentQuestion; //Used later in loadQuestions function
var timerInterval;

startBtn.addEventListener("click", beginQuiz); 
//Event-Listener for start button so user can begin quiz.
//Timer Starts and user is presented with a question

function beginQuiz() {  
  timerEl.textContent = timeLeft; //Timer element is assigned 75 seconds by timeLeft variable.
  timerInterval = setInterval(function() { //TIMER 
    timeLeft--; //timeLeft 75 Decrements by 1
    timerEl.textContent = timeLeft; 
  } , 1000); //1000 milliseconds = 1 sec

  var startEl = document.getElementById("start"); 
  startEl.setAttribute("class", "hide"); //hide start screen
  questionsEl.removeAttribute("class"); //show questions
  loadQuestions();   //calls this function
}

// Function to load questions from object
function loadQuestions() {
  
 currentQuestion = quizQuestions[questionIndex]; //Variable reference to first question in quizQuestions
 var questiondisplayEl = document.getElementById("question-display");
 
  questiondisplayEl.innerText = currentQuestion.question;  //changes HTML text element to first question
  btn1.innerText = currentQuestion.choices[0]; 
  btn2.innerText = currentQuestion.choices[1];
  btn3.innerText = currentQuestion.choices[2];
  btn4.innerText = currentQuestion.choices[3]; //Answer buttons now have the options from the choice array in the quizQuestions

  questionIndex++; //Index increments by 1 going through each question in the quizQuestions
   
}

btn1.addEventListener("click", function() {  
  if (currentQuestion.choices[0] !== currentQuestion.answer) { //Answer gets validated if clicked. If is NOT the same answer
    timeLeft -= 10; //subtract 10 seconds from timeLeft
  } 
  if (questionIndex < quizQuestions.length) { //Will bring up questions until current question index is greater than 4 (length of quizQuestions)
    loadQuestions();
  } else {
    endsQuiz();
    
  }
})

btn2.addEventListener("click", function() {
  if (currentQuestion.choices[1] !== currentQuestion.answer) {
    timeLeft -= 10; 
  } 
  if (questionIndex < quizQuestions.length) {
    loadQuestions();
  } else {
    endsQuiz();
  }
})

btn3.addEventListener("click", function() {
  if (currentQuestion.choices[2] !== currentQuestion.answer) {
    timeLeft -= 10; 
  } 
  if (questionIndex < quizQuestions.length) {
    loadQuestions();
  } else {
    endsQuiz();
  }
})

btn4.addEventListener("click", function() {
  if (currentQuestion.choices[3] !== currentQuestion.answer) {
    timeLeft -= 10; 
  } 
  if (questionIndex < quizQuestions.length) {
    loadQuestions();
  } else {
    endsQuiz();
  }
})

function endsQuiz() {
  // (timeLeft === 0 || questionIndex === 5)
  
  if (questionIndex === 5) {                      
    var endEl = document.getElementById("end-screen"); //defined var to be used in if statement
    questionsEl.setAttribute("class", "hide"); //hide start screen
    endEl.removeAttribute("class");  //shows end screen
  }
  // if (timeLeft <= 0) {
  //   clearInterval(timerInterval);
  // }
  
  endScoreEl.textContent = timeLeft;
  
}
// eventlistener to submit the user's initials to the highscores
submitscoreBtn.addEventListener("click", function highscore() {

  var initialsUser = initialsEl.value; //assigns the user's initials (ex:HV)
  if (initialsUser === "") { //If initials is left empty then return an alert
    alert("Initials cannot be left empty");
    return false
  } else{ //If not then place them into the local storage
            
      savedhighscores = JSON.parse(window.localStorage.getItem("finalscores")) || []; // get saved scores from localstorage, or if not any, set to empty array
        var savedScore = { //new score object for current user
          Finalscore: timeLeft,
          Initials: initialsUser
        };
        // save to localstorage
        savedhighscores.push(savedScore);
        window.localStorage.setItem("finalscores", JSON.stringify(savedhighscores));
  }

  console.log("submitBtn:",submitscoreBtn)
  window.location.replace("./highscores.html")
  
});

