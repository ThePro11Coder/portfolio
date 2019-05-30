var $canvas = $("canvas")[0];
var bubbles = 10;
var init = '';
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

$(function() {
	resize();
	draw();
	
	$(window).resize(resize);
});

function draw() {	
	var ctx = $canvas.getContext("2d");

	var cmy = random(1, 4);
	
	if(cmy == 1){
		ctx.fillStyle = "tomato";
	}
	if(cmy == 2){
		ctx.fillStyle = "gold";
	}
	if(cmy == 3){
		ctx.fillStyle = "dodgerblue";
	}
	
	if(random(0, 100) > 75) {
		ctx.globalCompositeOperation = "screen";
	} else {
		ctx.globalCompositeOperation = "multiply";
	}
		
	ctx.beginPath();

	var cx = width * random(0, 100) / 100;
	var cy = height * random(0, 100) / 100;
	var size = random(10, width/20); 
 	
	ctx.arc(cx, cy, size, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();	

	init = requestAnimationFrame(draw);
}



function random(min, max) {
  var range = max - min;
  var random = (Math.random() * range) + min;
  var round = Math.floor(random);

  return round;
}


function resize() {	
	cancelAnimationFrame(init);

	width = $(window).width();
 	height = $(window).height();
	
	$("canvas").attr({
		"width" : width,
		"height" : height
	});
	
	draw();	
}


