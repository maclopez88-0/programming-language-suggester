$(document).ready(function() {
  $("form#programs").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const season = $("#season").val();
    const avatar = $("#avatar").val();
    const hand = $("#hand").val();

    // if (season === "Fall" || "Summer" || "Winter" && avatar === "Air Nomads" || "Water Tribe" || "Fire Nation" || "Earth Kingdom" && hand === "Left handed") {
    //   alert("You may want to take up Python!");
    // }
    // else if (season === "Fall" || "Summer" || "Winter" && avatar === "Air Nomads" || "Water Tribe" || "Fire Nation" || "Earth Kingdom" && hand === "Right handed") {
    //   alert("You may want to look into C#");
    // }
    // else (season === "spring" && hand === "Right handed" || "Left handed"); {
    //   alert(", according to our calculations, Ruby is right for you!");
    // }

    if (season === "Spring" && hand === "Left handed") {
      alert("You may want to take up Python!");
    }
    else if (season === "Summer") {
      alert("You may want to look into C#");
    }
    else if (season === "Fall" || "Winter" && hand === "Left handed") {
      alert(", according to our calculations, Ruby is right for you!");
    }
    else {
      alert("Please contact the Admin.");
    }
  })
});