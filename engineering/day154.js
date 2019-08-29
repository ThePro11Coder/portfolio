var canvas;
var context;
var width;
var height;
var offset = 0;
var acc = 0;
var PI2 = Math.PI * 2;
var lineDisplacement = 30;

window.onload = function()
{
	canvas = document.getElementById('canvas');
  canvas.style.width = window.innerWidth + "px";
  setTimeout(function() {
  canvas.style.height = window.innerHeight + "px";
}, 0);
  
	context = canvas.getContext('2d');
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;

	loop();
};

function loop()
{
	drawSineWave();

	requestAnimationFrame(loop);
}

function drawSineWave()
{
	var i = 0;
	var length = PI2;

  context.fillStyle = "#F3F0D1";
  context.fillRect(0, 0, width, height);
	context.strokeStyle = 'red';
	context.beginPath();
	context.moveTo(0, Math.sin(i + offset) * Math.cos(acc) + (height >> 1));

	for(i; i < length; i += 0.2)
	{
		context.lineWidth = Math.sin(acc) * 40 + 60;
		context.lineTo((i / PI2) * width, Math.sin(i + offset) * lineDisplacement + (height >> 1));
		context.stroke();
	}

	offset += Math.cos(acc) * 0.08 + 0.14;
	acc += 0.01;
}