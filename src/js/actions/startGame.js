'use strict';

let frameIndex = 0;

export default function startGame(image, context) {

	loop();

	function loop() {
		requestAnimationFrame(loop);

		update();

		render();
	}

	function update() {
		frameIndex += 1;
	}

	function render() {
		context.drawImage(
			image,
			frameIndex * image.width / 4,
			0,
			image.width / 4,
			image.height / 2,
			0,
			0,
			image.width / 4,
			image.height / 2,

		);
	}

}