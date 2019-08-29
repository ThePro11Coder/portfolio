$(function(){
  var redSlider = $("#red");
  var greenSlider = $("#green");
  var blueSlider = $("#blue");
  var redInput = $("#redInput");
  var greenInput = $("#greenInput");
  var blueInput = $("#blueInput");
  var redVal;
  var greenVal;
  var blueVal;
  
  function changeColor(){
    var red = redVal;
    var green = greenVal;
    var blue = blueVal;
    
    $('#colorBox').css({
  backgroundColor: 'rgb('+red+','+green+','+blue+')'
    });
    
  }
  
  redSlider.on("input change", function(){
    redVal = $(this).val();
    redInput.val(redVal);
    changeColor();
  });
  redInput.on("change", function(){
    redVal = $(this).val();
    $("#red").val(redVal);
    changeColor();
  });
  
  greenSlider.on("input change", function(){
    greenVal = $(this).val();
    greenInput.val(greenVal);
    changeColor();
  });
  greenInput.on("change", function(){
    greenVal = $(this).val();
    $("#green").val(greenVal);
    changeColor();
  });
  
  blueSlider.on("input change", function(){
    blueVal = $(this).val();
    blueInput.val(blueVal);
    changeColor();
  });
  blueInput.on("change", function(){
    blueVal = $(this).val();
    $("#blue").val(blueVal);
    changeColor();
  });
  
  $(".button").on("click", function(){
    var randRed = Math.floor(Math.random()*255);
    var randGreen = Math.floor(Math.random()*255);
    var randBlue = Math.floor(Math.random()*255);
    
    redInput.val(randRed);
    redSlider.val(randRed);
    
    greenInput.val(randGreen);
    greenSlider.val(randGreen);
    
    blueInput.val(randBlue);
    blueSlider.val(randBlue);
    
    $("#colorBox").css({
      backgroundColor:"rgb("+randRed+","+randGreen+","+randBlue+")"
    })
  })
  
  $("#colorBox").on("click", function(){
    var output = $(this).css("background-color");
    $(".rgb").html(output); 
    
    var color = '';

   var hexcolor = $(this).css('backgroundColor');
   hexc(hexcolor);


function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');

  $(".hex").html(color);
}
  })
  
})