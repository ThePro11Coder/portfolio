TweenMax.set(document.body, {perspective:700});

TweenMax.to("#birthday", 3, {rotationY:360, ease:Power2.easeInOut, repeat:-1, delay: 2, repeatDelay:1});

TweenMax.to("#age", 1, {autoAlpha:1, delay: 5});

function randomNumber(min, max) {
  return Math.floor(min + (Math.random() * (max - min)));
}

function changeColor() {
  TweenMax.to("#birthday", 2, {color:"rgb(" + randomNumber(0, 255) + "," + randomNumber(0, 255) + "," + randomNumber(0, 255) + ")", onComplete:changeColor});
}

changeColor();           