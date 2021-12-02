import Phaser from "phaser";
import { Tile } from "phaser/src/tilemaps";
import Highscore from "./HighscorePage";

let giovanniPlayer,
	giovanniControls,
	coins,
	bg,
	level1,
	level2,
	coinGroup,
	patrikEnemy,
	timerText,
	timer,
	callBeforeAndAfterZero,
	hud;
let resetGame = 0;
let score = 0;
let scoreText;

console.log("sup");

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

		this.load.spritesheet(
			"coins",
			"./assets/coins/coins.png",
			{
				frameWidth: 32,
				frameHeight: 32,
			},
		);

		this.load.image("tile", "./assets/tile/tile.png");
		this.load.image("teo", "./assets/teo.png");
		this.load.image("rootdude", "./assets/roots.png");
		this.load.image("sofa1", "./assets/sofa1.png");
		this.load.image("sofa2", "./assets/sofa2.png");
		this.load.image("roots1", "./assets/roots1.png");
		this.load.image("roots2", "./assets/roots2.png");
		this.load.image("reception", "./assets/reception.png");
		this.load.image("table", "./assets/table.png");
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
		bg = this.add.image(center.x, center.y, "sky");
		bg.setDisplaySize(this.fullScreen.x, this.fullScreen.y)
		bg.setScrollFactor(0);

		///////////////////////////////GROUND/////////////////////////////////////////////
		let ground1 = this.add.tileSprite(-5, 800, 200, 400, "tile");
		this.physics.add.existing(ground1);
		ground1.body.setImmovable(true);
		ground1.body.moves = false;
		let ground2 = this.add.tileSprite(580, 800, 800, 400, "tile");
		this.physics.add.existing(ground2);
		ground2.body.setImmovable(true);
		ground2.body.moves = false;
		let ground3 = this.add.tileSprite(1450, 800, 800, 400, "tile");
		this.physics.add.existing(ground3);
		ground3.body.setImmovable(true);
		ground3.body.moves = false;
		let ground4 = this.add.tileSprite(2100, 800, 275, 400, "tile");
		this.physics.add.existing(ground4);
		ground4.body.setImmovable(true);
		ground4.body.moves = false;
		let ground5 = this.add.tileSprite(2500, 800, 300, 400, "tile");
		this.physics.add.existing(ground5);
		ground5.body.setImmovable(true);
		ground5.body.moves = false;

		/////////////////////////TOP PLATFORM///////////////////////////////////////
		let ground6 = this.add.tileSprite(-5, 270, 200, 20, "tile");
		this.physics.add.existing(ground6);
		ground6.body.setImmovable(true);
		ground6.body.moves = false;
		let ground7 = this.add.tileSprite(580, 270, 800, 20, "tile");
		this.physics.add.existing(ground7);
		ground7.body.setImmovable(true);
		ground7.body.moves = false;
		let ground8 = this.add.tileSprite(1450, 270, 800, 20, "tile");
		this.physics.add.existing(ground8);
		ground8.body.setImmovable(true);
		ground8.body.moves = false;
		let ground9 = this.add.tileSprite(2100, 270, 290, 20, "tile");
		this.physics.add.existing(ground9);
		ground9.body.setImmovable(true);
		ground9.body.moves = false;

		///////////////////////////////RECEPTION//////////////////////////////////////
		let reception = this.add.tileSprite(400, 570, 160, 60, "tile");
		this.physics.add.existing(reception);
		reception.body.setImmovable(true);
		reception.body.moves = false;

		this.add.image(400, 570, "reception");

		this.add.text(340, 450, "RECEPTION", {
			//fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontFamily: 'dogicabold, monospace',
			fontSize: 20,
			color: "black",
		});
		this.add.text(355, 420, "Hyper Island", {
			//fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontFamily: 'dogicabold, monospace',
			fontSize: 15,
			color: "black",
		});

		this.add.image(400, 515, "teo");

		///////////////////////////////ROOTS CAFE///////////////////////////////////////
		let rootsCafe1 = this.add.tileSprite(700, 570, 160, 60, "tile");
		this.physics.add.existing(rootsCafe1);
		rootsCafe1.body.setImmovable(true);
		rootsCafe1.body.moves = false;
		let rootsCafe2 = this.add.tileSprite(860, 560, 160, 80, "tile");
		this.physics.add.existing(rootsCafe2);
		rootsCafe2.body.setImmovable(true);
		rootsCafe2.body.moves = false;

		this.add.image(700, 570, "roots1");
		this.add.image(860, 560, "roots2");

		this.add.text(665, 750, "ROOTS", {
			//fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontFamily: 'dogicabold, monospace',
			fontSize: 20,
			color: "white",
		});
		this.add.text(685, 775, "Cafe", {
			fontFamily: "Snell Roundhand, cursive",
			fontSize: 15,
			color: "white",
		});
		this.add.image(845, 500, "rootdude");

		/////////////////////////////SOFAS/////////////////////////////////////////////////
		let sofa1 = this.add.tileSprite(1100, 570, 20, 60, "tile");
		this.physics.add.existing(sofa1);
		sofa1.body.setImmovable(true);
		sofa1.body.moves = false;
		let sofa2 = this.add.tileSprite(1130, 580, 40, 40, "tile");
		this.physics.add.existing(sofa2);
		sofa2.body.setImmovable(true);
		sofa2.body.moves = false;
		let sofa3 = this.add.tileSprite(1280, 580, 40, 40, "tile");
		this.physics.add.existing(sofa3);
		sofa3.body.setImmovable(true);
		sofa3.body.moves = false;
		let sofa4 = this.add.tileSprite(1310, 570, 20, 60, "tile");
		this.physics.add.existing(sofa4);
		sofa4.body.setImmovable(true);
		sofa4.body.moves = false;
		let sofa5 = this.add.tileSprite(1330, 570, 20, 60, "tile");
		this.physics.add.existing(sofa5);
		sofa5.body.setImmovable(true);
		sofa5.body.moves = false;
		let sofa6 = this.add.tileSprite(1360, 580, 40, 40, "tile");
		this.physics.add.existing(sofa6);
		sofa6.body.setImmovable(true);
		sofa6.body.moves = false;

		this.add.image(1120, 570, "sofa1");
		this.add.image(1290, 570, "sofa2");
		this.add.image(1350, 570, "sofa1");

		/////////////////////////////STAIRS////////////////////////////////////////////////
		let stairs1 = this.add.tileSprite(2200, 575, 50, 50, "tile");
		this.physics.add.existing(stairs1);
		stairs1.body.setImmovable(true);
		stairs1.body.moves = false;
		let stairs2 = this.add.tileSprite(2150, 575, 50, 50, "tile");
		this.physics.add.existing(stairs2);
		stairs2.body.setImmovable(true);
		stairs2.body.moves = false;
		let stairs3 = this.add.tileSprite(2100, 575, 50, 50, "tile");
		this.physics.add.existing(stairs3);
		stairs3.body.setImmovable(true);
		stairs3.body.moves = false;
		let stairs4 = this.add.tileSprite(2050, 575, 50, 50, "tile");
		this.physics.add.existing(stairs4);
		stairs4.body.setImmovable(true);
		stairs4.body.moves = false;
		let stairs5 = this.add.tileSprite(2200, 525, 50, 50, "tile");
		this.physics.add.existing(stairs5);
		stairs5.body.setImmovable(true);
		stairs5.body.moves = false;
		let stairs6 = this.add.tileSprite(2150, 525, 50, 50, "tile");
		this.physics.add.existing(stairs6);
		stairs6.body.setImmovable(true);
		stairs6.body.moves = false;
		let stairs7 = this.add.tileSprite(2100, 525, 50, 50, "tile");
		this.physics.add.existing(stairs7);
		stairs7.body.setImmovable(true);
		stairs7.body.moves = false;
		let stairs8 = this.add.tileSprite(2200, 475, 50, 50, "tile");
		this.physics.add.existing(stairs8);
		stairs8.body.setImmovable(true);
		stairs8.body.moves = false;
		let stairs9 = this.add.tileSprite(2150, 475, 50, 50, "tile");
		this.physics.add.existing(stairs9);
		stairs9.body.setImmovable(true);
		stairs9.body.moves = false;
		let stairs10 = this.add.tileSprite(2200, 425, 50, 50, "tile");
		this.physics.add.existing(stairs10);
		stairs10.body.setImmovable(true);
		stairs10.body.moves = false;

		/////////////////////////RANDOM BLOCKS FOR CLIMBING////////////////////////////////////
		///////1/////
		let stairs11 = this.add.tileSprite(2415, 585, 50, 30, "tile");
		this.physics.add.existing(stairs11);
		stairs11.body.setImmovable(true);
		stairs11.body.moves = false;
		////////2/////
		let stairs12 = this.add.tileSprite(2625, 575, 50, 50, "tile");
		this.physics.add.existing(stairs12);
		stairs12.body.setImmovable(true);
		stairs12.body.moves = false;
		///////3//////
		let stairs13 = this.add.tileSprite(2310, 535, 50, 50, "tile");
		this.physics.add.existing(stairs13);
		stairs13.body.setImmovable(true);
		stairs13.body.moves = false;
		///////4//////
		let stairs14 = this.add.tileSprite(2520, 520, 50, 50, "tile");
		this.physics.add.existing(stairs14);
		stairs14.body.setImmovable(true);
		stairs14.body.moves = false;
		////////5//////
		let stairs15 = this.add.tileSprite(2625, 465, 50, 50, "tile");
		this.physics.add.existing(stairs15);
		stairs15.body.setImmovable(true);
		stairs15.body.moves = false;
		///////6///////
		let stairs16 = this.add.tileSprite(2520, 400, 50, 50, "tile");
		this.physics.add.existing(stairs16);
		stairs16.body.setImmovable(true);
		stairs16.body.moves = false;
		//////7//////
		let stairs17 = this.add.tileSprite(2625, 345, 50, 50, "tile");
		this.physics.add.existing(stairs17);
		stairs17.body.setImmovable(true);
		stairs17.body.moves = false;
		//////8/////
		let stairs18 = this.add.tileSprite(2520, 280, 50, 50, "tile");
		this.physics.add.existing(stairs18);
		stairs18.body.setImmovable(true);
		stairs18.body.moves = false;
		////////9//////
		let stairs19 = this.add.tileSprite(2415, 475, 50, 50, "tile");
		this.physics.add.existing(stairs19);
		stairs19.body.setImmovable(true);
		stairs19.body.moves = false;
		//////10//////
		let stairs20 = this.add.tileSprite(2310, 410, 50, 50, "tile");
		this.physics.add.existing(stairs20);
		stairs20.body.setImmovable(true);
		stairs20.body.moves = false;
		//////11/////
		let stairs21 = this.add.tileSprite(2415, 345, 50, 50, "tile");
		this.physics.add.existing(stairs21);
		stairs21.body.setImmovable(true);
		stairs21.body.moves = false;

		//////////////////////////////////////////TABLES/////////////////////////////////////////////

		let table1 = this.add.tileSprite(2100, 220, 130, 10, "tile");
		this.physics.add.existing(table1);
		table1.body.setImmovable(true);
		table1.body.moves = false;
		let tableLegs1 = this.add.tileSprite(2050, 243, 10, 35, "tile");
		this.physics.add.existing(tableLegs1);
		tableLegs1.body.setImmovable(true);
		tableLegs1.body.moves = false;
		let tableLegs2 = this.add.tileSprite(2150, 243, 10, 35, "tile");
		this.physics.add.existing(tableLegs2);
		tableLegs2.body.setImmovable(true);
		tableLegs2.body.moves = false;

		let table2 = this.add.tileSprite(1740, 220, 130, 10, "tile");
		this.physics.add.existing(table2);
		table2.body.setImmovable(true);
		table2.body.moves = false;
		let tableLegs3 = this.add.tileSprite(1690, 243, 10, 35, "tile");
		this.physics.add.existing(tableLegs3);
		tableLegs3.body.setImmovable(true);
		tableLegs3.body.moves = false;
		let tableLegs4 = this.add.tileSprite(1790, 243, 10, 35, "tile");
		this.physics.add.existing(tableLegs4);
		tableLegs4.body.setImmovable(true);
		tableLegs4.body.moves = false;

		let table3 = this.add.tileSprite(1440, 220, 130, 10, "tile");
		this.physics.add.existing(table3);
		table3.body.setImmovable(true);
		table3.body.moves = false;
		let tableLegs5 = this.add.tileSprite(1390, 243, 10, 35, "tile");
		this.physics.add.existing(tableLegs5);
		tableLegs5.body.setImmovable(true);
		tableLegs5.body.moves = false;
		let tableLegs6 = this.add.tileSprite(1490, 243, 10, 35, "tile");
		this.physics.add.existing(tableLegs6);
		tableLegs6.body.setImmovable(true);
		tableLegs6.body.moves = false;

		let table4 = this.add.tileSprite(1140, 220, 130, 10, "tile");
		this.physics.add.existing(table4);
		table4.body.setImmovable(true);
		table4.body.moves = false;
		let tableLegs7 = this.add.tileSprite(1090, 243, 10, 35, "tile");
		this.physics.add.existing(tableLegs7);
		tableLegs7.body.setImmovable(true);
		tableLegs7.body.moves = false;
		let tableLegs8 = this.add.tileSprite(1190, 243, 10, 35, "tile");
		this.physics.add.existing(tableLegs8);
		tableLegs8.body.setImmovable(true);
		tableLegs8.body.moves = false;

		this.add.image(2100, 237, "table");
		this.add.image(1740, 237, "table");
		this.add.image(1440, 237, "table");
		this.add.image(1140, 237, "table");

		/////////////////////////////////////////LAMPS////////////////////////////////////////////

		let lamp1 = this.add.tileSprite(1900, -20, 10, 370, "tile");
		this.physics.add.existing(lamp1);
		lamp1.body.setImmovable(true);
		lamp1.body.moves = false;
		let lampShade1 = this.add.tileSprite(1900, 150, 30, 30, "tile");
		this.physics.add.existing(lampShade1);
		lampShade1.body.setImmovable(true);
		lampShade1.body.moves = false;

		let lamp2 = this.add.tileSprite(1590, -20, 10, 370, "tile");
		this.physics.add.existing(lamp2);
		lamp2.body.setImmovable(true);
		lamp2.body.moves = false;
		let lampShade2 = this.add.tileSprite(1590, 150, 30, 30, "tile");
		this.physics.add.existing(lampShade2);
		lampShade2.body.setImmovable(true);
		lampShade2.body.moves = false;

		let lamp3 = this.add.tileSprite(1290, -20, 10, 370, "tile");
		this.physics.add.existing(lamp3);
		lamp3.body.setImmovable(true);
		lamp3.body.moves = false;
		let lampShade3 = this.add.tileSprite(1290, 150, 30, 30, "tile");
		this.physics.add.existing(lampShade3);
		lampShade3.body.setImmovable(true);
		lampShade3.body.moves = false;

		/////////////////////////////////////////////PIPES/////////////////////////////////////////////

		let pipe1 = this.add.tileSprite(1700, 380, 60, 200, "tile");
		this.physics.add.existing(pipe1);
		pipe1.body.setImmovable(true);
		pipe1.body.moves = false;
		let pipe2 = this.add.tileSprite(1500, 380, 60, 200, "tile");
		this.physics.add.existing(pipe2);
		pipe2.body.setImmovable(true);
		pipe2.body.moves = false;
		let pipe3 = this.add.tileSprite(1700, 645, 60, 200, "tile");
		this.physics.add.existing(pipe3);
		pipe3.body.setImmovable(true);
		pipe3.body.moves = false;
		let pipe4 = this.add.tileSprite(1500, 645, 60, 200, "tile");
		this.physics.add.existing(pipe4);
		pipe4.body.setImmovable(true);
		pipe4.body.moves = false;
		let pipe5 = this.add.tileSprite(250, 245, 60, 60, "tile");
		this.physics.add.existing(pipe5);
		pipe5.body.setImmovable(true);
		pipe5.body.moves = false;
		let pipe6 = this.add.tileSprite(900, 245, 60, 60, "tile");
		this.physics.add.existing(pipe6);
		pipe6.body.setImmovable(true);
		pipe6.body.moves = false;

		giovanniPlayer = this.physics.add.sprite(
			30,
			570,
			"runninggiovanni",
			"runningG0.png"
		);
		giovanniPlayer.setScale(0.8);
		giovanniControls = this.input.keyboard.createCursorKeys();
		giovanniPlayer.setCollideWorldBounds(true);
		this.physics.world.setBounds(0, 0, 10000, 1500);

		

		coinGroup = this.physics.add.staticGroup({
			key: "coins",
			frameQuantity: 84,
			immovable: true,
		});
		
		var coinChildren = coinGroup.getChildren();
		
		
		
		for (var i = 0; i < coinChildren.length; i++) {
/* 			coinChildren.physics.add.spritesheet('coins')
			coinChildren[i].anims.play("coinsAnimation"); */
			coinChildren[0].setPosition(200, 570);
			coinChildren[1].setPosition(250, 570);
			coinChildren[2].setPosition(300, 570);
			
			coinChildren[6].setPosition(500, 570);
			coinChildren[7].setPosition(550, 570);
			coinChildren[8].setPosition(600, 570);
		
		   coinChildren[16].setPosition(200, 520);
		   coinChildren[17].setPosition(250, 520);
		   coinChildren[18].setPosition(300, 520);
		  
		   coinChildren[22].setPosition(500, 520);
		   coinChildren[23].setPosition(550, 520);
		   coinChildren[24].setPosition(600, 520);
		   coinChildren[25].setPosition(650, 520);
		   coinChildren[26].setPosition(700, 520);
		   coinChildren[27].setPosition(750, 520);
		   coinChildren[28].setPosition(810, 470);
		   coinChildren[29].setPosition(860, 620);
		   coinChildren[30].setPosition(910, 470);
		   
		   coinChildren[34].setPosition(1200, 570);
		   coinChildren[38].setPosition(1400, 570);
		   coinChildren[39].setPosition(1450, 570);

			coinChildren[40].setPosition(1550, 570);
			coinChildren[41].setPosition(1600, 570);
		   coinChildren[42].setPosition(1150, 470);
		   coinChildren[43].setPosition(1200, 470);
		   coinChildren[44].setPosition(1250, 470);

		   coinChildren[45].setPosition(1600, 470);
		   coinChildren[46].setPosition(1650, 570);

		   coinChildren[9].setPosition(1900, 500);

		   coinChildren[59].setPosition(2000, 520);
		   coinChildren[3].setPosition(2000, 570);
			coinChildren[4].setPosition(2050, 520);
			coinChildren[5].setPosition(2100, 470);

		   coinChildren[10].setPosition(2150, 220);
		   coinChildren[11].setPosition(2200, 170);
		   coinChildren[12].setPosition(2850, 100);
		   coinChildren[13].setPosition(2520, 370);
		   coinChildren[14].setPosition(2520, 20);
		   coinChildren[15].setPosition(2310, 70);

		    coinChildren[19].setPosition(2520, 330);
		   coinChildren[20].setPosition(2700, 380);
		   coinChildren[21].setPosition(2520, 140);

		   coinChildren[31].setPosition(1900, 400);
		   coinChildren[32].setPosition(1950, 150);
		   coinChildren[33].setPosition(1850, 150);
		   coinChildren[35].setPosition(1800, 150);
		   coinChildren[36].setPosition(1750, 150);
		   coinChildren[37].setPosition(1700, 150);

		    coinChildren[47].setPosition(1650, 150);
		   coinChildren[48].setPosition(1550, 150);
		   coinChildren[49].setPosition(1500, 150);
		   coinChildren[50].setPosition(1450, 350);
		   coinChildren[51].setPosition(1400, 350);
		   coinChildren[52].setPosition(1350, 150);

		   coinChildren[53].setPosition(1250, 150);
		   coinChildren[54].setPosition(1200, 150);
		   coinChildren[55].setPosition(1150, 150);
		   coinChildren[56].setPosition(1100, 150);
		   coinChildren[57].setPosition(1050, 150);

		   coinChildren[58].setPosition(900, 150);

		   //UNFIXED COINS DOWN HERE

		   coinChildren[60].setPosition(850, 190);
		   coinChildren[61].setPosition(800, 190);
		   coinChildren[62].setPosition(750, 190);
		   coinChildren[63].setPosition(700, 190);
		   coinChildren[64].setPosition(650, 190);
		   coinChildren[65].setPosition(600, 190);

		   coinChildren[66].setPosition(550, 190);
		   coinChildren[67].setPosition(500, 190);
		   coinChildren[68].setPosition(450, 190);
		   coinChildren[69].setPosition(400, 190);
		   coinChildren[70].setPosition(350, 190);

		   coinChildren[71].setPosition(300, 190);

		   coinChildren[72].setPosition(250, 190);
		   coinChildren[73].setPosition(200, 190);
		   coinChildren[74].setPosition(150, 190);
		   coinChildren[75].setPosition(100, 190);
		   coinChildren[76].setPosition(50, 190);


		   coinChildren[77].setPosition(300, 190);
		   coinChildren[78].setPosition(250, 190);
		   coinChildren[79].setPosition(200, 190);
		   coinChildren[80].setPosition(150, 190);
		   coinChildren[81].setPosition(100, 190);
		   coinChildren[82].setPosition(50, 190);

		   coinChildren[83].setPosition(140, 500);


		}

		coinGroup.refresh();

		/* 		timerText = this.add.text(100, 50, "30000", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontSize: 20,
			color: "black",
		}); */
		//this.initialTime = 40;
		this.initialTime = 10;
		timerText = this.add.text(32, 32, convertTimeToSeconds(this.initialTime), {
							fontFamily: 'dogicabold, monospace',
							fontSize: 20,
							color: "black",
						});
		// Each 1000 ms call beforeAndAfterZero
		callBeforeAndAfterZero = this.time.addEvent({
			delay: 1000,
			callback: beforeAndAfterZero,
			callbackScope: this,
			loop: true,
		});

		scoreText = this.add.text(30, 55, "0", {
			//fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontFamily: 'dogicabold, monospace',
			fontSize: 20,
			color: "black",
		});

		/////////////////////////////PHYSICS////////////////////////////////////////

		this.physics.add.collider(giovanniPlayer, ground1);
		this.physics.add.collider(giovanniPlayer, ground2);
		this.physics.add.collider(giovanniPlayer, ground3);
		this.physics.add.collider(giovanniPlayer, ground4);
		this.physics.add.collider(giovanniPlayer, ground5);
		this.physics.add.collider(giovanniPlayer, ground6);
		this.physics.add.collider(giovanniPlayer, ground7);
		this.physics.add.collider(giovanniPlayer, ground8);
		this.physics.add.collider(giovanniPlayer, ground9);

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

		this.physics.add.collider(giovanniPlayer, stairs11);
		this.physics.add.collider(giovanniPlayer, stairs12);
		this.physics.add.collider(giovanniPlayer, stairs13);
		this.physics.add.collider(giovanniPlayer, stairs14);
		this.physics.add.collider(giovanniPlayer, stairs15);
		this.physics.add.collider(giovanniPlayer, stairs16);
		this.physics.add.collider(giovanniPlayer, stairs17);
		this.physics.add.collider(giovanniPlayer, stairs18);
		this.physics.add.collider(giovanniPlayer, stairs19);
		this.physics.add.collider(giovanniPlayer, stairs20);
		this.physics.add.collider(giovanniPlayer, stairs21);

		this.physics.add.collider(giovanniPlayer, pipe1);
		this.physics.add.collider(giovanniPlayer, pipe2);
		this.physics.add.collider(giovanniPlayer, pipe3);
		this.physics.add.collider(giovanniPlayer, pipe4);
		this.physics.add.collider(giovanniPlayer, pipe5);
		this.physics.add.collider(giovanniPlayer, pipe6);
		/* this.physics.add.collider(giovanniPlayer, groundGame); */

		this.physics.add.collider(giovanniPlayer, reception);
		this.physics.add.collider(giovanniPlayer, rootsCafe1);
		this.physics.add.collider(giovanniPlayer, rootsCafe2);
		this.physics.add.collider(giovanniPlayer, sofa1);
		this.physics.add.collider(giovanniPlayer, sofa2);
		this.physics.add.collider(giovanniPlayer, sofa3);
		this.physics.add.collider(giovanniPlayer, sofa4);
		this.physics.add.collider(giovanniPlayer, sofa5);
		this.physics.add.collider(giovanniPlayer, sofa6);
		this.physics.add.collider(giovanniPlayer, table1);
		this.physics.add.collider(giovanniPlayer, tableLegs1);
		this.physics.add.collider(giovanniPlayer, tableLegs2);
		this.physics.add.collider(giovanniPlayer, table2);
		this.physics.add.collider(giovanniPlayer, tableLegs3);
		this.physics.add.collider(giovanniPlayer, tableLegs4);
		this.physics.add.collider(giovanniPlayer, table3);
		this.physics.add.collider(giovanniPlayer, tableLegs5);
		this.physics.add.collider(giovanniPlayer, tableLegs6);
		this.physics.add.collider(giovanniPlayer, table4);
		this.physics.add.collider(giovanniPlayer, tableLegs7);
		this.physics.add.collider(giovanniPlayer, tableLegs8);
		this.physics.add.collider(giovanniPlayer, lamp1);
		this.physics.add.collider(giovanniPlayer, lampShade1);
		this.physics.add.collider(giovanniPlayer, lamp2);
		this.physics.add.collider(giovanniPlayer, lampShade2);
		this.physics.add.collider(giovanniPlayer, lamp3);
		this.physics.add.collider(giovanniPlayer, lampShade3);

		//COLLIDER FOR GIOVANNI AND PATRIK
		this.physics.add.collider(giovanniPlayer, patrikEnemy);

		/////////////////////ANIMATIONS//////////////////////

