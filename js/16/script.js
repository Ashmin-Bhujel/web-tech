const aboutMe = document.querySelector("#about-me");
const button = document.querySelector("button");

button.addEventListener("click", getData);

function getData() {
  const XHR = new XMLHttpRequest();
  XHR.open("GET", "./data.txt", true);
  XHR.send();

  XHR.onload = function () {
    if (this.status === 200) {
      const data = this.responseText;
      aboutMe.innerText = data;
    } else if (this.status === 404) {
      alert("Data file not found!");
    }
  };
}
