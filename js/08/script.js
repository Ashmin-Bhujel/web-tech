const time = document.querySelector("#time");

window.addEventListener("DOMContentLoaded", () => {
  let h = 0;
  let m = 0;
  let s = 0;

  setInterval(() => {
    const Clock = new Date();
    h = Clock.getHours();
    m = Clock.getMinutes();
    s = Clock.getSeconds();
    showTime(h, m, s);
  }, 0);
});

function showTime(h, m, s) {
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  postfix = h < 12 ? "AM" : "PM";
  time.innerText = `${h}:${m}:${s} ${postfix}`;
}
