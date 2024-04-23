const car = $("#car");

$(document).ready(() => {
  $("#forward").click(() => {
    car.animate({ left: "+=80vw" }, "slow");
  });

  $("#stop").click(() => {
    car.stop();
  });

  $("#reverse").click(() => {
    car.animate({ left: "-=80vw" }, "slow");
  });
});
