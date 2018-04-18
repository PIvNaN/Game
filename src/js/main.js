'use strict';

/**
 * Initialize game canvas
 */

import Player from './elements/player.js';
import Background from './elements/background.js'

let canvas = document.createElement('canvas');
canvas.classList.add('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelector('.app-container').appendChild(canvas);

let canvasContext = canvas.getContext('2d');


/**
 * Call game elements
 */

new Player(canvasContext, canvas);
// new Background(canvasContext, canvas);