'use strict';

let frameIndex = 0;
let framesCount = 4;

let loopTicksCount = 0;
let loopTicksPerFrame = 5;

let x = 0;
let y = 0;

export default function startGame(image, context) {

	loop();

	function loop() {
		requestAnimationFrame(loop);

		update();

		clear();

		render();

		loopTicksCount += 1;
	}

	function update() {
		if (loopTicksCount >= loopTicksPerFrame) {

			loopTicksCount = 0;
			frameIndex += 1;

			if (frameIndex >= framesCount) {
				frameIndex = 0;
			}	

		}
	}

	function clear() {
		context.clearRect(
			x,
			y,
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