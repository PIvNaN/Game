'use strict';

import Player from "../elements/player.js";
import Background from "../elements/background.js";

export default function startGame(image, context, canvas) {
	const player = new Player(context, canvas);
	// const bg = new Background(content, canvas);	

	function loop() {
		console.warn('THE LOOP TICK START');

		_update();

		_clear();

		_render();

		requestAnimationFrame(loop);
	}

	loop();

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