export default class Preload {
	constructor() {
		this.logoComplete = false;
		this.logoShown = false;
	}

	create() {
		// console.log(this.time)
		this.logoShownTimer = this.time.delayedCall(3000, this.onLogoShown, this);
		// this.logoShownTimer.add(3000, this.onLogoShown, this);
		// this.logoShownTimer.start();

		this.add.sprite(0, 0, 'preload_bg');
		let preloadProgress = this.add.sprite(55, 557, 'preload_progress');

		this.load.setPreloadSprite(preloadProgress);
		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.load.image('menu_bg', 'assets/images/menu_bg.png');
    this.load.image('menu_logo', 'assets/images/menu_logo.png');
    this.load.image('menu_skill_circle', 'assets/images/menu_skill_circle.png');
    this.load.image('menu_avatar', 'assets/images/menu_avatar.png');
    this.load.image('menu_button_divider', 'assets/images/menu_button_divider.png');
 
    this.load.image('button_learn', 'assets/images/button_learn.png');
    this.load.image('button_listen', 'assets/images/button_listen.png');
    this.load.image('button_write', 'assets/images/button_write.png');
    this.load.image('button_game', 'assets/images/button_game.png');
    this.load.image('button_achievement', 'assets/images/button_achievement.png');
    this.load.image('button_top', 'assets/images/button_top.png');
    this.load.image('button_settings', 'assets/images/button_settings.png');
 
    this.load.image('skill_learn_bg', 'assets/images/skill_learn_bg.png');
    this.load.image('skill_listen_bg', 'assets/images/skill_listen_bg.png');
    this.load.image('skill_write_bg', 'assets/images/skill_write_bg.png');
    this.load.image('skill_progress', 'assets/images/skill_progress.png');
    this.load.image('skill_level', 'assets/images/skill_level.png');
    this.load.image('skill_icon_learn', 'assets/images/skill_icon_learn.png');
    this.load.image('skill_icon_listen', 'assets/images/skill_icon_listen.png');
    this.load.image('skill_icon_write', 'assets/images/skill_icon_write.png');
 
    this.load.start();
	}

 	update() {
    if (this.loadComplete && this.logoShown)
      this.game.state.start('game');
  }
 
  onLoadComplete() {
    this.loadComplete = true;
  }
 
  onLogoShown() {
    this.logoShown = true;
  }
}