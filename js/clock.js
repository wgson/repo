const clock = document.querySelector("h2#clock");
clock.style.textAlign = "left";
clock.style.color = "white";

function getClock() {
  const date = new Date();
  const year = String(date.getFullYear()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDay()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  const date_msg = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  clock.innerText = date_msg;
}

getClock();
setInterval(getClock, 1000);
