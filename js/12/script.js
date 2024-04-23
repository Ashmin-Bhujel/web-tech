const Clock = new Date();

function setCookie(key, value, expiresIn) {
  Clock.setTime(Clock.getTime() + expiresIn * 24 * 60 * 60 * 1000);
  let expiryTime = Clock.toUTCString();
  let data = `${key}=${value}; expires=${expiryTime}`;
  document.cookie = data;
}

function showCookieData(cookie) {
  cookie.split(";").forEach((section) => {
    console.log(section.split("=")[1]);
  });
}

setCookie("username", "ashmin bhujel", 1);
setCookie("password", "12345678", 1);
showCookieData(document.cookie);
