$(document).ready(function() {
  $("form#programs").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const season = $("#season").val();
    const avatar = $("#avatar").val();
    const hand = $("select#hand").val();

    if (season === "Fall" || "Summer" || "fall" && avatar === "Air Nomads" || "Water Tribe" || "Fire Nation" || "Earth Kingdom" && hand === "Left handed") {
      alert("You may want to take up Python!");
    }
    else if (season === "Fall" || "Summer" || "fall" && avatar === "Air Nomads" || "Water Tribe" || "Fire Nation" || "Earth Kingdom" && hand === "Right handed") {
      alert("You may want to look into C#");
    }
    else (season === "spring" && avatar === "Air Nomads" || "Water Tribe" || "Fire Nation" || "Earth Kingdom" && hand === "Right handed" || "Left handed") {
      alert("According to our calculations, Ruby is right for you!");
    }
  });
});