const hourHand = document.querySelectorAll(".hand")[0];
const minuteHand = document.querySelectorAll(".hand")[1];
const secondHand = document.querySelectorAll(".hand")[2];

setInterval(clock, 1000);

function clock() {
  const date = new Date();
  const second = date.getSeconds() / 60;
  const minute = (second + date.getMinutes()) / 60;
  const hour = (minute + date.getHours()) / 12;

  secondHand.style.transform = `translate(-50%) rotate(${second * 360}deg)`;
  minuteHand.style.transform = `translate(-50%) rotate(${minute * 360}deg)`;
}

clock();
