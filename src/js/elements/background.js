'use strict';

import loadImage from '../actions/loadImage.js'
import startGame from '../actions/startGame.js'

export default function background(bgContext, canvas) {

    let image = loadImage('../../../images/background.png', (image) => {
        // startGame(image, bgContext, canvas);
        let frameIndex = 0;

        bgContext.drawImage(
			image,
			0,
			0,
			image.width,
			image.height * 2.9,
			0,
			0,
			image.width,
			image.height
		);

    })
}