/* 		this.anims.create({
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
		}); */

		this.anims.create({
      key: "coinsAnimation",
      frames: this.anims.generateFrameNumbers("coins", {
        start: 0,
        end: 6,
      }),
      frameRate: 15,
      repeat: -1,
    });


		this.anims.create({
			key: "giovanniAnimation",
			frames: [
				{ key: "runninggiovanni", frame: "runningG1.png" },
				{ key: "runninggiovanni", frame: "runningG2.png" },
				{ key: "runninggiovanni", frame: "runningG3.png" },
			],
			frameRate: 10,
			repeat: 0,
		});

		this.anims.create({
			key: "giovanniStand",
			frames: [{ key: "runninggiovanni", frame: "runningG0.png" }],
			frameRate: 2,
			repeat: 0,
		});

		this.anims.create({
			key: "giovannijump",
			frames: [{ key: "runninggiovanni", frame: "jumpingG.png" }],
			frameRate: 10,
			repeat: 0,
		});

		this.cameras.main.setBounds(0, 0, 7000, 1100);
		this.cameras.main.startFollow(giovanniPlayer);
		

		this.physics.add.overlap(
			giovanniPlayer,
			coinGroup,
			this.collectCoin,
			null,
			this
		);
	}
	resetScore() {
		console.log("reset score");
	}
	reset(world) {
		//console.log(giovanniPlayer.y > 1500);

		if (giovanniPlayer.y > 1200) {
			this.resetGameFunction();
			this.resetScore();
		}
		if (patrikEnemy && this.physics.add.collider(giovanniPlayer, patrikEnemy)) {
			this.resetGameFunction();
			this.resetScore();
		}
		if (timer == 0) {
			this.resetGameFunction();
			this.resetScore();
		}
		if (resetGame > 2) {
			this.endGame();
		}
	}
	endGame() {
		this.scene.start("Highscore");
		
	}

	resetGameFunction() {
		giovanniPlayer.setPosition(30, 530);
	}
	update() {
		this.reset();
		if (giovanniControls.left.isUp && giovanniControls.right.isUp) {
			giovanniPlayer.anims.play("giovanniStand", true);
		}
		if (giovanniControls.left.isDown) {
			giovanniPlayer.setVelocityX(-200);
			giovanniPlayer.flipX = true;
			giovanniPlayer.anims.play("giovanniAnimation", true);
		} else if (giovanniControls.right.isDown) {
			giovanniPlayer.setVelocityX(200);
			giovanniPlayer.flipX = false;
			giovanniPlayer.anims.play("giovanniAnimation", true);
		} else {
			giovanniPlayer.setVelocityX(0);
		}
		if (giovanniPlayer.body.touching.down && giovanniControls.space.isDown) {
			giovanniPlayer.setVelocityY(-230);
			giovanniPlayer.anims.play("giovannijump", true);
		}
		if (giovanniPlayer.body.touching.down != true) {
			giovanniPlayer.anims.play("giovannijump", true);
		}
		
		

		/* 		console.log(giovanniPlayer.y > 1000);
		console.log(resetGame); */

		this.timerUpdate();
		hud = this.add.container(0, 0, [timerText, scoreText]);
		//lock it to the camera
		hud.setScrollFactor(0);

	}

	collectCoin(giovanniPlayer, coin) {
		coinGroup.killAndHide(coin);
		coinGroup.remove(coin);

		coin.body.enable = false;

		score += 1;
		scoreText.text = score;
		console.log(score);
	}

	timerUpdate (timer) {
		const date = new Date
		


	}
}

