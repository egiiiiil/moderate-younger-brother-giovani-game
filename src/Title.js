import Phaser from "phaser";
import Giovanni from "./Giovanni.js";
import Highscore from "./HighscorePage.js";

export default class TitleScene extends Phaser.Scene {
	constructor() {
		super({ key: "TitleScene" });
	}
	preload() {}
	create() {
		this.add.text(5, 5, "Moderate Younger Brother Giovani Game");
		this.add.text(5, 20, "Press any key to start");
		this.input.keyboard.on("keydown", () => {
			// this.scene.add("Giovanni", Giovanni, true);
			this.scene.add("Highscore", Highscore, true);
			this.scene.remove("TitleScene");
		});
	}
}
