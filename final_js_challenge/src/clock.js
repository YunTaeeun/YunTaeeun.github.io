const clockh2 = document.querySelector("div#clock h2");
const clockh1 = document.querySelector("div#clock h1");

function getclock() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clockh2.innerText = `${year}년 ${month}월 ${day}일`;
  clockh1.innerText = `${hours}:${minutes}:${second}`;
}

getclock();
setInterval(getclock, 1000);
