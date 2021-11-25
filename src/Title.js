import Phaser from "phaser";
import Giovanni from "./Giovanni.js";
import Highscore from "./HighscorePage.js";

export default class TitleScene extends Phaser.Scene {
	constructor() {

		super({key: "TitleScene"})
	}
	preload() {
		this.load.image('bg', './assets/bg.png')
  }
	create() {

/* 		this.center = {
			x: this.physics.world.bounds.width / 2,
			y: this.physics.world.bounds.height / 2
		} */
		
		
		

		
		let bg = this.add.image(0, 0, 'bg')
		bg.setScale(0.8)
		this.add.text(5, 5, "Moderate Younger Brother Giovani Game")
		this.add.text(5, 20, "Press any key to start")
		this.add.text(5, 30, "■")
		
		this.input.keyboard.on('keydown', () => {
		this.scene.add("Giovanni", Giovanni, true)
		this.scene.remove("TitleScene")
		
		})
	}
}
