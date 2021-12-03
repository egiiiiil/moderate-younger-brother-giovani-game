// import Giovanni from "./Giovanni.js";
import Title from "./Title.js";
import Giovanni from "./Giovanni.js";
import Highscore from "./HighscorePage";

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 750,
	autoCenter: true,
	scene: [Title, Giovanni, Highscore],
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 400 },
			debug: false,
		},
	},
};

new Phaser.Game(config);
