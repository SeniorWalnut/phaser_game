import 'phaser';
// All game scenes
import { Game, Boot, Preload } from './scenes';

const config  = {
	// title: "Starfall",
	width: 800,
	height: 600,
	parent: "game",
	scene: [Game, Boot, Preload],
	// physics: {
	// 	default: "arcade",
	// 	arcade: {
	// 		debug: false
	// 	}
	// },
	// backgroundColor: "#18216d"
}
var game;

export class MainGame extends Phaser.Game {
	constructor(config) {
		super(config);
	}
}

window.onload = () => {
	game = new MainGame(config);
	// console.log(game.scene);
	game.scene.start('boot');
}