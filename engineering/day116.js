var container = document.querySelector("#container");
var timeSwitch = document.querySelector("#timeSwitch");
var rotate = 160;

for (var i = 0; i < 200; i++) {
  container.insertAdjacentHTML('afterbegin', '<div class="ster"></div>');
  var ster = document.querySelector(".ster");
  var randomX = Math.random() * window.innerWidth;
  var randomY = Math.random() * window.innerHeight;
  ster.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
  ster.style.animation = "knipper 1s " + Math.random() + "s linear infinite";
}

timeSwitch.addEventListener("click", dag);

function dag(evt) {
  document.querySelector("#container").classList.toggle("dayTime");
  document.querySelector("#sunAndMoon").style.transform = "rotate(" + rotate + "deg)";
  rotate += 180;
  var sterren = document.querySelectorAll(".ster");
  for (var i = 0; i < sterren.length; i++) {
    sterren[i].classList.toggle("hidden");
  }
}