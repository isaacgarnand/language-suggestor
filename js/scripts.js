$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var mathInteger = parseInt($("input#mathint").val());
    var myProblem = document.getElementById("trouble");
    var animals = parseInt($("#animal").val());
    var frustration = (mathInteger + animals)
    if (frustration >= 8) {
      $("#output0").show();
    }
    else if (myProblem.checked) {
      $("#output1").show();
    }
    else {
      $("#output2").show();
    }
  });
});

$(document).ready(function() {
  $(".expandable0").click(function() {
    $(".showham").fadeIn();
  });
});

$(document).ready(function() {
  $(".expandable1").click(function() {
    $("#output1").show();
  });
});