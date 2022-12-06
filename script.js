const Displaytime = document.getElementById("Displaytime");
const startBtn = document.getElementById("btnStart");
const introPage = document.getElementById("intro");
var correctAnswer = document.querySelector('.correct');
var incorrectAnswer = document.querySelector('.wrong');
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
}



//function
function Question1(){
if(){
    
}
//if user selects getelementById correct
//user correct function

//else user selects getelementById wrong
//user wrong function

//move onto next question
QuestionContainer1.classList.add("hide");
QuestionContainer2.classList.remove("hide");
Question2(); 
}

function Question2(){



QuestionContainer2.classList.add("hide");
QuestionContainer3.classList.remove("hide");
Question3();
}

function Question3(){

QuestionContainer3.classList.add("hide");
QuestionContainer4.classList.remove("hide");
Question4();
}

function Question4(){

QuestionContainer4.classList.add("hide");
QuestionContainer5.classList.remove("hide");
Question5();
}


QuestionContainer4.classList.add("hide");
Final.classList.remove("hide");
function Question5(){

}




//QuestionContainer2.addEventListener('click',
//event listener for clicking on class .correct and .wrong?
//if user clicks on correct +1 point



//finish question 1 move to question 2

//finish q2 then move to q3

//finish q3 then move to q4

//finish q4 then move to q5



//.correct store score 1 point .wrong -10seconds



//function for wrong/correct answer!
correctText.on('click', function(){
correctAnswer.classList.remove("hide"); 
//store one point in LS.  
});
wrongText.on('click', function(){
incorrectAnswer.classList.remove("hide");
timer -= 10;//penalty of 10seconds
});

//timer function countdown
function timerCount(){
    secs = setInterval(() => {
    timer--;
    Displaytime.textContent = timer;
    if (timer == 0) {
        clearInterval(secs);
        //input display 
        End();
    }
    },1000);
}
