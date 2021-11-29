import Phaser from "phaser";
import { Tile } from "phaser/src/tilemaps";
/* import background from './bg.png'; */
/* import ground from '../img/ground.png'; */

let giovanniPlayer,
	giovanniControls,
	timer,
	coins,
	bg,
	level1,
	level2,
	patrikEnemy;
let resetGame = 0;

class Giovanni extends Phaser.Scene {
	constructor() {
		super({ key: "GiovanniGame" });
	}
	preload() {

		this.load.image("ground", "./assets/ground.png");
		this.load.multiatlas(
			"runninggiovanni",
			"./assets/runninggiovanni/running.json",
			"./assets/runninggiovanni"
		);
		this.load.multiatlas(
			"coins",
			"./assets/coins/coins.json",
			"./assets/coins"
		);

		this.load.image('tile', './assets/tile/tile.png')
	}

	create() {
		bg = this.add.image(0, 0, 'bg')
		bg.setScale(0.79)

		let ground1 = this.add.tileSprite(-5, 500, 200, 400, 'tile');
		this.physics.add.existing(ground1)
		ground1.body.setImmovable(true)
		ground1.body.moves = false;
		let ground2 = this.add.tileSprite(580, 500, 800, 400, 'tile');
		this.physics.add.existing(ground2)
		ground2.body.setImmovable(true)
		ground2.body.moves = false;
		let ground3 = this.add.tileSprite(1450, 500, 800, 400, 'tile');
		this.physics.add.existing(ground3)
		ground3.body.setImmovable(true)
		ground3.body.moves = false;
		let ground4 = this.add.tileSprite(2100, 500, 275, 400, 'tile');
		this.physics.add.existing(ground4)
		ground4.body.setImmovable(true)
		ground4.body.moves = false;
		let ground5 = this.add.tileSprite(2500, 500, 300, 400, 'tile');
		this.physics.add.existing(ground5)
		ground5.body.setImmovable(true)
		ground5.body.moves = false;

		let stairs1 = this.add.tileSprite(2210, 275, 50, 50, 'tile');
		this.physics.add.existing(stairs1)
		stairs1.body.setImmovable(true)
		stairs1.body.moves = false;
		let stairs2 = this.add.tileSprite(2160, 275, 50, 50, 'tile');
		this.physics.add.existing(stairs2)
		stairs2.body.setImmovable(true)
		stairs2.body.moves = false;
 		let stairs3 = this.add.tileSprite(2110, 275, 50, 50, 'tile');
		this.physics.add.existing(stairs3)
		stairs3.body.setImmovable(true)
		stairs3.body.moves = false;
		let stairs4 = this.add.tileSprite(2060, 275, 50, 50, 'tile');
		this.physics.add.existing(stairs4)
		stairs4.body.setImmovable(true)
		stairs4.body.moves = false;
		let stairs5 = this.add.tileSprite(2210, 225, 50, 50, 'tile');
		this.physics.add.existing(stairs5)
		stairs5.body.setImmovable(true)
		stairs5.body.moves = false;
		let stairs6 = this.add.tileSprite(2160, 225, 50, 50, 'tile');
		this.physics.add.existing(stairs6)
		stairs6.body.setImmovable(true)
		stairs6.body.moves = false;
 		let stairs7 = this.add.tileSprite(2110, 225, 50, 50, 'tile');
		this.physics.add.existing(stairs7)
		stairs7.body.setImmovable(true)
		stairs7.body.moves = false;
		let stairs8 = this.add.tileSprite(2210, 175, 50, 50, 'tile');
		this.physics.add.existing(stairs8)
		stairs8.body.setImmovable(true)
		stairs8.body.moves = false;
		let stairs9 = this.add.tileSprite(2160, 175, 50, 50, 'tile');
		this.physics.add.existing(stairs9)
		stairs9.body.setImmovable(true)
		stairs9.body.moves = false;
		let stairs10 = this.add.tileSprite(2210, 125, 50, 50, 'tile');
		this.physics.add.existing(stairs10)
		stairs10.body.setImmovable(true)
		stairs10.body.moves = false;

		let pipe1 = this.add.tileSprite(1700, 80, 60, 200, 'tile');
		this.physics.add.existing(pipe1)
		pipe1.body.setImmovable(true)
		pipe1.body.moves = false;
		let pipe2 = this.add.tileSprite(1500, 80, 60, 200, 'tile');
		this.physics.add.existing(pipe2)
		pipe2.body.setImmovable(true)
		pipe2.body.moves = false;
		let pipe3 = this.add.tileSprite(1700, 345, 60, 200, 'tile');
		this.physics.add.existing(pipe3)
		pipe3.body.setImmovable(true)
		pipe3.body.moves = false;
		let pipe4 = this.add.tileSprite(1500, 345, 60, 200, 'tile');
		this.physics.add.existing(pipe4)
		pipe4.body.setImmovable(true)
		pipe4.body.moves = false;


    giovanniPlayer = this.physics.add.sprite(
			30,

      270,
      "runninggiovanni",
      "runningG0.png"
			);
		giovanniPlayer.setScale(0.05)
		giovanniControls = this.input.keyboard.createCursorKeys();
			


		/* 		coins = this.physics.add.sprite(
			60,
			290,
			"runninggiovanni",
			"runningG0.png"
		);
		coins.setScale(0.04) */

		for (let i = 0; i <= 99; i++) {
			coins = this.physics.add.sprite(
				(220 + ( i * 10 )),
				280,
				"coins",
				"coins00.png"
			);
			coins.setScale(1)
			coins.body.moves = false;
			console.log(coins)
		}

		coins = this.physics.add.sprite(60, 300, "coins", "coins00.png");
		coins.setScale(0.04);
		timer = this.add.text(10, 10, "00000", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontSize: 20,
			color: "black",
		});

