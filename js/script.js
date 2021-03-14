var start = document.querySelector("#start");
var firstP = document.querySelector("#firstP")
var time = document.querySelector("#time");

var quiz = document.querySelector("#quiz");


var questionText = document.querySelector("#questionText");

var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");



var progress = document.querySelector("#progress");
var initials = document.querySelector("#initials")

var results = document.querySelector("#results");
var points = document.querySelector("#points");
var submit = document.querySelector("#submit");

var currentPosition = document.querySelector("#currentPosition");
var current = document.querySelector("#currentScores");

var goBack = document.querySelector("#goBack");
var clearScores = document.querySelector("#clearScores");

var choice = document.querySelectorAll(".choice");

var viewScores = document.querySelector("#viewScores")



var index = 0;
var timer = 0;
var interval = 0;
var totalPoints = 0;

var UserAns = undefined;
//after clicking start button
start.addEventListener("click", () => {
  start.style.display = "none";
  firstP.style.display = "none";
  quiz.style.display = "block";

  timer = 60;
  var countDown = () => {
    if (timer === 00) {
      clearInterval(interval);
      quiz.style.display = "none";
      //results.style.display = "block"

    } else {
      timer--;
      time.innerText = "Time: " + timer;

    }
  }
  setInterval(countDown, 1000);

});

//all questions with answers
var questionsAll = [{

  question: "In the DOM, all HTML elements are defined as",
  choice1: "1. Subjects",
  choice2: "2. Objects",
  choice3: "3. Children",
  choice4: "4. Parent",
  answer: "1"
}, {

  question: "How can you find the HTML element with JavaScript?",
  choice1: "1. by id",
  choice2: "2. by class name",
  choice3: "3. by CSS selectors",
  choice4: "4. All of the above",
  answer: "3"
}, {
  question: "JavaScript functions are defined with the ____ keyword.",
  choice1: "1. function",
  choice2: "2. querySelector",
  choice3: "3. var",
  choice4: "4. getElementById",
  answer: "0"

}, {
  question: "Which built-in method combines the text of two strings and returns a new string?",
  choice1: "1. attach()",
  choice2: "2. append()",
  choice3: "3. concat()",
  choice4: "4. All of the above",
  answer: "2"
}
]

var loadData = () => {

  questionText.innerText = questionsAll[index].question;
  option1.innerText = questionsAll[index].choice1
  option2.innerText = questionsAll[index].choice2
  option3.innerText = questionsAll[index].choice3
  option4.innerText = questionsAll[index].choice4

}
loadData();


//when one of the choices picked
choice.forEach((choices, choiceNo) => {
  choices.addEventListener("click", () => {

    // console.log(this);
    // console.log(choices);

    // console.log(choiceNo)
    // console.log(questionsAll[index].answer)
    // console.log(typeof choiceNo);
    // console.log(typeof questionsAll[index].answer);
    //counting points


    // incrementPoints = num => {
    //   console.log("num");
    //   totalPoints = totalPoints + 10;
    //   points.innerText = totalPoints;


    // }
    console.log(index)
    //checking for correct or wrong answer
    if (choiceNo == questionsAll[index].answer) {


      progress.innerHTML = "Correct";
      progress.style.display = "block";
      totalPoints = totalPoints + 10;
      points.innerText = totalPoints;




    } else {
      progress.innerHTML = "Wrong";
      progress.style.display = "block"
      timer = timer - 10;
    }

    setTimeout(() => {

      progress.style.display = "none";

    }, 500);



    //save results at local storage


    // var count = localStorage.getItem("count")
    // currentPosition.textContent = count;
    // localStorage.setItem("count", count);
    // var mostRecentScore = localStorage.getItem("mostRecentScore")
    // localStorage.getItem("mostRecentScore",);



    //next question
    index++;

    if (index >= 4) {
      timer = 0;
      results.style.display = "block";
      progress.style.display = "none";

    } else {
      loadData();

    }
  })
});

// var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(highScores);


initials.addEventListener("keyup", () => {
  console.log(initials.value);
  //if (submit !== initials) {
  //submit.disabled = true;
  //}
})

submit.addEventListener("click", () => {
  results.style.display = "none";
  currentPosition.style.display = "block";

  var scores = {
    currentInitials: initials.value,
    score: totalPoints.value
  };

  localStorage.setItem("scores", JSON.stringify(scores));
  renderMessage();

  function renderMessage() {
    var highScores = JSON.parse(localStorage.getItem("scores"));
    if (highScores !== null) {
      currentScore.textContent = scores.currentInitials + " " + scores.score;
    }
  }

});

// var scoores = {
//   "name1": 25,
//   "name2": 35,
//   "adam": 50
// }

goBack.addEventListener("click", () => {
  currentPosition.style.display = "none";
  start.style.display = "inline-block";
  firstP.style.display = "block";
  index = 0;


  // give an object clearInterval();


});

viewScores.addEventListener("click", () => {

})


