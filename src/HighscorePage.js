import Phaser from "phaser";
import Giovanni from "./Giovanni.js";
var name, score;

// export default class Highscore extends Phaser.Scene {
// 	constructor() {
// 		super({ key: "Highscore" });
// 	}
// 	preload() {}
// 	create() {}
// }

//score and highscore variables
/*var score = 0;
Game.add.text(30, 20, "SCORE:", {
	font: "bold 12px sans-serif",
	fill: "#46c0f9",
	align: "center",
});
scoreDisplay = game.add.text(80, 19, score, {
	font: "bold 14px sans-serif",
	fill: "#46c0f9",
	align: "center",
});
highScoreText = this.game.add.text(
	game.width - 200,
	20,
	"Highscore: " + highscore,
	{ font: "bold 20px Lato", fill: "#fff", align: "center" }
);
*/
export default class Highscore extends Phaser.Scene {
	constructor() {
		super({ key: "Highscore", active: true });
		this.playerText;
	}

	preload() {}

	create() {
		this.add.text(0, 0, "NAME", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontSize: 30,
		});
		for (let i = 0; i <= 9; i++) {
			name = this.add.text(0, 40 + i * 32, "Name", {
				fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			});
		}
		this.add.text(200, 0, "SCORE", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontSize: 30,
		});
		for (let i = 0; i <= 9; i++) {
			score = this.add.text(200, 40 + i * 32, "Score", {
				fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			});
		}
	}
}
