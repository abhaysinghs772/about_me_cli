
const readlineSync = require('readline-sync');
const chalk = require(`chalk`);

// console.log(chalk.bgYellow.blue(`hello world!`));

// var myName = `Abhay Kumar`;
var userScore = 0;
var highScore = 3;

var userName = readlineSync.question(chalk.cyan(`what is your name : `));

console.log(chalk.green(`\nhello ${userName}! welcome to my challenge, lets see how well do you know me !\n`));
console.log(chalk.yellow(`rules of the game: a question will asked to you and you have to only choose the correct option \n`));

function checkAnswer(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (answer == userAnswer) {
    userScore++;
    console.log(chalk.blue(`absolutely correct\n and your score is ${userScore} \n`));
  } else {
    userScore--;
    console.log(chalk.red(`oopsie you choose the wrong option\n and your score is ${userScore} \n`));
  }
}

var q_and_a_pair =
  [
    {
      question: `what is my age ? 
      a: 20
      b: 21
      c: 19
      your answer: `,
      correct_Answer: `b`,
    },

    {
      question: `what i like most? 
      a: watching web-series
      b: playing games in mobile
      c: coding
      your answer: `,
      correct_Answer: `c`,
    },

    {
      question: `where do i live? 
      a: delhi
      b: mumbai
      c: banglore
      your answer: `,
      correct_Answer: `a`,
    },

    {
      question: `what subject do i like the most ? 
      a: Dbms
      b: Ds-algo
      c: Computer networks
      your answer: `,
      correct_Answer: `c`,
    },

    {
      question: `what programming language do i love the most ? 
      a: c
      b: JavaScript
      c: c++
      your answer: `,
      correct_Answer: `b`,
    }
  ];

for (var i = 0; i < q_and_a_pair.length; i++) {
  var currentQuestion = q_and_a_pair[i];
  checkAnswer(currentQuestion.question, currentQuestion.correct_Answer, currentQuestion);
}

// check whether the user has beat the high score or not
if(userScore >= highScore){
  console.log(chalk.cyan(`wow you beat the high score`));
  console.log(chalk.cyan(`your final score is: ${userScore}\n privious high score was ${highScore}`));
} else {
  console.log(chalk.cyan(`your final score is: ${userScore}\n high score is ${highScore}`));
}