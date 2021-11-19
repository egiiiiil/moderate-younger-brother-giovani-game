import Phaser from 'phaser';
import background from './img/bg.png';
import ground from './img/ground.png';
import giovanni from './img/standing-g-s.png';

let groundGame,
		giovanniPlayer,
		giovanniControls, 
		timer;

class Giovanni extends Phaser.Scene {
	preload() {
		this.load.image("background", background);
		this.load.image("ground", ground);
		this.load.image("giovanni", giovanni);
	}

	create() {
		this.add.image(400, 400, "background")
		groundGame = this.physics.add.staticSprite(400, 400, "ground");
		giovanniPlayer = this.physics.add.sprite(400, 250, "giovanni");
		giovanniControls = this.input.keyboard.createCursorKeys();
		timer = this.add.text(10, 10, '00000', {
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
				giovanniPlayer.setVelocity(0, -150);
			}
			else {
				giovanniPlayer.setVelocityX(0);
			}
		}
		








	}
}

export default Giovanni;
