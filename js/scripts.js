$(document).ready(function() {
  $("form#programs").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const season = $("#season").val();
    const avatar = $("#avatar").val();
    const hand = $("#hand").val();

    if ((hand === "Left handed" && season === "Spring") || (hand === "Left handed" && season === "Summer")) {
      alert("You may want to take up Python");
    }
    else if (hand === "Right handed" && season === "Spring" || hand === "Right handed" && season === "Summer") {
      alert("You may want to look into C#");
    }
    else if (season === "Fall" || "Winter") {
      alert("According to our calculations, Ruby is right for you!");
    }
    else {
      alert("Please contact the admin.");
    }
  })
});