// for digital clock 
function timing(){
const timer = document.getElementById("time");
const now = new Date();
const IndianTime = now.toLocaleTimeString();
timer.innerHTML=IndianTime;
}

setInterval(timing,1000);

// for stopwatch

const startBtn = document.getElementById("one");
const stopBtn = document.getElementById("two");
const resetBtn = document.getElementById("three");

const display = document.getElementById("display");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay() {
    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");

    display.innerText = `${h}:${m}:${s}`;
}

startBtn.addEventListener("click", function () {

    if (timer !== null) return;

    timer = setInterval(function () {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);

});

stopBtn.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

});

resetBtn.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

});