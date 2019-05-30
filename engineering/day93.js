var space = document.querySelector('.space');
var num_stars = Math.floor(Math.random() * 1000) + 2000;

for (var i = 0; i < num_stars; i++) {
	
	var star = document.createElement('div');
	var posX = Math.random() * 100;
	var posY = Math.random() * 100;
	var lightness = Math.floor(Math.random() * 60);
	var color = 'hsl(0,0%,' + lightness + '%)';
	if (lightness > 58 && size == 1) size = 4;
	if (!(i%200)) size = 3; 
	
	/* set class and style */
	star.setAttribute('class', 'star');
	star.setAttribute('style', 'left:'+posX+'%;top:'+posY+'%;background:'+color+';height:'+size+'px;width:'+size+'px');
	
	/* add the star to space */
	space.appendChild(star);
	
}