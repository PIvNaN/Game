'use strict';

import loadImage from '../actions/loadImage.js'
import startGame from '../actions/startGame.js'

class Player {

	constructor(context, canvas) {

		this.loadImage(context, canvas);

		let frameIndex = 0;
		let framesCount = 4;

		let loopTicksCount = 0;
		let loopTicksPerFrame = 7;
		
		let x = 0;
		let y = 0;

		let lastX;
		let lastY;
		
		let speedX = 4;

		this.frameIndex = frameIndex;
		this.framesCount = framesCount;

		this.loopTicksCount = loopTicksCount;
		this.loopTicksPerFrame = loopTicksPerFrame;

		this.x = x;
		this.y = y;

		this.lastX;
		this.lastY;

		this.speedX = speedX;

		this.context = context;
		this.canvas = canvas;		
	}
	
	loadImage(context, canvas) {
		loadImage('../images/running-cat.png', (image) => {
			startGame(image, context, canvas);
		})
	}
	update(image) {
		console.log('Is Update START?', this.canvas, this.loopTicksPerFrame, this.lastX);		

		if (this.loopTicksCount >= this.loopTicksPerFrame) {

			this.loopTicksCount = 0;
			this.frameIndex += 1;

			if (this.frameIndex >= this.framesCount) {
				this.frameIndex = 0;
			}
		}

		this.lastX = this.x;
		this.lastY = this.y;

		this.x += this.speedX;

		if(this.x >= (this.canvas.width - (image.width / this.framesCount))) {
			this.speedX = -this.speedX;
		}

		if(this.x <= 0) {
			this.speedX = -this.speedX;
		}

		console.log('Is Update DONE?');
	}

	clear(image) {
		console.log('Is Clear START?');		
		
		this.context.clearRect(
			this.lastX,
			this.lastY,
			image.width / this.framesCount,
			image.height / 2
		);

		console.log('Is Clear DONE?');
	}

	render(image) {
		console.log('Is Render START?');		

		this.context.drawImage(
			image,
			this.frameIndex * image.width / this.framesCount,
			0,
			image.width / this.framesCount,
			image.height / 2,
			this.x,
			this.y,
			image.width / this.framesCount,
			image.height / 2
		);

		console.log('Is Render DONE?');
	}

}

export default Player;