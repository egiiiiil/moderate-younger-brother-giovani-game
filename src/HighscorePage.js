import Phaser from "phaser";
import Giovanni from "./Giovanni.js";
var name, score;

export default class Highscore extends Phaser.Scene {
	constructor() {
		super({ key: "Highscore" });
		this.playerText;
	}

	preload() {
		//this.load.image('black', './assets/black.png')
	}

	create() {
		//let black = this.add.tileSprite(0, 0, 800, 400, 'black');

		let oldPlayers = JSON.parse(localStorage.getItem("players"));

		oldPlayers.sort((a, b) => {
			return b.score - a.score;
		});

		console.log(oldPlayers);

		this.add.text(50, 32, "NAME", {
			fontFamily: "dogicabold, monospace",
			fontSize: 20,
			color: "white",
		});

		for (let i = 0; i < oldPlayers.length && i < 10; i++) {
			this.add.text(
				50,
				64 + i * 32,
				this.finalScore === 1
					? `${[i + 1]} ${oldPlayers[i].player}  :  ${
							oldPlayers[i].score
					  } point`
					: `${[i + 1]} ${oldPlayers[i].player}  :  ${
							oldPlayers[i].score
					  } points`,
				{
					fontFamily: "dogicabold, monospace",
					fontSize: 20,
					color: "white",
				}
			);
		}
		/* 		this.add.text(200, 0, "SCORE", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontSize: 30,
		});
		for (let i = 0; i <= 9; i++) {
			score = this.add.text(200, 40 + i * 32, "Score", {
				fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			});
		} */

		this.add.text(50, 600, "Press any key to restart", {
			fontFamily: "dogicabold, monospace",
			fontSize: 20,
			color: "white",
		});
		// this.add.text(50, 600, "■");

		this.input.keyboard.on("keydown", () => {
			this.scene.start("TitleScene");
		});
	}
}
