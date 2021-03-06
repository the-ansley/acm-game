
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('sky', 'assets/sky.png');
		this.load.image('ground', 'assets/ground.png');
		this.load.image('star', 'assets/star.png');
		this.load.image('bg1' , 'assets/bg1.png');		
		this.load.image('zero', 'assets/0.png');
		this.load.image('one', 'assets/1.png');
		this.load.image('two', 'assets/2.png');
		this.load.image('three', 'assets/3.png');
		this.load.image('four', 'assets/4.png');
		this.load.image('five', 'assets/5.png');
		this.load.image('six', 'assets/6.png');
		this.load.image('seven', 'assets/7.png');
		this.load.image('eight', 'assets/8.png');
		this.load.image('nine', 'assets/9.png');
	
		this.load.image('heartFull','assets/hud_heartFull.png');
		this.load.image('heartHalf','assets/hud_heartHalf.png');
		this.load.image('heartEmpty','assets/hud_heartEmpty.png');

		this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
		this.load.spritesheet('player', 'assets/p1_walk.png', 72, 97);

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		/*
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}
		*/
		
		this.state.start('Game');
		
	}

};
