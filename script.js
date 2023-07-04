const pauseBtn = document.querySelector("#pauseBtn");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const displayTime = document.querySelector(".displayTime");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
let paused = true;
let intervalId;


startBtn.addEventListener("click" , () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(update ,1000);
    }
    
    
});
pauseBtn.addEventListener("click" , () => {
    if(!paused){
        paused = true;
        clearInterval(intervalId);
        displayTime.textContent = `${hrs}: ${mins}: ${secs}`;
    }
});
resetBtn.addEventListener("click" , () => {
    hrs = "0"+ 0;
    mins =  "0"+ 0;
    secs =  "0"+ 0;
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    clearInterval(intervalId);
    displayTime.textContent = `${hrs}: ${mins}: ${secs}`;
});


function update() {
   elapsedTime = Date.now() - startTime;
   hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
   mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
   secs = Math.floor((elapsedTime / 1000) % 60);
   
   hrs = pad(hrs);
   mins = pad(mins);
   secs = pad(secs);

   displayTime.textContent = `${hrs}: ${mins}: ${secs}`;
   function pad(unit) {
      return ("0"+ unit).length > 2 ? unit : "0" + unit;
   }
}