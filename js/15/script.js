const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const age = document.querySelector("#age");
const address = document.querySelector("#address");
const button = document.querySelector("button");

button.addEventListener("click", getData);

function getData() {
  const XHR = new XMLHttpRequest();
  XHR.open("GET", "./student.json", true);
  XHR.send();

  XHR.onload = function () {
    if (this.status === 200) {
      const studentData = JSON.parse(this.response);
      showData(studentData);
    } else if (this.status === 404) {
      alert("JSON file not found!");
    }
  };
}

function showData(studentData) {
  firstName.innerText = studentData.firstName;
  lastName.innerText = studentData.lastName;
  age.innerText = studentData.age;
  address.innerText = studentData.address;
}
