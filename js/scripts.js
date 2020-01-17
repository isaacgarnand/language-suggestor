$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    
    var mathIntger = parseInt($("input#mathint").val());
    var myProblem = $("input:radio:[name=problem]:checked").val();
    var animals = parseInt($("#animal").val());

    var frustration = (mathIntger + animals);

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