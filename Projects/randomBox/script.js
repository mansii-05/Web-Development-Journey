const btn = document.querySelector("button");
const main = document.querySelector("main");
const timer = document.querySelector("#timer");
const scoree = document.querySelector("#score");

const box = document.createElement("div");

const over = document.querySelector("#over");

box.classList.add("box");

let interval;
let time;
let score;

// generate random boxes
const randombox = function () {
  main.appendChild(box);
  
  clicked = false; //resets the flag
  let mainH = main.clientHeight - box.offsetHeight; //to keep the box within boundary
  let mainW = main.clientWidth - box.offsetWidth;

  const X = Math.floor(Math.random() * mainH);
  const Y = Math.floor(Math.random() * mainW);

  time += 1;
  timer.textContent = time;

  box.style.top = `${X}px`;
  box.style.left = `${Y}px`;
  box.style.backgroundColor = randomColor();
};

//generate random colour
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

box.addEventListener('click', () => {
// If already clicked, do nothing
if (clicked) return;

clicked = true
  score += 1;
  scoree.textContent = score;
});

btn.addEventListener("click", () => {

  clearInterval(interval); //to clear the interval on every click

  //disable button while game is running
  btn.disabled = true;
  btn.textContent = "Game ON.."

  time = 0;
  score = 0;

  interval = setInterval(() => {
    randombox();
  }, 1000);

   //Game ends after 10s
  setTimeout(() => {
    clearInterval(interval);
    over.style.display = "flex";

        //reset after 5s
        setTimeout(() =>{
            btn.disabled = false;
            btn.textContent = "Start"

            over.style.display = "none"

            timer.textContent= 0;
            scoree.textContent = 0;

        }, 5000)

  }, 10000);
});
