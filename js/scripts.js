$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    
    var mathInteger = parseInt($("input#mathint").val());
    var myProblem = document.getElementsByName("problem");
    var animals = parseInt($("#animal").val());

    var frustration = (mathInteger + animals)

    if (frustration >= 8) {
      $("#output0").show();
    }
    else if (frustration < 8 && myProblem === 'trouble') {
      $("#output1").show();
    }
    else {
      $("#output2").show();
    }




    




  });
});