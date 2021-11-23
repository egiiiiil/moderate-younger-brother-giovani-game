import Phaser from "phaser"
import Giovanni from "./Giovanni.js"

export default class TitleScene extends Phaser.Scene {
	constructor() {
		super({key: "TitleScene"})
	}
	preload() {

	}
	create() {
		this.add.text(0, 0, "Press any key to start")
		this.input.keyboard.on('keydown', () => {
			this.scene.add("Giovanni", Giovanni, true)
			this.scene.remove("TitleScene")

		})
	}
}