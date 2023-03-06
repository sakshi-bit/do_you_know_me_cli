var readlineSync = require('readline-sync');
var username = readlineSync.question("What is your name? ");
console.log("hello! " +username +" Welcome to DO YOU KNOW SAKSHI? " );

console.log("__________________________________________")
console.log("\n")

var highScores = [{name:"sakshi srivastava",score:2},{name:"kalpana srivastava",score:2}];



var questions = [ {
  question : "Who is my favourite superhero? ",
  answer : "Dr Strange"
}, {
  question: "Which is my favourite song? ",
  answer: "All I want by Kodaline" 
}, {
  question: "Which is my favourite color? ",
  answer: "Red" 
},{
  question: "Where do I live?",
  answer:"Ghaziabad"
},{
  question:"Where I am from?",
  answer:"Lucknow",
}];

var score=0;
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(answer.toLowerCase() === userAnswer.toLowerCase()){
    console.log("Congrats! "+ username + " that's the right answer.");
    score++;
  }else{
    console.log("Opps! wrong answer");
  }
 console.log("__________________________________________")
console.log("\n")
  
  console.log("Your score " + score);
  console.log("\n")
}

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}


console.log("the high scores are: "  );
for(var i=0;i<highScores.length;i++){
  console.log(i+1+"." + " "+highScores[i].name + " with " + highScores[i].score + " scores");
}
console.log("__________________________________________")
console.log("\n");

if(score >= highScores[0].score ||score >=highScores[1].score ){
  console.log("Send me the screenshot");
}else{
  console.log("Better luck next time!!!")
}

