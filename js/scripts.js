$(document).ready(function() {
  $("form#programs").submit(function(event) {
    event.preventDefault();
    const name = $("#nameInput").val();
    const season = $("#season").val();
    const avatar = $("#avatar").val();
    const hand = $("#hand").val();
    let result;

    if ((hand === "Left handed" && season === "Spring") || (hand === "Left handed" && season === "Summer")) {
      result = ("You may want to take up Python");
    }
    else if (hand === "Right handed" && season === "Spring" || hand === "Right handed" && season === "Summer") {
      result = ("You may want to look into C#");
    }
    else if (season === "Fall" || "Winter") {
      result = ("According to our calculations, Ruby is right for you!");
    }
    else {
      result = ("Please contact the admin.");
    }
    $("#output").text(result);
  });
});