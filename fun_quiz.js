var readlineSync = require('readline-sync');

// var myName = "Abhay Kumar";
var userScore = 0;

var userName = readlineSync.question("what is your name : ");

console.log("welcome " + userName + " !");

// var myAge = 21;
// var userInput_age = readlineSync.question("what is " + myName + `'s age ? : `);

function checkAnswer(question, myAnswer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == myAnswer) {
    userScore++;
    console.log(`you are right
      and your score is: ${userScore}`);
  } else {
    userScore--;
    console.log(`you are wrong
      and your score is: ${userScore}`);
  }
}

var questions_Answers = 
  [
    {
      question: "Who is my favorite superhero? ",
      answer: "Dhruv"
    },
    {
      question: "Which is my favorite sad song? ",
      answer: "Channa Meraya"
    }
  ];

  // console.log(checkAnswer(questions_Answers[0].question, questions_Answers[0].answer));

  for(var i = 0; i < questions_Answers.length; i++ ){
    var currentQuestion = questions_Answers[i];
    checkAnswer(currentQuestion.question, currentQuestion.answer);
  }

