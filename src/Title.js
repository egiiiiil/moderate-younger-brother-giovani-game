import Phaser from "phaser";
import Giovanni from "./Giovanni.js";
import Highscore from "./HighscorePage.js";

export default class TitleScene extends Phaser.Scene {
	constructor() {
		super({ key: "TitleScene" });
	}
	preload() {
		//this.load.image('bg', './assets/bg.png')


		this.load.image("sky", "./assets/sky.png");
	}
	create() {
		let center = {
			x: this.physics.world.bounds.width / 2,
			y: this.physics.world.bounds.height / 2,
		}
		this.fullScreen = {
      x: this.physics.world.bounds.width,
      y: this.physics.world.bounds.height,
    };
		let bg = this.add.image(center.x, center.y, "sky");
		bg.setDisplaySize(this.fullScreen.x, this.fullScreen.y)
		
		this.add.text(50, 200, "Moderate Younger Brother Giovani Game", 						{
			fontFamily: 'dogicabold, monospace',
			fontSize: 20,
			color: "black",
		});
		this.add.text(50, 300, "Press any key to start", {
			fontFamily: 'dogicabold, monospace',
			fontSize: 20,
			color: "black",
		});
		this.add.text(50, 400, "■", {
			fontFamily: 'dogicabold, monospace',
			fontSize: 20,
			color: "black",
		});


		this.input.keyboard.on("keydown", () => {
			
			this.scene.start("GiovanniGame");
			
		});
	}
}
