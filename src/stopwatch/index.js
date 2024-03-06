/*
 - Initially stopwatch should show 00:00:00 as in (hh:mm:ss)
 - when clicked start timer should start incrementing with 1sec
 - When paused the stopwatch should paused with the last time shown
 - When reset stopwatch should reset to 00 state 


 ## Solution Approach

 We have to update time with each second
 - We have a function that updates the time each second and that function is call on interval of 1 sec.
 - To calculate time : we count seconds from the moment the watch is started.
 - When we divide the total seconds by 3600 i.e twice by 60 then we get hours
 - For minutes we first get the remaining seconds apart fro hours and then divide it by 60
 - And last the modulo of seconds by 60 gives us remaining seconds.
*/

let START_TIME = "00:00:00";
let isRunning = false;
let seconds = 0;
let timer = null;



function padNumber(number) {
    return number < 10 ? `0${number}` : number
}
function updateDisplay() {
    let display = document.getElementById('display')
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    display.textContent = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(remainingSeconds)}`;

}

function handleWatchFunction(event) {
    let actionId = event.target.id;
    let display = document.getElementById('display');
    let lapContainer = document.getElementById('lap-container');
    if (actionId === "start") {

        if (!isRunning) {
            isRunning = true;
            timer = setInterval(() => {
                seconds++;
                updateDisplay();
            }, 1000)

        }

    }

    if (actionId === "pause") {
        isRunning = false;
        clearInterval(timer)

    }
    if (actionId === "reset") {
        clearInterval(timer);
        display.textContent = START_TIME
        lapContainer.innerHTML = ''
    }

    if (actionId === "lap") {
        if (isRunning) {
            let lapItem = document.createElement('div')
            lapItem.classList.add('lap-item')
            lapItem.textContent = display.textContent;
            lapContainer.appendChild(lapItem)
        }
    }

}


const main = () => {
    let watchFunction = document.getElementById('watch-function')
    watchFunction.addEventListener('click', handleWatchFunction);
}



main();