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
        intervalId = setInterval(update ,75);
    }
    
    
});
pauseBtn.addEventListener("click" ,);
resetBtn.addEventListener("click" ,);


function update() {
   elapsedTime = Date.now() - startTime;
   hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
   mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
   secs = Math.floor((elapsedTime / 1000) % 60);
   displayTime.innerHTML = `${hrs}: ${mins}: ${secs}`;
}