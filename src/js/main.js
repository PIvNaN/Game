'use strict';

/**
 * Initialize game canvas
 */

import player from './elements/player.js';
import background from './elements/background.js'

let canvas = document.createElement('canvas');
canvas.classList.add('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelector('.app-container').appendChild(canvas);

let canvasContext = canvas.getContext('2d');


/**
 * Call game elements
 */

player(canvasContext, canvas);
background(canvasContext, canvas);