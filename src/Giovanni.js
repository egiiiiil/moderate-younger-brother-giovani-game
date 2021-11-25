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
		level2;

class Giovanni extends Phaser.Scene {
	constructor() {
		super({ key: "GiovanniGame" });
	}
	preload() {

	}

	create() {
		bg = this.add.image(0, 0, 'bg')
		bg.setScale(0.8)

		level1 = this.add.tileSprite(-5, 560, 200, 400, 'tile');
		this.physics.add.existing(level1)
		level1.body.setImmovable(true)
		level1.body.moves = false;

		level2 = this.add.tileSprite(300, 560, 500, 400, 'tile');
		this.physics.add.existing(level2)
		level2.body.setImmovable(true)
		level2.body.moves = false;
    /* groundGame = this.physics.add.staticSprite(-5, 460, "ground"); */
		/* groundGame.setOrigin(0, 0.5) */
    giovanniPlayer = this.physics.add.sprite(
			30,

      290,
      "runninggiovanni",
      "runningG0.png"
			);
		giovanniPlayer.setScale(0.05)
		giovanniControls = this.input.keyboard.createCursorKeys();
			
/* 		coins = this.physics.add.sprite(
			60,
			290,
			"coins",
			"coins00.png"
		);
		coins.setScale(0.04) */



		coins = this.add.group();

    for (var i = 0; i <= 2; i++)
    {
        //  This creates a new Phaser.Sprite instance within the group
        //  It will be randomly placed within the world and use the 'baddie' image to display
        coins.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'coins');
				//coins.setScale(0.04)
    }


		timer = this.add.text(30, 100, "00000", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontSize: 20,
			color: "black",
		});

		this.physics.add.collider(giovanniPlayer, level1);
		this.physics.add.collider(giovanniPlayer, level2);
		/* this.physics.add.collider(giovanniPlayer, groundGame); */
		this.physics.add.collider(coins, level1);
		this.physics.add.collider(coins, level2);
		/* 		this.physics.world.collide(giovanniPlayer, [groundGame])
		this.physics.world.collide(coins, [groundGame]) */

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

  //coins.anims.play("coinsAnimation", true);

	}
}
export default Giovanni;
