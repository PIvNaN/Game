'use strict';

let loopTicksCount = 0;

import Player from "../elements/player.js";

export default function startGame(image, context, canvas) {
	let player = new Player(context, canvas);
	// console.log(image.width)
	loop();

	function loop() {
		requestAnimationFrame(loop);

		_update();

		_clear();

		_render();

		loopTicksCount += 1;
	}

	function _update() {
		player.update(image)
	}

	function _clear() {
		player.clear(image)
	}

	function _render() {
		player.render(image)
	}

}
