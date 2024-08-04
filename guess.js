let guessNumberElement = document.getElementById("guessNumber");
let randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum);
let gameResult = document.getElementById("gameResult");
let reStartBtn=document.getElementById("reStartBtn");
let count=0;
let scoreEle=document.getElementById("scoreEle");

function checkGuess() {
    let guessedNumber = parseInt(guessNumberElement.value);
    if (guessedNumber > randomNum) {
        gameResult.textContent = "Too High,Try again!!";
        gameResult.style.backgroundColor = "#1e217c"
    } else if (guessedNumber < randomNum) {
        gameResult.textContent = "Too Low,Try again!!";
        gameResult.style.backgroundColor = "#1e217c"
    } else if (guessedNumber === randomNum) {
        gameResult.textContent = "Congragulations!! You got it right.";
        randomNum = Math.ceil(Math.random() * 100);
        console.log(randomNum);
        count+=1
        scoreEle.textContent=count;
        gameResult.style.backgroundColor = "green"
    } else {
        gameResult.textContent = "Provide a valid input";
        gameResult.style.backgroundColor = "#1e217c"
    }
    guessNumberElement.value="";
}

reStartBtn.onclick=function(){
    count=0
    scoreEle.textContent=count;
    guessNumberElement.value="";
    gameResult.textContent="";
    gameResult.style.backgroundColor = "#246db6";
}