// import Giovanni from "./Giovanni.js";
import Title from "./Title.js";
import Highscore from "./HighscorePage";
import Giovanni from "./Giovanni.js";

//global variables for highscore page
var ScreenOrientation, highscore, scoreDisplay, highScoreText;

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 500,
	scene: [Giovanni],
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 400 },
			debug: true,
		},
	},
};

new Phaser.Game(config);
