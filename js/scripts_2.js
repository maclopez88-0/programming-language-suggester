$(document).ready(function() {
  $("form#programs").submit(function(event) {
    const name = $("input#name").val();
    const season = $("#season").val();
    const avatar = $("#avatar").val();
    const randomNumber = parseInt($("input#randomNumber").val());
    const hand = $("select#hand").val();


    if (season === "Fall" || "Summer" || "Winter" && astrologySign === "Cancer") {
      alert("Based on your answers, we have calculated that Python is your best match.");
    } else {
      alert("Ruby is calling your name")
    }
    event.preventDefault();
  });
});