// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
//Build Quiz and show results

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