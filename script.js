const Displaytime = document.getElementById("Displaytime");
const startBtn = document.getElementById("btnStart");
const introPage = document.getElementById("intro");
const textCorrect = document.getElementById("correct-text");
const textWrong = document.getElementById("wrong-text");
let timer = 75;
var score = 0;
var seconds;
const QuestionContainer1 = document.getElementById("question1-container"); //shows questions after start
const QuestionContainer2 = document.getElementById("question2-container");
const QuestionContainer3 = document.getElementById("question3-container");
const QuestionContainer4 = document.getElementById("question4-container");
const QuestionContainer5 = document.getElementById("question5-container");
const FinalContainer = document.getElementById("final-container");
var initialInput = document.querySelector("#initials");
var submitBtn2 = document.querySelector("#submitBtn");
var submitBtn = document.querySelector("#msg");
var initialSpan = document.querySelector("#user-initials");
var scoreSpan = document.querySelector("#user-score");
var currentScoreSpan = document.querySelector("#current-score");
const cardbody = document.getElementById("card-body");

/////////////////////////////////////////
startBtn.addEventListener('click', StartQuiz);
function StartQuiz(){ //removes first page and initiates Question 1
startBtn.classList.add("hide");
introPage.classList.add("hide");
QuestionContainer1.classList.remove("hide");
timerCount();
Question1();
console.log("passing function in StartQuiz");
}
///////////////////////////////
function Question1(){//question 1
    let CA1 = document.getElementById("correct1");
    let WA1 = document.getElementById("wrong1");
    let WA2 = document.getElementById("wrong2");
    let WA3 = document.getElementById("wrong3");

    CA1.addEventListener('click', function(){//correct answer
    QuestionContainer1.classList.add("hide");
    QuestionContainer2.classList.remove("hide");
    Question2()
    console.log("testCA1")
    score += 1;
});
    WA1.addEventListener('click', function(){
    wrongText()
    QuestionContainer1.classList.add("hide");
    QuestionContainer2.classList.remove("hide");
    Question2()
    console.log("testWA1")
});
    WA2.addEventListener('click', function(){
    wrongText()
    QuestionContainer1.classList.add("hide");
    QuestionContainer2.classList.remove("hide");
    Question2()
    console.log("testWA2")
});
    WA3.addEventListener('click', function(){
    wrongText()
    QuestionContainer1.classList.add("hide");
    QuestionContainer2.classList.remove("hide");
    Question2()
    console.log("testWA3")
});
}
///////////////////////////////
function Question2(){//question 2
    let CA2 = document.getElementById("correct2");
    let WA4 = document.getElementById("wrong4");
    let WA5 = document.getElementById("wrong5");
    let WA6 = document.getElementById("wrong6");
    textWrong.classList.add("hide");
    CA2.addEventListener('click', function(){//correct answer
    QuestionContainer2.classList.add("hide");
    QuestionContainer3.classList.remove("hide");
    Question3()
    console.log("testCA2")
    score += 1;
});
    WA4.addEventListener('click', function(){
    wrongText()
    QuestionContainer2.classList.add("hide");
    QuestionContainer3.classList.remove("hide");
    Question3()
    console.log("testWA1")
});
    WA5.addEventListener('click', function(){
    wrongText()
    QuestionContainer2.classList.add("hide");
    QuestionContainer3.classList.remove("hide");
    Question3()
    console.log("testWA2")
});
    WA6.addEventListener('click', function(){
    wrongText()
    QuestionContainer2.classList.add("hide");
    QuestionContainer3.classList.remove("hide");
    Question3()
    console.log("testWA3")
});
}
    ///////////////////////////////
