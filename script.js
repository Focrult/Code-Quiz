const Displaytime = document.getElementById("Displaytime");
const startBtn = document.getElementById("btnStart");
const introPage = document.getElementById("intro");
var correctAnswer = document.querySelector('.correct');
var wrongAnswer = document.querySelector('.wrong');
var timer = 75;
const QuestionContainer1 = document.getElementById("question1-container"); //shows questions after start
const QuestionContainer2 = document.getElementById("question2-container");
const QuestionContainer3 = document.getElementById("question3-container");
const QuestionContainer4 = document.getElementById("question4-container");
const QuestionContainer5 = document.getElementById("question5-container");
startBtn.addEventListener('click', StartQuiz);
// QuestionContainer1.addEventListener('click', Question1);
// QuestionContainer2.addEventListener('click', Question2);
// QuestionContainer3.addEventListener('click', Question3);
// QuestionContainer4.addEventListener('click', Question4);
// QuestionContainer5.addEventListener('click', Question5);

function StartQuiz(){
startBtn.classList.add("hide");
introPage.classList.add("hide");
QuestionContainer1.classList.remove("hide");
timerCount();
Question1();
}



//function
function Question1(){
correctAnswer.addEventListener('click', function(){

correctText();
QuestionContainer1.classList.add("hide");
QuestionContainer2.classList.remove("hide");
Question2(); 
console.log("testRight");
});

wrongAnswer.addEventListener('click', function(){
    wrongText();
    QuestionContainer1.classList.add("hide");
    QuestionContainer2.classList.remove("hide");
    Question2(); 
    console.log("testWrong");
    });
}
///////////////////////////////////////////////////////////////////////////
function Question2(){
    correctAnswer.addEventListener('click', function(){

        correctText();
        QuestionContainer2.classList.add("hide");
        QuestionContainer3.classList.remove("hide");
        Question3(); 
        console.log("testRight");
        });
        
        wrongAnswer.addEventListener('click', function(){
            wrongText();
            QuestionContainer2.classList.add("hide");
            QuestionContainer3.classList.remove("hide");
            Question3(); 
            console.log("testWrong");
            });
        }
///////////////////////////////////////////////////////////////////////////
function Question3(){
    correctAnswer.addEventListener('click', function(){
        correctText();
        QuestionContainer3.classList.add("hide");
        QuestionContainer4.classList.remove("hide");
        Question4(); 
        console.log("testRight");
        });
        wrongAnswer.addEventListener('click', function(){
        wrongText();
        QuestionContainer3.classList.add("hide");
        QuestionContainer4.classList.remove("hide");
        Question4(); 
        console.log("testWrong");
         });
        }
///////////////////////////////////////////////////////////////////////////
function Question4(){
    correctAnswer.addEventListener('click', function(){
        correctText();
        QuestionContainer4.classList.add("hide");
        QuestionContainer5.classList.remove("hide");
        Question5(); 
        console.log("testRight");
        });
        wrongAnswer.addEventListener('click', function(){
        wrongText();
        QuestionContainer4.classList.add("hide");
        QuestionContainer5.classList.remove("hide");
        Question5(); 
        console.log("testWrong");
         });
        }
///////////////////////////////////////////////////////////////////////////
function Question5(){
    correctAnswer.addEventListener('click', function(){
        correctText();
        QuestionContainer5.classList.add("hide");
        QuestionContainer5.classList.remove("hide");
        Final(); 
        console.log("testRight");
        });
        wrongAnswer.addEventListener('click', function(){
        wrongText();
        QuestionContainer5.classList.add("hide");
        QuestionContainer5.classList.remove("hide");
        Final(); 
        console.log("testWrong");
         });
        }




//QuestionContainer2.addEventListener('click',
//event listener for clicking on class .correct and .wrong?
//if user clicks on correct +1 point

function Final(){
    console.log("TESTING FINAL");
}




//function for wrong/correct answer text!
function correctText(){
    correctAnswer.classList.remove("hide"); 
    return;
}
    //store one point in LS.  into an empty array?
function wrongText(){
    wrongAnswer.classList.remove("hide");
    timer -= 10;//penalty of 10seconds
    return;
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
