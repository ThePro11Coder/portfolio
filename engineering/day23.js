var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.fillStyle = "white";

canvas.width = window.innerWidth;
canvas.height = 680;

var radius = 10;
var dragging = false;

context.lineWidth = radius *2;

var putPoint = function(e) {
   if(dragging) { 
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
   }

}


var engage = function(e) {
  dragging = true;
  putPoint(e); 
}

var disengage = function() {
  dragging = false;
  context.beginPath(); 
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove',putPoint);
canvas.addEventListener('mouseup', disengage);

var setRadius = function(newRadius) {
  if(newRadius < minRad) {
    newRadius = minRad;
  } else if(newRadius > maxRad) {
    newRadius = maxRad;
  }
  radius = newRadius;
  context.lineWidth = radius * 2;
  
  radSpan.innerHTML = radius;
}

var minRad = 5;
var maxRad = 100;
var defaultRad = 20;
var interval = 5;
var radSpan = document.getElementById('radVal');
var decRad = document.getElementById('decRad');
var incRad = document.getElementById('incRad');

decRad.addEventListener('click',function(){
  setRadius(radius-interval);
});

incRad.addEventListener('click',function(){
  setRadius(radius+interval);
})

setRadius(defaultRad);

var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',];

var swatches = document.getElementsByClassName('swatch');

for(var i=0, n=colors.length;i<n;i++) {
 var swatch =  document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener('click', setSwatch);
  document.getElementById('colors').appendChild(swatch);
}

function clearCanvas(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function setColor(color) {
  context.fillStyle = color;
  context.strokeStyle = color;
  var active = document.getElementsByClassName('active')[0];
  if(active) {
    active.className = 'swatch';
  }
}

function setSwatch(e) {
  var swatch = e.target; 
  setColor(swatch.style.backgroundColor);
  swatch.className += ' active';
  
}
function download_now(){
  var link = document.getElementById('link');
  link.setAttribute('download', 'Doodlely_drawing.png');
  link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();
}

function getColor() {
  var color = $("#color").val();
  $("canvas").css("background", color);
  $("#output").css("color", color);
  
}