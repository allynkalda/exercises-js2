function setAlarm() {
  let seconds = document.getElementById("alarmSet").value;
  document.getElementById("alarmSet").value = '';
  const formattedNumber = (myNumber) => ("0" + myNumber).slice(-2);
  const setSeconds = () => {
    seconds--;
    document.getElementById("timeRemaining").innerHTML = `Time Remaining: 00:${formattedNumber(seconds)}`;
    if (seconds === 0) {
      clearInterval(idInterval);
    }
  };
  const idInterval = setInterval(setSeconds, 1000);
  
  const setAlarmSeconds = () => {
    playAlarm();
    document.body.style.color = "white";
    document.body.style.backgroundColor = "red";
  }
  setTimeout(setAlarmSeconds, seconds * 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