		this.physics.add.collider(giovanniPlayer, ground1);
		this.physics.add.collider(giovanniPlayer, ground2);
		this.physics.add.collider(giovanniPlayer, ground3);
		this.physics.add.collider(giovanniPlayer, ground4);
		this.physics.add.collider(giovanniPlayer, ground5);

		this.physics.add.collider(giovanniPlayer, stairs1);
		this.physics.add.collider(giovanniPlayer, stairs2);
		this.physics.add.collider(giovanniPlayer, stairs3);
		this.physics.add.collider(giovanniPlayer, stairs4);
		this.physics.add.collider(giovanniPlayer, stairs5);
		this.physics.add.collider(giovanniPlayer, stairs6);
		this.physics.add.collider(giovanniPlayer, stairs7);
		this.physics.add.collider(giovanniPlayer, stairs8);
		this.physics.add.collider(giovanniPlayer, stairs9);
		this.physics.add.collider(giovanniPlayer, stairs10);

		this.physics.add.collider(giovanniPlayer, pipe1);
		this.physics.add.collider(giovanniPlayer, pipe2);
		this.physics.add.collider(giovanniPlayer, pipe3);
		this.physics.add.collider(giovanniPlayer, pipe4);
		/* this.physics.add.collider(giovanniPlayer, groundGame); */
		this.physics.add.collider(coins, ground1);
		this.physics.add.collider(coins, ground2);
		this.physics.add.collider(coins, ground3);
		/* 		this.physics.world.collide(giovanniPlayer, [groundGame])
		this.physics.world.collide(coins, [groundGame]) */
		this.physics.add.collider(giovanniPlayer, groundGame);
		this.physics.add.collider(coins, groundGame);

		//COLLIDER FOR GIOVANNI AND PATRIK
		this.physics.add.collider(giovanniPlayer, patrikEnemy);


		this.anims.create({
			key: "coinsAnimation",
			frames: [
				{ key: "coins", frame: "coins00.png" },
				{ key: "coins", frame: "coins01.png" },
				{ key: "coins", frame: "coins02.png" },
				{ key: "coins", frame: "coins03.png" },
				{ key: "coins", frame: "coins02.png" },
				{ key: "coins", frame: "coins01.png" },
			],
			frameRate: 10,
			repeat: 0,
		});
		this.anims.create({
			key: "giovaniAnimation",
			frames: [
				{ key: "runninggiovanni", frame: "runningG1.png" },
				{ key: "runninggiovanni", frame: "runningG2.png" },
				{ key: "runninggiovanni", frame: "runningG3.png" },
			],
			frameRate: 10,
			repeat: 0,
		});
		this.cameras.main.setBounds(0, 0, 7000, 600);
		this.cameras.main.startFollow(giovanniPlayer);
	}

	update() {
		if (giovanniControls.left.isDown) {
			giovanniPlayer.setVelocityX(-200);
			giovanniPlayer.flipX = true;
			giovanniPlayer.anims.play("giovaniAnimation", true);
		} else if (giovanniControls.right.isDown) {
			giovanniPlayer.setVelocityX(200);
			giovanniPlayer.flipX = false;
			giovanniPlayer.anims.play("giovaniAnimation", true);
		} else {
			giovanniPlayer.setVelocityX(0);
		}
		if (giovanniPlayer.body.touching.down && giovanniControls.space.isDown) {
			giovanniPlayer.setVelocityY(-225);
		}

		coins.anims.play("coinsAnimation", true);
		function reset(world) {
			if (giovanniPlayer.y > 1000) {
				resetGame();
				resetScore();
			}
			if (this.physics.add.collider(giovanniPlayer, patrikEnemy)) {
				resetGame();
				resetScore();
			}
			if (timer == 0) {
				resetGame();
				resetScore();
			}
			if (resetGame > 2) {
				endGame();
			}
		}
		console.log(giovanniPlayer.y > 1000);
		console.log(resetGame);

		function resetGame() {
			giovanniPlayer.setPosition(30, 290);
		}

		function endGame() {
			this.scene.add("highscore", HighscorePage, true);
			this.scene.remove("Giovanni");
		}

		//coins.anims.play("coinsAnimation", true);

	}
}
export default Giovanni;
