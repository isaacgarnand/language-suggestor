$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    $("#output0").hide();
    $("#output1").hide();
    $("#output2").hide();
    var answer1 = parseInt($("input#mathint").val());
    var answer2 = document.getElementById("trouble");
    var answer3 = parseInt($("#animal").val());
    var answeradd = (answer1 + answer3)
    if (answer1 > 10 || answer1 < 0) {
      alert('Please pick a number from 0-10')
    }
    else if (answeradd >= 8) {
      $("#output0").show();
    }
    else if (answer2.checked) {
      $("#output1").show();
    }
    else {
      $("#output2").show();
    }
  });
});

$(document).ready(function() {
  $(".expandable0").click(function() {
    $(".showol").fadeIn();
  });
});

$(document).ready(function() {
  $(".expandable1").click(function() {
    $("#output1").show();
  });
});