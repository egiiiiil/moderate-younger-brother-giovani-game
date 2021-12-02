import Phaser from "phaser";
import Giovanni from "./Giovanni.js";
import Highscore from "./HighscorePage.js";

export default class TitleScene extends Phaser.Scene {
	constructor() {
		super({ key: "TitleScene" });
	}
	preload() {
		//this.load.image('bg', './assets/bg.png')

		this.load.image("bg", "./assets/bg.png");
	}
	create() {
		let bg = this.add.image(0, 0, "bg");
		bg.setScale(2);
		this.add.text(50, 200, "Moderate Younger Brother Giovani Game");
		this.add.text(50, 300, "Press any key to start");
		this.add.text(50, 400, "■");

		this.input.keyboard.on("keydown", () => {
			this.scene.start("GiovanniGame");
			
		});
	}
}
