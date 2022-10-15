const btn = document.querySelector("#advice-btn");
const patternDivider = document.querySelector(".advice__border-1 img");
const adviceNum = document.querySelector("#advice-id");
const adviceQuote = document.querySelector(".advice__quote-text");

const url = "https://api.adviceslip.com/advice";

eventListners();
function eventListners() {
  window.addEventListener("DOMContentLoaded", loadAdvice);
  btn.addEventListener("click", loadAdvice);
}

function loadAdvice() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showAdvice(data));
}

function showAdvice({ slip }) {
  console.log(slip);
  adviceNum.textContent = slip.id;
  adviceQuote.innerHTML = `&#8220; ${slip.advice} &#8221; `;
}
