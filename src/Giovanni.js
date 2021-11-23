import Phaser from 'phaser';
/* import background from './bg.png'; */
/* import ground from '../img/ground.png'; */


let groundGame,
		giovanniPlayer,
		giovanniControls, 
		timer,
		coins;

class Giovanni extends Phaser.Scene {
	preload() {
		this.load.image("background", "./assets/bg.png");
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
		)
		
	}

	create() {
		this.add.image(400, 400, "background");	
    groundGame = this.physics.add.staticSprite(400, 400, "ground");
    giovanniPlayer = this.physics.add.sprite(
			30,
      290,
      "runninggiovanni",
      "runningG0.png"
			);
			giovanniPlayer.setScale(0.05)
			giovanniControls = this.input.keyboard.createCursorKeys();
			
			coins = this.physics.add.sprite(
				60,
				300,
				"coins",
				"coins00.png"
				);
				coins.setScale(0.04)
				timer = this.add.text(10, 10, "00000", {
					fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
					fontSize: 50,
					color: "black",
				});
			this.physics.add.collider(giovanniPlayer, groundGame)
			this.physics.add.collider(coins, groundGame)
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
  }

	update() {
		if (giovanniControls.left.isDown) {
				giovanniPlayer.setVelocity(-200, 0);
				giovanniPlayer.flipX = true;
			} 
			else if (giovanniControls.right.isDown) {
				giovanniPlayer.setVelocity(200, 0);
				giovanniPlayer.flipX = false;
			} 
			else if (giovanniControls.left.isDown && giovanniControls.space.isDown) {
				giovanniPlayer.setVelocity(-200, -200);
				giovanniPlayer.flipX = true;
			}
			else if (giovanniControls.right.isDown && giovanniControls.space.isDown) {
				giovanniPlayer.setVelocity(200, -200);
				giovanniPlayer.flipX = true;
			}
			else if (giovanniPlayer.body.touching.down && giovanniControls.space.isDown) {
				giovanniPlayer.setVelocity(0, -150);
			}
			else {
				giovanniPlayer.setVelocityX(0);
			}
			coins.anims.play("coinsAnimation", true);
		}
		




		



}

export default Giovanni;
