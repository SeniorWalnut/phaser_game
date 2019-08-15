export default class Boot {
	preload() {
		this.load.image('preload_bg', 'assets/images/preload_bg.jpg');
		this.load.image('preload__progress', 'assets/images/preload_progress.png');
	}

	create() {
		this.game.state.start('preload');
	}
}