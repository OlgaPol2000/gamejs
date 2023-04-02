// 1 при нажатті на кнопку старт, має відбутись скролл
// 1.1 знайти кнопку
//1.2 слухати взаємодію
//1.2 знайити наші скріни
//2 при нажатті на кнопку вибору часу скрол вниз
//2.1 записати в змінні кнпоки часу

const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
const reload = document.querySelector(".game__new");
let time = 0;

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time__btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
  console.log(time);
});
function startGame() {
  setInterval(decreaseTime, 1000);
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {}
reload.addEventListener("click", () => {
  location.reload();
});
