$(document).ready(() => {
  $("#show").click(() => {
    $("#heading-1").slideDown();
  });

  $("#hide").click(() => {
    $("#heading-1").slideUp();
  });

  $("#change-color").click(() => {
    $("body").toggleClass("dark-background");
  });
});
