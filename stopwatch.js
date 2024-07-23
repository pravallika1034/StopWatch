let seconds = 0;
let min = 0;
let hour = 0;
function stopwatch() {

    seconds++;
    if (seconds == 60) {

        min++;
        seconds = 0;
        if (min == 60) {
            hour++;
            min = 0;

        }

    }
    document.getElementById('time').innerText = `${seconds}:${min}:${hour}`
}

let startbtn = document.getElementById("start-timer")
let stopbtn = document.getElementById("stop-timer")
let resetbtn = document.getElementById("reset-timer")
startbtn.addEventListener('click', function () {
    sw = setInterval(stopwatch, 1000)
});
stopbtn.addEventListener('click', function () {
    clearInterval(sw)
});