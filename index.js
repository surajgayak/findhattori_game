const square = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.getElementById("score");
const time = document.getElementById("time");
let result = 0;
let timecount = 30;

function rand() {
  square.forEach((res) => {
    res.classList.remove("mole");
  });
  let randoms = square[Math.floor(Math.random() * 9)];
  randoms.classList.add("mole");
  hitposition = randoms.id;
}
square.forEach((res) => {
  res.addEventListener("click", () => {
    if (res.id == hitposition) {
      result++;
      score.innerText = result;
      hitposition = null;
    }
  });
});

function timeCountDown() {
  timecount--;
  time.innerText = timecount;
  if (timecount == 0) {
    clearInterval(timing);
    alert("Your time is out and your score is " + result);
    location.reload();
  }
}

const timing = setInterval(timeCountDown, 1000);
const okk = setInterval(rand, 500);