function convertTimeToSeconds(seconds) {
	// Minutes
	var minutes = Math.floor(seconds / 60);
	// Seconds
	var partInSeconds = seconds % 60;
	// Adds left zeros to seconds
	partInSeconds = partInSeconds.toString().padStart(2, "0");
	// Returns formated time
	return `00${partInSeconds}`;
}

function beforeAndAfterZero() {
	if (this.initialTime == 0) {

		timerText.setText(`Time's up!`)
	/* }
	if (this.initialTime == -3) { */
		/* let name = prompt('name') */
		getLocalStorage()
		/* bg.destroy(); */
		this.scene.start("Highscore")
		
	} else {
		this.initialTime -= 1; // One second
		timerText.setText(convertTimeToSeconds(this.initialTime));
	}
}

/* function playerObject() {
	//monster object
	let username = localStorage.getItem("players");
	if(!username){
    username = prompt("Please enter username");
    localStorage.setItem("player", username);
	}	
} */
function getLocalStorage() {
	/* if (localStorage.getItem("players")) { */
		let oldPlayers = JSON.parse(localStorage.getItem('players')) || [];
		let newPlayer = prompt('name');
		let newPlayerAndScore = { player: newPlayer, score: score };
		score = 0;
		oldPlayers.push(newPlayerAndScore)
		
		localStorage.setItem('players', JSON.stringify(oldPlayers))

		console.log("something");
		console.log(localStorage.getItem("players"))
	/* } else { */
/* 
	
		let oldPlayers = JSON.parse(localStorage.getItem('players')) || [];
		let newPlayer = prompt('name');
		let newPlayerAndScore = [newPlayer, score];
		oldPlayers.push(newPlayerAndScore)
		
		localStorage.setItem('players', JSON.stringify(oldPlayers)) */
		/* } */
	}

export default Giovanni;
