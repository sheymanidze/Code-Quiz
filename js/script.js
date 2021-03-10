var start = document.querySelector("#start");
var firstP = document.querySelector("#firstP")
var time = document.querySelector("#time");

var quiz = document.querySelector("#quiz");


var questionText = document.querySelector("#questionText");

var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");


var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");

var results = document.querySelector("results");
var points = document.querySelector("#points");
var submit = document.querySelector("#submit");

var currentPosition = document.querySelector("#currentPosition");

var choice = document.querySelectorAll(".choice");

var index = 0;
var timer = 0;
var interval = 0;
var correct = 0;

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

    } else {
      timer--;
      time.innerText = timer;
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
  answer: "2"
}, {

  question: "How can you find the HTML element with JavaScript?",
  choice1: "by id",
  choice2: "by class name",
  choice3: "by CSS selectors",
  choice4: "All of the above",
  answer: "4"
}, {
  question: "JavaScript functions are defined with the _____ keyword.",
  choice1: "function",
  choice2: "querySelector",
  choice3: "var",
  choice4: "getElementById",
  answer: "1"

}, {
  question: "Which built-in method combines the text of two strings and returns a new string?",
  choice1: "attach()",
  choice2: "append()",
  choice3: "concat()",
  choice4: "All of the above",
  answer: "3"
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
    choices.classList.add("active");


    for (i = 0; i <= 3; i++) {
      choice[i].classList.add("disabled")

      loadData();
    }

    if (choiceNo === questionsAll[index].answer) {
      correct.innerHTML = "Correct";
      correct.style.display = "block";

    } else {
      wrong.innerHTML = "Wrong";
      wrong.style.display = "block"
    }


  })

});


