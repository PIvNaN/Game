'use strict';

/**
 * Initialize game canvas
 */

import player from './elements/player.js';

let canvas = document.createElement('canvas');
canvas.classList.add('player-canvas');

document.querySelector('.app-container').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


/**
 * Call game elements
 */

player();