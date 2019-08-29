const image = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9729/wurzburg.jpg";

class mySmallDrawingApp {
	constructor() {
		this.canvas = document.getElementsByTagName("canvas")[0];
		this.ctx = this.canvas.getContext("2d");
		this.draw();
		this.canvas.addEventListener("click", () => {
			this.draw();
		});
	}

	draw() {
		this.canvas.style.borderColor = "red";
		let l = parseInt(Math.random() * 40) + 20;
		let x = 0;
		let y = 0;
		let width = 576;
		let height = 763;
		let w = parseInt(Math.random() * 40) + 20;
		// gradient direction
		let dir1 = parseInt(Math.random() * 40 + 10);
		let dir2 = parseInt(Math.random() * (100 - dir1)) + dir1;
		let step = 1;
		let maxIterations = 400;
		if (Math.random() - Math.random() < 0) {
			let t = dir1;
			dir1 = dir2;
			dir2 = t;
			step = -step;
		}
		let h = parseInt(Math.random() * 360);
		while (maxIterations > 0 && y < height) {
			maxIterations--;
			for (var s = dir1; step === -1 ? s > dir2 : s < dir2; s += step) {
				const fill = `hsl(${h},${s}%,${l}%)`;
				this.ctx.fillStyle = fill;
				this.ctx.fillRect(x, y, w, w);
				x += w;
				if (x > width) {
					x = 0;
					y += w;
				}
			}
			h++;
		}
		w += parseInt((Math.random() - Math.random()) * 10) + 1;
		this.canvas.style.borderColor = "white";
	}
}

new mySmallDrawingApp();
