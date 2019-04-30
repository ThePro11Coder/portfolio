var wheel = document.querySelector("#wheel"),
    button = document.querySelector("#button"),
    rando = 0;

var spin_wheel = function () {
  
  rando += (Math.random() * 360) + 2880;
  

  wheel.style.webkitTransform = "rotate(" + rando + "deg)";
  wheel.style.mozTransform = "rotate(" + rando + "deg)";
  wheel.style.msTransform = "rotate(" + rando + "deg)";
  wheel.style.transform = "rotate(" + rando + "deg)";
  
}

button.addEventListener("click", spin_wheel, false);