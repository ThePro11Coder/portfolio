var clickNumR =0;
var clickNum = 0;
var clickNumB = 0;
$(function() {
  
  $("#clickRed").on('click', function() {
    if (clickNumR>=255) clickNumR = 0;
    clickNumR += 5;
    $("#output").css('background-color', "rgb("+clickNumR+"," + clickNum + "," + clickNumB + ")");
    $(this).text(clickNumR);
  });
  
  $("#clickGreen").on('click', function() {
    if (clickNum>=255) clickNum = 0;
    clickNum += 5;
    $("#output").css('background-color', "rgb("+clickNumR+"," + clickNum + "," + clickNumB + ")");
    $(this).text(clickNum);
  });

  $("#clickBlue").on('click', function() {
    if (clickNumB>=255) clickNumB = 0;
    clickNumB += 5;
    $("#output").css('background-color', "rgb("+clickNumR+"," + clickNum + "," + clickNumB + ")");
    $(this).text(clickNumB);
  });
  
});

