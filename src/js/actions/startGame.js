'use strict';

let loopTicksCount = 0;

import Player from "../elements/player.js";
import Background from "../elements/background.js";

export default function startGame(image, context, canvas) {
	const player = new Player(context, canvas);
	const bg = new Background(content, canvas);

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
