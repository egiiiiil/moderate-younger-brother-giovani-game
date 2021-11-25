// import Giovanni from "./Giovanni.js";
import Title from "./Title.js";

//global variables for highscore page
var = ScreenOrientation, highscore, scoreDisplay, highScoreText;

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 500,
	scene: [Title],
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 400 },
			debug: true,
		},
	},
};

new Phaser.Game(config);