function Question3(){//question 3
    let CA3 = document.getElementById("correct3");
    let WA7 = document.getElementById("wrong7");
    let WA8 = document.getElementById("wrong8");
    let WA9 = document.getElementById("wrong9");
    
    CA3.addEventListener('click', function(){//correct answer
    QuestionContainer3.classList.add("hide");
    QuestionContainer4.classList.remove("hide");
    score += 1;
    Question4()
    console.log("testCA3")
});
    WA7.addEventListener('click', function(){
    wrongText()
    QuestionContainer3.classList.add("hide");
    QuestionContainer4.classList.remove("hide");
    Question4()
    console.log("testWA1")
});
    WA8.addEventListener('click', function(){
    wrongText()
    QuestionContainer3.classList.add("hide");
    QuestionContainer4.classList.remove("hide");
    Question4()
    console.log("testWA2")
});
    WA9.addEventListener('click', function(){
    wrongText()
    QuestionContainer3.classList.add("hide");
    QuestionContainer4.classList.remove("hide");
    Question4()
    console.log("testWA3")
});
}
        ///////////////////////////////
    function Question4(){//question 4
    let CA4 = document.getElementById("correct4");
    let CA45 = document.getElementById("correct45");
    let WA10 = document.getElementById("wrong10");
    let WA11 = document.getElementById("wrong11");
        
    CA4.addEventListener('click', function(){//correct answer
    QuestionContainer4.classList.add("hide");
    QuestionContainer5.classList.remove("hide");
    score += 1;
    Question5()
    console.log("testCA4")  
});
    CA45.addEventListener('click', function(){//correct answer 
    QuestionContainer4.classList.add("hide");
    QuestionContainer5.classList.remove("hide");
    score += 1;
    Question5()
    console.log("testCA1")     
});
    WA10.addEventListener('click', function(){
    wrongText()
    QuestionContainer4.classList.add("hide");
    QuestionContainer5.classList.remove("hide");
    Question5()
    console.log("testWA1")
});
    WA11.addEventListener('click', function(){
    wrongText()
    QuestionContainer4.classList.add("hide");
    QuestionContainer5.classList.remove("hide");
    Question5()
    console.log("testWA2")
});
}
///////////////////////////////
        function Question5(){ //question 5
        let CA5 = document.getElementById("correct5");
        let WA13 = document.getElementById("wrong13");
        let WA14 = document.getElementById("wrong14");
        let WA15 = document.getElementById("wrong15");
            
        CA5.addEventListener('click', function(){//correct answer 
        QuestionContainer5.classList.add("hide");
        QuestionContainer2.classList.remove("hide");  
        console.log("testCA5")
        score += 1;
        Final()
});
        WA13.addEventListener('click', function(){
        wrongText()
        QuestionContainer5.classList.add("hide");
        QuestionContainer2.classList.remove("hide");
        Final()
        console.log("testWA1")
});
        WA14.addEventListener('click', function(){
        wrongText()
        QuestionContainer5.classList.add("hide");
        QuestionContainer2.classList.remove("hide");
        Final()
});
        WA15.addEventListener('click', function(){
        wrongText()
        QuestionContainer5.classList.add("hide");
        QuestionContainer2.classList.remove("hide");
        Final()
        console.log("testWA3")
});
}
/////////////////////////////////////
function Final(){ //final page - includes restart, scores, initial submission, etc.
    QuestionContainer1.classList.add("hide");
    QuestionContainer2.classList.add("hide");
    QuestionContainer3.classList.add("hide");
    QuestionContainer4.classList.add("hide");
    QuestionContainer5.classList.add("hide");
    FinalContainer.classList.remove("hide");
    
    //To view end score
    currentScoreSpan.textContent = score;
    cardbody.classList.remove("hide");

    clearInterval(seconds);
    previousScore();
    console.log(Displaytime);
    startBtn.innerText = 'Restart Quiz';
    startBtn.classList.remove("hide");
    startBtn.addEventListener('click', function(){ 
       location.reload(); //reload page + timer
});
}
////////////////////////////////////////////////
function displayMessage(type, message){
    submitBtn.textContent = message;
    submitBtn.setAttribute("class", type);
}
function previousScore(){
    var initials = localStorage.getItem("initials");
    var prescore = localStorage.getItem("score");
    if(!initials || !prescore){
        return;
    }
    initialSpan.textContent = initials;
    scoreSpan.textContent = prescore;
}
submitBtn2.addEventListener("click", function(event){
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    // var prescore = document.querySelector("#score").value;
    if(initials === ""){
        displayMessage("error", "Please enter your initials");
    }else{
        displayMessage("Info Recorded!");
        localStorage.setItem("initials", initials);
        localStorage.setItem("score", score);
        previousScore();
        location.reload();
    }
});
//function for wrong/correct answer text!
function correctText(){
    textCorrect.classList.remove("hide"); 
    console.log("function correctText");
}
function wrongText(){
    timer -= 10;
    //penalty of 10seconds
    console.log("function wrongText");
}
    //timer function countdown
function timerCount(){
    seconds = setInterval(function() {
    timer--;//decrement seconds
    Displaytime.textContent = timer;
    if (timer === 0) {
        clearInterval(seconds);
        Final();
    }
    if(timer < 0){
        clearInterval(seconds);
        Final();
    }
    },1000);
}
