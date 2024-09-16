let seconds = 0;
let timer;
let isRunning = false;
const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

const formatTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
    2,
    "0"
  )}:${String(secs).padStart(2, "0")}`;
};
timerDisplay.textContent = formatTime(seconds);
const updateTimer = () => {
  seconds++;
  timerDisplay.textContent = formatTime(seconds);
};

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  seconds = 0;
  if (timer) {
    clearInterval(timer);
  }
  timerDisplay.textContent = formatTime(seconds);
  isRunning = false;
});
