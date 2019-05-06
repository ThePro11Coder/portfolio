var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    pixelSize = 15,
    colors = 10;

canvas.addEventListener("click", draw, false);

var colorCount = 0;
while (colorCount < colors) {
  colorCount++;
  var colorBlock = document.getElementsByClassName('color' + colorCount);
  colorBlock[0].addEventListener("click", selectColor, false);
}

function draw(e) {
  var pixel = getPixelSelected(e);
  context.fillRect(pixel['x'], pixel['y'], pixelSize, pixelSize);
}

function getPixelSelected(e) {
  var rect = canvas.getBoundingClientRect(),
      pixel = new Array;
  
  pixel['x'] = Math.floor((e.clientX - rect.left)/pixelSize) * pixelSize;
	pixel['y'] = Math.floor((e.clientY - rect.top)/pixelSize) * pixelSize;
  
  return pixel;
}

function selectColor(e) {
  context.fillStyle = document.defaultView.getComputedStyle(e.target,null)['backgroundColor'];
}