var opacity = 1;
var on = true;
function onOff() {
	if (on) {
		on = false;
		opacity = 0;
		camera = false;
		document.getElementById("display").style.opacity = opacity;
	} else {
		on = true;
		opacity = 1;
		document.getElementById("display").style.opacity = opacity;
	}
}
function playAnimation() {
	document.getElementById("pointer").style.animationPlayState = "running";
	console.log("running");
}
function pauseAnimation() {
	document.getElementById("pointer").style.animationPlayState = "paused";
	console.log("paused");
}