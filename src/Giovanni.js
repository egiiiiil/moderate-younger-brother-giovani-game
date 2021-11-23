import Phaser from 'phaser';
import background from '../public/img/bg.png';
/* import ground from '../img/ground.png'; */


let groundGame,
		giovanniPlayer,
		giovanniControls, 
		timer;

class Giovanni extends Phaser.Scene {
	preload() {
		this.load.image("background", background);
		this.load.image("ground", "../img/ground.png");
		this.load.multiatlas(
      "runninggiovanni",
      "../img/runninggiovanni/running.json",
      "../img/runninggiovanni"
    );
	}

	create() {
			this.add.image(400, 400, "background");		
    groundGame = this.physics.add.staticSprite(400, 400, "ground");
    giovanniPlayer = this.physics.add.sprite(
      30,
      320,
      "runninggiovanni",
      "runningG2.png"
    );
		giovanniPlayer.setScale(0.05)
    giovanniControls = this.input.keyboard.createCursorKeys();
    timer = this.add.text(10, 10, "00000", {
      fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
      fontSize: 50,
      color: "black",
    });
  }

	update() {
		if (this.physics.world.collide(giovanniPlayer, [groundGame])) {
			
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
			else if (giovanniControls.space.isDown) {
				giovanniPlayer.setVelocity(0, -250);
			}
			else {
				giovanniPlayer.setVelocityX(0);
			}
		}
		








	}
}

export default Giovanni;
