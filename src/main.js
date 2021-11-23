import Giovanni from "./Giovanni.js";

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 500,
	scene: [Giovanni],
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 600 },
		},
	},
};

new Phaser.Game(config)