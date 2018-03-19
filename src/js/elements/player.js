'use strict';

import loadImage from '../actions/loadImage.js'
import startGame from '../actions/startGame.js'

class Player {

	constructor(context, canvas) {
		this.loadImage(context, canvas);
	}
	
	loadImage(context, canvas) {
		loadImage('../images/running-cat.png', (image) => {
			startGame(image, context, canvas);
		})
	}

}

export default Player;