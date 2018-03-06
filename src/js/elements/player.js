'use strict';

import loadImage from '../actions/loadImage.js'

export default function player() {

	// ToDo create canvas
	let canvas
	
	let image = loadImage('../images/running-cat.png', (image) => {
		document.querySelector('.app-container').appendChild(image)
	});

}