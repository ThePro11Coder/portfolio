let vu, pc;

		function init(){
			vu = (window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight) / 100;

			document.getElementById('ferris').style.width = 80*vu + 'px';
			document.getElementById('ferris').style.height = 80*vu + 'px';

			pc = 0.6 * vu;
		}

		window.addEventListener('load', init);

		window.addEventListener('resize', init);

		let spoke1 = document.getElementById('spoke1');
		let seat1 = document.getElementById('seat1');
		let seat2 = document.getElementById('seat2');

		let spoke2 = document.getElementById('spoke2');
		let seat3 = document.getElementById('seat3');
		let seat4 = document.getElementById('seat4');

		let spoke3 = document.getElementById('spoke3');
		let seat5 = document.getElementById('seat5');
		let seat6 = document.getElementById('seat6');

		let spoke4 = document.getElementById('spoke4');
		let seat7 = document.getElementById('seat7');
		let seat8 = document.getElementById('seat8');

		let i = 0;
		let i2 = 45;
		let i3 = 90;
		let i4 = 135;
		
		
		setInterval(function(){

			i++;

			spoke1.style.transform = 'rotate('+(i%360) + 'deg)';

			seat1.style.left = 50*pc + 48*pc*Math.sin(i*3.1416/180) + 'px';
			seat1.style.top = 50*pc - 48*pc*Math.cos(i*3.1416/180) + 'px';

			seat2.style.left = 50*pc - 48*pc*Math.sin(i*3.1416/180) + 'px';
			seat2.style.top = 50*pc + 48*pc*Math.cos(i*3.1416/180) + 'px';

			i2++;

			spoke2.style.transform = 'rotate('+(i2%360) + 'deg)';

			seat3.style.left = 50*pc + 48*pc*Math.sin(i2*3.1416/180) + 'px';
			seat3.style.top = 50*pc - 48*pc*Math.cos(i2*3.1416/180) + 'px';

			seat4.style.left = 50*pc - 48*pc*Math.sin(i2*3.1416/180) + 'px';
			seat4.style.top = 50*pc + 48*pc*Math.cos(i2*3.1416/180) + 'px';

			i3++;

			spoke3.style.transform = 'rotate('+(i3%360) + 'deg)';

			seat5.style.left = 50*pc + 48*pc*Math.sin(i3*3.1416/180) + 'px';
			seat5.style.top = 50*pc - 48*pc*Math.cos(i3*3.1416/180) + 'px';

			seat6.style.left = 50*pc - 48*pc*Math.sin(i3*3.1416/180) + 'px';
			seat6.style.top = 50*pc + 48*pc*Math.cos(i3*3.1416/180) + 'px';

			i4++;

			spoke4.style.transform = 'rotate('+(i4%360) + 'deg)';

			seat7.style.left = 50*pc + 48*pc*Math.sin(i4*3.1416/180) + 'px';
			seat7.style.top = 50*pc - 48*pc*Math.cos(i4*3.1416/180) + 'px';

			seat8.style.left = 50*pc - 48*pc*Math.sin(i4*3.1416/180) + 'px';
			seat8.style.top = 50*pc + 48*pc*Math.cos(i4*3.1416/180) + 'px';

		}, 33)