const Displaytime = document.getElementById("Displaytime");
const startBtn = document.getElementById("btnStart");
const introPage = document.getElementById("intro");
const correctAnswer = document.getElementsByClassName("correct"); //bug foudn here
const wrongAnswer = document.getElementsByClassName("wrong"); //bug found here
const textCorrect = document.getElementById("correct-text");
const textWrong = document.getElementById("wrong-text");
var timer = 75;
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
    let CA1 = document.getElementById("correct1");
    let WA1 = document.getElementById("wrong1");
    let WA2 = document.getElementById("wrong2");
    let WA3 = document.getElementById("wrong3");

    CA1.addEventListener('click', function(){
        correctText();
        QuestionContainer1.classList.add("hide");
        QuestionContainer2.classList.remove("hide");
        Question2()
        console.log("testCA1")
    });
    WA1.addEventListener('click', function(){
        wrongText();
        QuestionContainer1.classList.add("hide");
        QuestionContainer2.classList.remove("hide");
        Question2()
        console.log("testWA1")
});
WA2.addEventListener('click', function(){
    wrongText();
    QuestionContainer1.classList.add("hide");
    QuestionContainer2.classList.remove("hide");
    Question2()
    console.log("testWA2")
});
WA3.addEventListener('click', function(){
    wrongText();
    QuestionContainer1.classList.add("hide");
    QuestionContainer2.classList.remove("hide");
    Question2()
    console.log("testWA3")
});
}

function Question2(){
    let CA2 = document.getElementById("correct2");
    let WA4 = document.getElementById("wrong4");
    let WA5 = document.getElementById("wrong5");
    let WA6 = document.getElementById("wrong6");

    CA2.addEventListener('click', function(){
        correctText();
        QuestionContainer1.classList.add("hide");
        QuestionContainer2.classList.remove("hide");
        Question3()
        console.log("testCA1")
    });
    WA4.addEventListener('click', function(){
        wrongText();
        QuestionContainer1.classList.add("hide");
        QuestionContainer2.classList.remove("hide");
        Question3()
        console.log("testWA1")
    });
    WA5.addEventListener('click', function(){
    wrongText();
    QuestionContainer1.classList.add("hide");
    QuestionContainer2.classList.remove("hide");
    Question3()
    console.log("testWA2")
    });
    WA6.addEventListener('click', function(){
    wrongText();
    QuestionContainer1.classList.add("hide");
    QuestionContainer2.classList.remove("hide");
    Question3()
    console.log("testWA3")
    });

    }

// function Question1(){
//     var myFunction1 = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         console.log("correct Answer");
//         correctText();
//         QuestionContainer1.classList.add("hide");
//         QuestionContainer2.classList.remove("hide");
//         Question2()
//     };
//     for (let i = 0; i < correctAnswer.length; i++) {
//         correctAnswer[i].addEventListener('click', myFunction1, false);
//         console.log("loop checkC1")
      
//     }
//     var myFunction1 = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         console.log("wrong answer")
//         wrongText();
//         QuestionContainer1.classList.add("hide");
//         QuestionContainer2.classList.remove("hide");
//         Question2()
//     };
//     for (let i = 0; i < wrongAnswer.length; i++) {
//         wrongAnswer[i].addEventListener('click', myFunction1, false);
//         console.log("loop checkW1")
        
//     }
// }
 
///////////////////////////////////////////////////////////////////////////
// function Question2(){
//     textCorrect.classList.add("hide");
//     textWrong.classList.add("hide");
//     var myFunction = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         console.log("correct Answer");
//         correctText();
//         QuestionContainer2.classList.add("hide");
//         QuestionContainer3.classList.remove("hide");
//         Question3();
//     }
//     for (var i = 0; i < correctAnswer.length; i++) {
//         correctAnswer[i].addEventListener('click', myFunction, false);
//         console.log("loop checkC2")
//     }
//     var myFunction = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         console.log("wrong answer")
//         wrongText();
//         QuestionContainer2.classList.add("hide");
//         QuestionContainer3.classList.remove("hide");
//         Question3();
//     };
//     for (var i = 0; i < wrongAnswer.length; i++) {
//         wrongAnswer[i].addEventListener('click', myFunction, false);
//         console.log("loop checkW2")
//     }
// }
///////////////////////////////////////////////////////////////////////////
// function Question3(){
//     var myFunction = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         console.log("correct Answer");
//         correctText();
//         QuestionContainer3.classList.add("hide");
//         QuestionContainer4.classList.remove("hide");
//         Question4();
//     }
//     for (var i = 0; i < correctAnswer.length; i++) {
//         correctAnswer[i].addEventListener('click', myFunction, false);
//         console.log("loop check")
//     }
//     var myFunction = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         console.log("wrong answer")
//         wrongText();
//         QuestionContainer3.classList.add("hide");
//         QuestionContainer4.classList.remove("hide");
//         Question4();
//     };
//     for (var i = 0; i < wrongAnswer.length; i++) {
//         wrongAnswer[i].addEventListener('click', myFunction, false);
//     }
//         }
///////////////////////////////////////////////////////////////////////////
// function Question4(){
//     var myFunction = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         console.log("correct Answer");
//         correctText();
//         QuestionContainer4.classList.add("hide");
//         QuestionContainer5.classList.remove("hide");
//         Question5();
//     }
//     for (var i = 0; i < correctAnswer.length; i++) {
//         correctAnswer[i].addEventListener('click', myFunction, false);
//         console.log("loop check")
//     }
//     var myFunction = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         console.log("wrong answer")
//         wrongText();
//         QuestionContainer4.classList.add("hide");
//         QuestionContainer5.classList.remove("hide");
//         Question5();
//     };
//     for (var i = 0; i < wrongAnswer.length; i++) {
//         wrongAnswer[i].addEventListener('click', myFunction, false);
//     }
//         }
///////////////////////////////////////////////////////////////////////////
// function Question5(){
//     var myFunction = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         console.log("correct Answer");
//         correctText();
//         QuestionContainer5.classList.add("hide");
//         QuestionContainer3.classList.remove("hide");
//         Final()
//     }
//     for (var i = 0; i < correctAnswer.length; i++) {
//         correctAnswer[i].addEventListener('click', myFunction, false);
//         console.log("loop check")
//     }
//     var myFunction = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         console.log("wrong answer")
//         wrongText();
//         QuestionContainer5.classList.add("hide");
//         QuestionContainer3.classList.remove("hide");
//         Final()
//     };
//     for (var i = 0; i < wrongAnswer.length; i++) {
//         wrongAnswer[i].addEventListener('click', myFunction, false);
//     }
//         }



function Final(){
    //section with score + Try Again?
    //record TIMEstamp
    console.log("TESTING FINAL");
}




//function for wrong/correct answer text!
function correctText(){
    textCorrect.classList.remove("hide"); 
   
    console.log("function correctText");
}
    //store one point in LS.  into an empty array?
function wrongText(){
    textWrong.classList.remove("hide");

    //penalty of 10seconds
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
    if(timer < 0){
        clearInterval(secs);
        Final();
    }
    },1000);
}
