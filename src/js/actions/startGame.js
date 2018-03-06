'use strict';

let frameIndex = 0;
let framesCount = 4;

let loopTicksCount = 0;
let loopTicksPerFrame = 5;

export default function startGame(image, context) {

	loop();

	function loop() {
		requestAnimationFrame(loop);

		update();

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

	function render() {

		// ToDo: Separate in diferent "clear" function
		context.clearRect(
			0,
			0,
			image.width / framesCount,
			image.height / 2
		);

		context.drawImage(
			image,
			frameIndex * image.width / framesCount,
			0,
			image.width / framesCount,
			image.height / 2,
			0,
			0,
			image.width / framesCount,
			image.height / 2
		);
	}

}