var duration = 300;
var timeDisplay = document.getElementById('timer');
var timer = setInterval(updateTimer, 300000);
console.log("You have 5 minutes")

function updateTimer() {
    var minutes = Math.floor(duration / 60);
    var seconds = duration % 60;
    var displayString = '';
    if (minutes < 1) {
        displayString += '0';
    }
    displayString += minutes + ':';
    if (seconds < 10) {
        displayString += '0';
    }
    displayString += seconds;
    timeDisplay.textContent = displayString;
    duration--;
    if (duration < 0) {
        clearInterval(timer);
        alert('Your time is up!');
    }
}

