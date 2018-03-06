'use strict';

let frameIndex = 0;
let framesCount = 4;

export default function startGame(image, context) {

	loop();

	function loop() {
		requestAnimationFrame(loop);

		update();

		render();
	}

	function update() {
		frameIndex += 1;

		if (frameIndex >= framesCount) {
			frameIndex = 0;
		}
	}

	function render() {

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