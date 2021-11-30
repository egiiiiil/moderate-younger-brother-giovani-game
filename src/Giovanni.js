import Phaser from "phaser";
import { Tile } from "phaser/src/tilemaps";
/* import background from './bg.png'; */
/* import ground from '../img/ground.png'; */

let giovanniPlayer
let	giovanniControls
let timer
let coins
let coinGroup
let bg
let score = 0


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
		bg.setScale(0.8)

		let ground1 = this.add.tileSprite(-5, 560, 200, 400, 'tile');
		this.physics.add.existing(ground1)
		ground1.body.setImmovable(true)
		ground1.body.moves = false;

		let ground2 = this.add.tileSprite(580, 560, 800, 400, 'tile');
		this.physics.add.existing(ground2)
		ground2.body.setImmovable(true)
		ground2.body.moves = false;

		let ground3 = this.add.tileSprite(1450, 560, 800, 400, 'tile');
		this.physics.add.existing(ground3)
		ground3.body.setImmovable(true)
		ground3.body.moves = false;

		let ground4 = this.add.tileSprite(2100, 560, 300, 400, 'tile');
		this.physics.add.existing(ground4)
		ground4.body.setImmovable(true)
		ground4.body.moves = false;



		let pipe1 = this.add.tileSprite(1600, 400, 60, 200, 'tile');
		this.physics.add.existing(pipe1)
		pipe1.body.setImmovable(true)
		pipe1.body.moves = false;
		let pipe2 = this.add.tileSprite(1480, 400, 60, 200, 'tile');
		this.physics.add.existing(pipe2)
		pipe2.body.setImmovable(true)
		pipe2.body.moves = false;
		let pipe3 = this.add.tileSprite(1600, 100, 60, 200, 'tile');
		this.physics.add.existing(pipe3)
		pipe3.body.setImmovable(true)
		pipe3.body.moves = false;
		let pipe4 = this.add.tileSprite(1480, 100, 60, 200, 'tile');
		this.physics.add.existing(pipe4)
		pipe4.body.setImmovable(true)
		pipe4.body.moves = false;


    giovanniPlayer = this.physics.add.sprite(
			30, 290,
      "runninggiovanni",
      "runningG0.png"
			);
		giovanniPlayer.setScale(0.05)
		giovanniControls = this.input.keyboard.createCursorKeys();
			
coins = this.physics.add.sprite(
			0,
			0,
			"coins",
			"coins00.png"
		);
		coins.setScale(0.04)
		


		coinGroup = this.physics.add.staticGroup({
			key: 'coins',
			frameQuantity: 30,
			immovable: true
		});
		coins.enableBody = true

		//hud = this.add.container([timer, score]);
		//lock it to the camera
		//hud.setScrollFactor(0);


		var coinChildren = coinGroup.getChildren();

    for (var i = 0; i < coinChildren.length; i++)
    {
        var x = Phaser.Math.Between(200, 2000);
        var y = Phaser.Math.Between(270, 300);

        coinChildren[i].setPosition(x, y);
    }

    coinGroup.refresh();

    /*for (var i = 0; i <= 2; i++)
    {
        //  This creates a new Phaser.Sprite instance within the group
        //  It will be randomly placed within the world and use the 'baddie' image to display
        coins.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'coins');
				//coins.setScale(0.04)
    }*/


		timer = this.add.text(30, 100, "0", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontSize: 20,
			color: "black",
		});

		this.physics.add.collider(giovanniPlayer, ground1);
		this.physics.add.collider(giovanniPlayer, ground2);
		this.physics.add.collider(giovanniPlayer, ground3);
		this.physics.add.collider(giovanniPlayer, ground4);

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



		this.physics.add.overlap(giovanniPlayer, coinGroup, this.collectCoin, null, this)
	}
	

	update() {

		
		timer.x = giovanniPlayer.body.position.x;

		if (giovanniPlayer.y > this.scene.height) {
			this.scene.restart
		}

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
	}
  //coins.anims.play("coinsAnimation", true);
  
   collectCoin (giovanniPlayer, coin) {
	  
	coinGroup.killAndHide(coin)
	coinGroup.remove(coin)
	console.log("hej")
	coin.body.enable = false

	  score += 10;
	  timer.text = score + "/300"

}
	}
export default Giovanni;
