'use strict';

import loadImage from '../actions/loadImage.js'
import startGame from '../actions/startGame.js'

export default function player(playerContext, canvas) {
	
	let image = loadImage('../images/running-cat.png', (image) => {
		startGame(image, playerContext, canvas);
	});

}