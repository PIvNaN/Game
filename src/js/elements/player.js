'use strict';

import loadImage from '../actions/loadImage.js'
import startGame from '../actions/startGame.js'

class Player {

	constructor(context, canvas) {

		this.loadImage(context, canvas);

		let frameIndex = 0;
		let framesCount = 4;

		let loopTicksCount = 0;
		let loopTicksPerFrame = 5;
		
		let x = 0;
		let y = 0;
		
		let speedX = 3;

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

			// for (let i = 0; i < 600; i++) {
			// 	console.warn('THE LOOP TICK START');
			// 	this.update(image);
			// 	this.clear(image);
			// 	this.render(image);
			// }
		})
	}
	update(image) {
		console.log('# Update START');

		console.log('loopTicksCount START', this.loopTicksCount)
		if (this.loopTicksCount >= this.loopTicksPerFrame) {

			this.loopTicksCount = 0;
			console.log('loopTicksCount INNER', this.loopTicksCount)

			this.frameIndex += 1;
			console.log('frameIndex INNER', this.frameIndex)		
			
			if (this.frameIndex >= this.framesCount) {
				this.frameIndex = 0;
			}
		}

		this.loopTicksCount += 1;
		console.log('loopTicksCount END', this.loopTicksCount)

		this.lastX = this.x;
		this.lastY = window.innerHeight - (image.height * 2.2);

		console.log('update lastX', this.lastX)
		this.x += this.speedX;
		console.log('x', this.x)
		

		if(this.x >= (this.canvas.width - (image.width / this.framesCount))) {
			this.speedX = -this.speedX;
		}

		if(this.x <= 0) {
			this.speedX = -this.speedX;
		}

		console.log('# Update END');
	}

	clear(image) {
		console.log('# Clear START');

		console.log('clear lastX', this.lastX)
		this.context.clearRect(
			this.lastX,
			this.lastY,
			image.width / this.framesCount,
			image.height / 2
		);

		console.log('# Clear END');
	}

	render(image) {
		console.log('# Render START');		

		this.context.drawImage(
			image,
			this.frameIndex * image.width / this.framesCount,
			0,
			image.width / this.framesCount,
			image.height / 2,
			70,
			window.innerHeight - (image.height * 2.2),
			image.width / this.framesCount,
			image.height / 2
		);

		console.log('# Render END');
	}

}

export default Player;