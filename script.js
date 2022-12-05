const Displaytime = document.getElementById("Displaytime");
const startBtn = document.getElementById("startBtn");
const resetBtn = documeent.getElementById("redo");
const QuestionContainer = document.getElementById("QuestionContainer"); //shows questions after start

startBtn.addEventListener("click", start)


function start(event){
startBtn.classList.add('hide');
}




//timer function countdown
function timer(){
    var timer = 75;
    var timerinterval = setInterval(function (){
        if(timer > 1){
            Displaytime.textContent = timer;
            timer--;
        }else {
            Displaytime.textContent = '';

            clearInterval(timetinterval);
        }
    }, 1000);
}

