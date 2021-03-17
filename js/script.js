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

var viewScoresMain = document.querySelector("#viewScoresMain")

var viewScores = document.querySelector("#viewScores")



var index = 0;
var totalPoints = 0;
var maxScores = 5;
var secondsLeft = 60;
var timeInterval;


//after clicking start button
start.addEventListener("click", () => {
  index = 0;
  start.style.display = "none";
  firstP.style.display = "none";
  quiz.style.display = "block";
  totalPoints = 0
  loadData();
  secondsLeft = 60;
  startTimer();

});

function startTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = "Time: " + secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      return quizOver();
    }
  }, 1000);
}

function quizOver() {
  results.style.display = "block";
  quiz.style.display = "none";
  clearInterval(timeInterval);
  secondsLeft = 1;

  //time.style.display = "none"
}

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
}, {
  question: "JSON objects are surrounded by __",
  choice1: "1. ()",
  choice2: "2. {}",
  choice3: "3. []",
  choice4: "4. <>",
  answer: "1"
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

    //checking for correct or wrong answer
    if (choiceNo == questionsAll[index].answer) {

      progress.innerHTML = "Correct";
      progress.style.display = "block";
      totalPoints = totalPoints + 10;
      points.innerText = totalPoints;
      localStorage.setItem("totalPoints", totalPoints)
      console.log(totalPoints);

    } else {
      progress.innerHTML = "Wrong";
      progress.style.display = "block"
      secondsLeft = secondsLeft - 10;
      totalPoints.innerText = 0;
    }

    setTimeout(() => {

      progress.style.display = "none";

    }, 500);

    //next question
    index++;

    //end of quiestions
    if (index >= questionsAll.length) {
      results.style.display = "block";
      quiz.style.display = "none";
      quizOver();


    } else {
      loadData();

    }
  })
});

//after clicking "submit" button
submit.addEventListener("click", () => {
  results.style.display = "none";
  currentPosition.style.display = "block";

  var updatedScores = {
    currentInitials: initials.value,
    score: totalPoints
  };
  var highScores = JSON.parse(localStorage.getItem("scores")) || [];
  highScores.push(updatedScores);
  localStorage.setItem("scores", JSON.stringify(highScores));

  initials.value = ''
  showHighScores();

});

//highest score first
function showHighScores() {
  var highScores = JSON.parse(localStorage.getItem("scores")) || [];
  highScores.sort(function (a, b) {
    return a.score < b.score ? 1 : -1;
  });
  highScores.splice(5);
  //ordered list
  highScores.forEach(function (item) {
    var liTag = document.createElement("li");
    liTag.textContent = item.currentInitials + " " + item.score;
    var loTag = document.getElementById("currentScore");
    loTag.appendChild(liTag);
  });

}

goBack.addEventListener("click", () => {
  currentPosition.style.display = "none";
  start.style.display = "inline-block";
  firstP.style.display = "block";

});

clearScores.addEventListener("click", () => {
  currentScore.style.display = "none";
  //sessionStorage.clear();
  //showHighScores.clear();
  localStorage.clear();
  //localStorage.removeItem(showHighScores);
});


viewScores.addEventListener("click", () => {
  start.style.display = "none";
  firstP.style.display = "none";
  results.style.display = "none"
  currentPosition.style.display = "block"
  showHighScores();


});