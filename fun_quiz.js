var readlineSync = require('readline-sync');

// var myName = `Abhay Kumar`;
var userScore = 0;

var userName = readlineSync.question(`what is your name : `);

console.log(`hello ${userName}! welcome to my challenge, lets see how well do you know me !
rules of the game: a question will asked to you and you have to choose the correct option \n`);

function checkAnswer(question, answer, messege) {
  var userAnswer = readlineSync.question(question);

  if (answer == userAnswer){
    userScore++;
    console.log(`yeah you are correct and your score is ${userScore} 
    ${messege[0]}`);
  }else{
    userScore--;
    console.log(`you are not correct and your score is ${userScore} 
    ${messege[1]}`);
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
      messege: [
        `haa bhaii 21 ka hi hu, kasam se!`,
        `are bhaii 21 ka hu mai sach me`
      ]
    },
    {
      question: `what i like most? 
      a: watching web-series
      b: playing games in mobile
      c: coding
      your answer: `,
      correct_Answer: `c`,
      messege: [
        `absolutely right bro`,
        `eat => code => sleep => repeat`
      ]
    },
    {
      question: `Am i a marvel fan or a dc fan? 
      a: marvel
      b: dc
      c: both
      your answer: `,
      correct_Answer: `a`,
      messege: [
        `bhaii hai tu apna`,
        `teri meri katti, :-(`
      ]
    },
    {
      question: `ok! but i also like one thing about dc, whats that ? 
      a: aqua man
      b: batman
      c: wonder woman
      your answer: `,
      correct_Answer: `c`,
      messege: [
        `bade harami ho beta! sahi guess kiye bilkul`,
        `kab jaa rahe ho swarg ki yatra pe !`
      ]
    },
    {
      question: `Who is my favorite marvel' superhero? 
      a: thor
      b: captain america
      c: iron-man
      your answer: `,
      correct_Answer: `b`,
      messege: [
        `captain bro hai apna`,
        `bilkul galat jawab `
      ]
    }
  ];

for (var i = 0; i < q_and_a_pair.length; i++) {
  var currentQuestion = q_and_a_pair[i];
  checkAnswer(currentQuestion.question, currentQuestion.correct_Answer, currentQuestion.messege);
}