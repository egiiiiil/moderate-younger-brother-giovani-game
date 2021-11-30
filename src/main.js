// import Giovanni from "./Giovanni.js";
import Title from "./Title.js";
//import Highscore from "./HighscorePage";
import Giovanni from "./Giovanni.js";

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
