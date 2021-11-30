import Phaser from "phaser";
import { Tile } from "phaser/src/tilemaps";


let giovanniPlayer,
		giovanniControls,
		timer,
		coins,
		bg,
		level1,
		level2,
  	coinGroup,
		patrikEnemy;
let resetGame = 0;
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
			

		coins = this.physics.add.sprite(
			0,
			0,
			"coins",
			"coins00.png"
		);
		coins.setScale(0.04)
		


		coinGroup = this.physics.add.staticGroup({
			key: 'coins',
			frameQuantity: 60,
			immovable: true
		});
		coins.enableBody = true

		//hud = this.add.container([timer, score]);
		//lock it to the camera
		//hud.setScrollFactor(0);



		var coinChildren = coinGroup.getChildren();

		//for (var i = 0; i < coinChildren.length; i++) {
		for (var i = 0; i < coinChildren.length; i++) {
			 console.log(coinChildren[i])
			 coinChildren[0].setPosition(200, 270);
			 coinChildren[1].setPosition(250, 270);
			 coinChildren[2].setPosition(300, 270);
			 coinChildren[3].setPosition(350, 270);
			 coinChildren[4].setPosition(400, 270);
			 coinChildren[5].setPosition(450, 270);
			 coinChildren[6].setPosition(500, 270);
			 coinChildren[7].setPosition(550, 270);
			 coinChildren[8].setPosition(600, 270);
			 coinChildren[9].setPosition(650, 270);
			coinChildren[10].setPosition(700, 270);
			coinChildren[11].setPosition(750, 270);
			coinChildren[12].setPosition(800, 270);
			coinChildren[13].setPosition(850, 270);
			coinChildren[14].setPosition(900, 270);
			coinChildren[15].setPosition(950, 270);

			coinChildren[16].setPosition(200, 220);
			coinChildren[17].setPosition(250, 220);
			coinChildren[18].setPosition(300, 220);
			coinChildren[19].setPosition(350, 220);
			coinChildren[20].setPosition(400, 220);
			coinChildren[21].setPosition(450, 220);
			coinChildren[22].setPosition(500, 220);
			coinChildren[23].setPosition(550, 220);
			coinChildren[24].setPosition(600, 220);
			coinChildren[25].setPosition(650, 220);
			coinChildren[26].setPosition(700, 220);
			coinChildren[27].setPosition(750, 220);
			coinChildren[28].setPosition(800, 220);
			coinChildren[29].setPosition(850, 220);
			coinChildren[30].setPosition(900, 220);
			coinChildren[31].setPosition(950, 220);


			coinChildren[32].setPosition(1100, 270);
			coinChildren[33].setPosition(1150, 270);
			coinChildren[34].setPosition(1200, 270);
			coinChildren[35].setPosition(1250, 270);
			coinChildren[36].setPosition(1300, 270);
			coinChildren[37].setPosition(1350, 270);
			coinChildren[38].setPosition(1400, 270);
			coinChildren[39].setPosition(1450, 270);

		 	coinChildren[40].setPosition(1550, 270);


			coinChildren[41].setPosition(1100, 220);
			coinChildren[42].setPosition(1150, 220);
			coinChildren[43].setPosition(1200, 220);
			coinChildren[44].setPosition(1250, 220);
			coinChildren[45].setPosition(1300, 220);
			coinChildren[46].setPosition(1350, 220);
			coinChildren[47].setPosition(1400, 220);
			coinChildren[48].setPosition(1450, 220);
			coinChildren[49].setPosition(1500, 220);
			coinChildren[50].setPosition(1550, 220);


		}

    coinGroup.refresh();


		timer = this.add.text(30, 100, "0", {
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



		this.physics.add.overlap(giovanniPlayer, coinGroup, this.collectCoin, null, this)
	}
	

	update() {
		timer.x = giovanniPlayer.body.position.x;
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
  
  collectCoin (giovanniPlayer, coin) {
	  
		coinGroup.killAndHide(coin)
		coinGroup.remove(coin)
		console.log("hej")
		coin.body.enable = false

	  score += 1;
	  timer.text = score + "/30"
		}

	


}



	
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

	 		console.log(giovanniPlayer.y > 1000);
	console.log(resetGame); 

	/*function resetGame() {
		giovanniPlayer.setPosition(30, 290);
	}

	function endGame() {
		this.scene.add("highscore", HighscorePage, true);
		this.scene.remove("Giovanni");
	}*/


}

export default Giovanni;
