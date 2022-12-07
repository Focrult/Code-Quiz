const Displaytime = document.getElementById("Displaytime");
const startBtn = document.getElementById("btnStart");
const introPage = document.getElementById("intro");
const correctAnswer = document.getElementsByClassName("correct"); //bug foudn here
const wrongAnswer = document.getElementsByClassName("wrong"); //bug found here
const textCorrect = document.getElementById("correct-text");
const textWrong = document.getElementById("wrong-text");
var timer = 75;
var UserScore = 0;
const QuestionContainer1 = document.getElementById("question1-container"); //shows questions after start
const QuestionContainer2 = document.getElementById("question2-container");
const QuestionContainer3 = document.getElementById("question3-container");
const QuestionContainer4 = document.getElementById("question4-container");
const QuestionContainer5 = document.getElementById("question5-container");
startBtn.addEventListener('click', StartQuiz);

function StartQuiz(){
startBtn.classList.add("hide");
introPage.classList.add("hide");
QuestionContainer1.classList.remove("hide");
timerCount();
Question1();
console.log("passing function in StartQuiz");
}

function Question1(){
    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        console.log("correct Answer");
        correctText();
        QuestionContainer1.classList.add("hide");
        QuestionContainer2.classList.remove("hide");
        Question2()
    }
    for (var i = 0; i < correctAnswer.length; i++) {
        correctAnswer[i].addEventListener('click', myFunction, false);
        console.log("loop check")
    }
    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        console.log("wrong answer")
        wrongText();
        QuestionContainer1.classList.add("hide");
        QuestionContainer2.classList.remove("hide");
        Question2()
    };
    for (var i = 0; i < wrongAnswer.length; i++) {
        wrongAnswer[i].addEventListener('click', myFunction, false);
    }
}
 

//     var myFunction = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         console.log("wrong answer")
//         wrongText(); 
//     QuestionContainer1.classList.add("hide");
//     QuestionContainer2.classList.remove("hide");
//     Question2(); 
//     };
//     for (var i = 0; i < wrongAnswer.length; i++) {
//         wrongAnswer[i].addEventListener('click', myFunction, false);
//     }
// }


// function Question1(){
// correctAnswer.addEventListener('click', function(){ 
// if(correctAnswer !== null){                                                                             
// correctText();
// QuestionContainer1.classList.add("hide");
// QuestionContainer2.classList.remove("hide");
// Question2(); 
// console.log("testRightQ1");
// }
// else{
//     wrongText(); 
//     QuestionContainer1.classList.add("hide");
//     QuestionContainer2.classList.remove("hide");
//     Question2(); 
//     console.log("testWrongQ1");
// }
// });
// }
// wrongAnswer.addEventListener('click', function(){
//     if(wrongAnswer=== null){
//     wrongText(); 
//     QuestionContainer1.classList.add("hide");
//     QuestionContainer2.classList.remove("hide");
//     Question2(); 
//     console.log("testWrongQ1");
//     }
//     });
// }
///////////////////////////////////////////////////////////////////////////
function Question2(){
    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        console.log("correct Answer");
        correctText();
        QuestionContainer2.classList.add("hide");
        QuestionContainer3.classList.remove("hide");
        Question3();
    }
    for (var i = 0; i < correctAnswer.length; i++) {
        correctAnswer[i].addEventListener('click', myFunction, false);
        console.log("loop check")
    }
    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        console.log("wrong answer")
        wrongText();
        QuestionContainer2.classList.add("hide");
        QuestionContainer3.classList.remove("hide");
        Question3();
    };
    for (var i = 0; i < wrongAnswer.length; i++) {
        wrongAnswer[i].addEventListener('click', myFunction, false);
    }
}
///////////////////////////////////////////////////////////////////////////
function Question3(){
    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        console.log("correct Answer");
        correctText();
        QuestionContainer3.classList.add("hide");
        QuestionContainer4.classList.remove("hide");
        Question4();
    }
    for (var i = 0; i < correctAnswer.length; i++) {
        correctAnswer[i].addEventListener('click', myFunction, false);
        console.log("loop check")
    }
    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        console.log("wrong answer")
        wrongText();
        QuestionContainer3.classList.add("hide");
        QuestionContainer4.classList.remove("hide");
        Question4();
    };
    for (var i = 0; i < wrongAnswer.length; i++) {
        wrongAnswer[i].addEventListener('click', myFunction, false);
    }
        }
///////////////////////////////////////////////////////////////////////////
function Question4(){
    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        console.log("correct Answer");
        correctText();
        QuestionContainer4.classList.add("hide");
        QuestionContainer5.classList.remove("hide");
        Question5();
    }
    for (var i = 0; i < correctAnswer.length; i++) {
        correctAnswer[i].addEventListener('click', myFunction, false);
        console.log("loop check")
    }
    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        console.log("wrong answer")
        wrongText();
        QuestionContainer4.classList.add("hide");
        QuestionContainer5.classList.remove("hide");
        Question5();
    };
    for (var i = 0; i < wrongAnswer.length; i++) {
        wrongAnswer[i].addEventListener('click', myFunction, false);
    }
        }
///////////////////////////////////////////////////////////////////////////
function Question5(){
    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        console.log("correct Answer");
        correctText();
        QuestionContainer5.classList.add("hide");
        QuestionContainer3.classList.remove("hide");
    }
    for (var i = 0; i < correctAnswer.length; i++) {
        correctAnswer[i].addEventListener('click', myFunction, false);
        console.log("loop check")
    }
    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        console.log("wrong answer")
        wrongText();
        QuestionContainer5.classList.add("hide");
        QuestionContainer3.classList.remove("hide");
    };
    for (var i = 0; i < wrongAnswer.length; i++) {
        wrongAnswer[i].addEventListener('click', myFunction, false);
    }
        }



function Final(){
    //section with score + Try Again?
    //record TIMEstamp
    console.log("TESTING FINAL");
}




//function for wrong/correct answer text!
function correctText(){
    textCorrect.classList.remove("hide"); 
    textCorrect.classList.add("hide");
    console.log("function correctText");
}
    //store one point in LS.  into an empty array?
function wrongText(){
    textWrong.classList.remove("hide");
    textWrong.classList.add("hide");
    timer -= 10;//penalty of 10seconds
    console.log("function wrongText");
}
   
 

//timer function countdown
function timerCount(){
    secs = setInterval(() => {
    timer--;
    Displaytime.textContent = timer;
    if (timer == 0) {
        clearInterval(secs);
        //input display 
        Final();
    }
    },1000);
}
