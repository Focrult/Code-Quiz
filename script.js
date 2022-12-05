const Displaytime = document.getElementById("Displaytime");
const startBtn = document.getElementById("btnStart");
const introPage = document.getElementById("intro");
const QuestionContainer1 = document.getElementById("question1-container"); //shows questions after start
const QuestionContainer2 = document.getElementById("question2-container");
startBtn.addEventListener('click', StartQuiz);

function StartQuiz(){
startBtn.classList.add("hide");
introPage.classList.add("hide");
QuestionContainer1.classList.remove("hide");
timer();
}

//questions cycles through
function question(){

}











//timer function countdown
function timer(){
    var timer = 75;
    var timerinterval = setInterval(function (){
        if(timer > 1){
            Displaytime.textContent = timer;
            timer--;
        }     
        else {
            Displaytime.textContent = '';
            clearInterval(timerinterval);
        }
    }, 1000);
}

