'use strict';

let frameIndex = 0;
let framesCount = 4;

let loopTicksCount = 0;
let loopTicksPerFrame = 7;

let x = 0;
let y = 0;

let lastX;
let lastY;

let speedX = 10;

export default function startGame(image, context, canvas) {

	loop();

	function loop() {
		requestAnimationFrame(loop);

		update();

		clear();

		render();

		loopTicksCount += 1;
	}

	console.log(canvas.width);

	function update() {
		if (loopTicksCount >= loopTicksPerFrame) {

			loopTicksCount = 0;
			frameIndex += 1;

			if (frameIndex >= framesCount) {
				frameIndex = 0;
			}
		}

		lastX = x;
		lastY = y;

		x += speedX;

		if(x >= canvas.width) {
			speedX = -speedX;
		}
		
	}

	function clear() {
		context.clearRect(
			lastX,
			lastY,
			image.width / framesCount,
			image.height / 2
		);
	}

	function render() {

		context.drawImage(
			image,
			frameIndex * image.width / framesCount,
			0,
			image.width / framesCount,
			image.height / 2,
			x,
			y,
			image.width / framesCount,
			image.height / 2
		);
	}

}
