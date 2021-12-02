import Phaser from "phaser";
import { Tile } from "phaser/src/tilemaps";
import { CullBounds } from "phaser/src/tilemaps/components";

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

		this.load.image("tile", "./assets/tile/tile.png");
		this.load.image("teo", "./assets/teo.png");
		this.load.image("rootdude", "./assets/roots.png");
		this.load.image("sofa1", "./assets/sofa1.png");
		this.load.image("sofa2", "./assets/sofa2.png");
		this.load.image("roots1", "./assets/roots1.png");
		this.load.image("roots2", "./assets/roots2.png");
		this.load.image("reception", "./assets/reception.png");
		this.load.image("table", "./assets/table.png");
		this.load.image("lamp", "./assets/lamp.png");
		this.load.image("cloud", "./assets/cloud.png");
		this.load.image("ground1", "./assets/ground200x20.jpeg");
		this.load.image("ground2", "./assets/ground290x20.jpeg");
		this.load.image("ground3", "./assets/ground800x20.jpeg");
		this.load.image("ground4", "./assets/ground200x400.png");
		this.load.image("ground5", "./assets/ground800x400.png");
		this.load.image("ground6", "./assets/ground275x400.png");
		this.load.image("ground7", "./assets/ground300x400.png");
		this.load.image("stairs", "./assets/stairs.png");
		this.load.image("blocks", "./assets/blocks.png");
		this.load.image("grass", "./assets/grass.png");
	}

	create() {
		bg = this.add.image(0, 600, "bg");
		bg.setScale(4, 2.2);
		//////////////////////////////////CLOUDS//////////////////////////////////////
		let cloud = this.add.image(200, 315, "cloud");
		cloud.setScale(3);
		let cloud1 = this.add.image(400, 345, "cloud");
		cloud1.setScale(5);
		let cloud2 = this.add.image(600, 365, "cloud");
		cloud2.setScale(4);
		let cloud3 = this.add.image(800, 315, "cloud");
		cloud3.setScale(6);
		let cloud4 = this.add.image(1000, 355, "cloud");
		cloud4.setScale(4);
		let cloud5 = this.add.image(1200, 325, "cloud");
		cloud5.setScale(2);
		let cloud6 = this.add.image(1300, 375, "cloud");
		cloud6.setScale(4);
		let cloud7 = this.add.image(1500, 315, "cloud");
		cloud7.setScale(6);
		let cloud8 = this.add.image(1700, 335, "cloud");
		cloud8.setScale(4);
		let cloud9 = this.add.image(1900, 355, "cloud");
		cloud9.setScale(3);
		let cloud10 = this.add.image(2100, 325, "cloud");
		cloud10.setScale(5);
		let cloud11 = this.add.image(2300, 375, "cloud");
		cloud11.setScale(2);
		let cloud12 = this.add.image(2400, 335, "cloud");
		cloud12.setScale(3);

		let cloud13 = this.add.image(300, 625, "cloud");
		cloud13.setScale(4);
		let cloud14 = this.add.image(500, 635, "cloud");
		cloud14.setScale(5);
		let cloud15 = this.add.image(700, 550, "cloud");
		cloud15.setScale(2);
		let cloud16 = this.add.image(900, 655, "cloud");
		cloud16.setScale(5);
		let cloud17 = this.add.image(1100, 635, "cloud");
		cloud17.setScale(4);
		let cloud18 = this.add.image(1300, 665, "cloud");
		cloud18.setScale(2);
		let cloud19 = this.add.image(1500, 645, "cloud");
		cloud19.setScale(6);
		let cloud20 = this.add.image(1700, 675, "cloud");
		cloud20.setScale(3);
		let cloud21 = this.add.image(1900, 625, "cloud");
		cloud21.setScale(5);
		let cloud22 = this.add.image(2100, 655, "cloud");
		cloud22.setScale(2);
		let cloud23 = this.add.image(2300, 665, "cloud");
		cloud23.setScale(5);
		let cloud24 = this.add.image(2500, 625, "cloud");
		cloud24.setScale(4);
		let cloud25 = this.add.image(2700, 665, "cloud");
		cloud25.setScale(3);

		///////////////////////////////GRASS//////////////////////////////////////
		let grass = this.add.image(260, 780, "grass");
		grass.setScale(0.4);
		let grass1 = this.add.image(560, 780, "grass");
		grass1.setScale(0.4);
		let grass2 = this.add.image(1200, 780, "grass");
		grass2.setScale(0.4);
		let grass3 = this.add.image(1600, 780, "grass");
		grass3.setScale(0.4);
		let grass4 = this.add.image(1790, 780, "grass");
		grass4.setScale(0.4);
		let grass5 = this.add.image(2050, 780, "grass");
		grass5.setScale(0.4);

		let grass6 = this.add.image(460, 440, "grass");
		grass6.setScale(0.4);
		let grass7 = this.add.image(660, 440, "grass");
		grass7.setScale(0.4);
		let grass8 = this.add.image(1150, 440, "grass");
		grass8.setScale(0.4);
		let grass9 = this.add.image(1300, 440, "grass");
		grass9.setScale(0.4);
		let grass10 = this.add.image(1570, 440, "grass");
		grass10.setScale(0.4);
		let grass11 = this.add.image(2100, 440, "grass");
		grass11.setScale(0.4);

		///////////////////////////////GROUND/////////////////////////////////////////////
		let ground1 = this.add.tileSprite(-5, 1000, 200, 400, "tile");
		this.physics.add.existing(ground1);
		ground1.body.setImmovable(true);
		ground1.body.moves = false;

		this.add.image(-5, 995, "ground4");

		let ground2 = this.add.tileSprite(580, 1000, 800, 400, "tile");
		this.physics.add.existing(ground2);
		ground2.body.setImmovable(true);
		ground2.body.moves = false;

		this.add.image(580, 990, "ground5");

		let ground3 = this.add.tileSprite(1450, 1000, 800, 400, "tile");
		this.physics.add.existing(ground3);
		ground3.body.setImmovable(true);
		ground3.body.moves = false;

		this.add.image(1450, 990, "ground5");

		let ground4 = this.add.tileSprite(2100, 1000, 275, 400, "tile");
		this.physics.add.existing(ground4);
		ground4.body.setImmovable(true);
		ground4.body.moves = false;

		this.add.image(2100, 990, "ground6");

		let ground5 = this.add.tileSprite(2500, 1000, 300, 400, "tile");
		this.physics.add.existing(ground5);
		ground5.body.setImmovable(true);
		ground5.body.moves = false;

		this.add.image(2500, 990, "ground7");

		/////////////////////////TOP PLATFORM///////////////////////////////////////
		let ground6 = this.add.tileSprite(-5, 470, 200, 20, "tile");
		this.physics.add.existing(ground6);
		ground6.body.setImmovable(true);
		ground6.body.moves = false;

		this.add.image(-5, 470, "ground1");

		let ground7 = this.add.tileSprite(580, 470, 800, 20, "tile");
		this.physics.add.existing(ground7);
		ground7.body.setImmovable(true);
		ground7.body.moves = false;

		this.add.image(580, 470, "ground3");

		let ground8 = this.add.tileSprite(1450, 470, 800, 20, "tile");
		this.physics.add.existing(ground8);
		ground8.body.setImmovable(true);
		ground8.body.moves = false;

		this.add.image(1450, 470, "ground3");

		let ground9 = this.add.tileSprite(2100, 470, 290, 20, "tile");
		this.physics.add.existing(ground9);
		ground9.body.setImmovable(true);
		ground9.body.moves = false;

		this.add.image(2100, 470, "ground2");

		///////////////////////////////RECEPTION//////////////////////////////////////
		let reception = this.add.tileSprite(400, 770, 160, 60, "tile");
		this.physics.add.existing(reception);
		reception.body.setImmovable(true);
		reception.body.moves = false;

		this.add.image(400, 770, "reception");

		this.add.text(340, 650, "RECEPTION", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontSize: 20,
			color: "black",
		});
		this.add.text(355, 620, "Hyper Island", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontSize: 15,
			color: "black",
		});

		this.add.image(400, 715, "teo");

		///////////////////////////////ROOTS CAFE///////////////////////////////////////
		let rootsCafe1 = this.add.tileSprite(700, 770, 160, 60, "tile");
		this.physics.add.existing(rootsCafe1);
		rootsCafe1.body.setImmovable(true);
		rootsCafe1.body.moves = false;
		let rootsCafe2 = this.add.tileSprite(860, 760, 160, 80, "tile");
		this.physics.add.existing(rootsCafe2);
		rootsCafe2.body.setImmovable(true);
		rootsCafe2.body.moves = false;

		this.add.image(700, 770, "roots1");
		this.add.image(860, 760, "roots2");

		this.add.text(665, 750, "ROOTS", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontSize: 20,
			color: "white",
		});
		this.add.text(685, 775, "Cafe", {
			fontFamily: "Snell Roundhand, cursive",
			fontSize: 15,
			color: "white",
		});
		this.add.image(845, 700, "rootdude");

		/////////////////////////////SOFAS/////////////////////////////////////////////////
		let sofa1 = this.add.tileSprite(1100, 770, 20, 60, "tile");
		this.physics.add.existing(sofa1);
		sofa1.body.setImmovable(true);
		sofa1.body.moves = false;
		let sofa2 = this.add.tileSprite(1130, 780, 40, 40, "tile");
		this.physics.add.existing(sofa2);
		sofa2.body.setImmovable(true);
		sofa2.body.moves = false;
		let sofa3 = this.add.tileSprite(1280, 780, 40, 40, "tile");
		this.physics.add.existing(sofa3);
		sofa3.body.setImmovable(true);
		sofa3.body.moves = false;
		let sofa4 = this.add.tileSprite(1310, 770, 20, 60, "tile");
		this.physics.add.existing(sofa4);
		sofa4.body.setImmovable(true);
		sofa4.body.moves = false;
		let sofa5 = this.add.tileSprite(1330, 770, 20, 60, "tile");
		this.physics.add.existing(sofa5);
		sofa5.body.setImmovable(true);
		sofa5.body.moves = false;
		let sofa6 = this.add.tileSprite(1360, 780, 40, 40, "tile");
		this.physics.add.existing(sofa6);
		sofa6.body.setImmovable(true);
		sofa6.body.moves = false;

		this.add.image(1120, 770, "sofa1");
		this.add.image(1290, 770, "sofa2");
		this.add.image(1350, 770, "sofa1");

		/////////////////////////////STAIRS////////////////////////////////////////////////
		let stairs1 = this.add.tileSprite(2200, 775, 50, 50, "tile");
		this.physics.add.existing(stairs1);
		stairs1.body.setImmovable(true);
		stairs1.body.moves = false;

		this.add.image(2200, 775, "stairs");

		let stairs2 = this.add.tileSprite(2150, 775, 50, 50, "tile");
		this.physics.add.existing(stairs2);
		stairs2.body.setImmovable(true);
		stairs2.body.moves = false;

		this.add.image(2150, 775, "stairs");

		let stairs3 = this.add.tileSprite(2100, 775, 50, 50, "tile");
		this.physics.add.existing(stairs3);
		stairs3.body.setImmovable(true);
		stairs3.body.moves = false;

		this.add.image(2100, 775, "stairs");

		let stairs4 = this.add.tileSprite(2050, 775, 50, 50, "tile");
		this.physics.add.existing(stairs4);
		stairs4.body.setImmovable(true);
		stairs4.body.moves = false;

		this.add.image(2050, 775, "stairs");

		let stairs5 = this.add.tileSprite(2200, 725, 50, 50, "tile");
		this.physics.add.existing(stairs5);
		stairs5.body.setImmovable(true);
		stairs5.body.moves = false;

		this.add.image(2200, 725, "stairs");

		let stairs6 = this.add.tileSprite(2150, 725, 50, 50, "tile");
		this.physics.add.existing(stairs6);
		stairs6.body.setImmovable(true);
		stairs6.body.moves = false;

		this.add.image(2150, 725, "stairs");

		let stairs7 = this.add.tileSprite(2100, 725, 50, 50, "tile");
		this.physics.add.existing(stairs7);
		stairs7.body.setImmovable(true);
		stairs7.body.moves = false;

		this.add.image(2100, 725, "stairs");

		let stairs8 = this.add.tileSprite(2200, 675, 50, 50, "tile");
		this.physics.add.existing(stairs8);
		stairs8.body.setImmovable(true);
		stairs8.body.moves = false;

		this.add.image(2200, 675, "stairs");

		let stairs9 = this.add.tileSprite(2150, 675, 50, 50, "tile");
		this.physics.add.existing(stairs9);
		stairs9.body.setImmovable(true);
		stairs9.body.moves = false;

		this.add.image(2150, 675, "stairs");

		let stairs10 = this.add.tileSprite(2200, 625, 50, 50, "tile");
		this.physics.add.existing(stairs10);
		stairs10.body.setImmovable(true);
		stairs10.body.moves = false;

		this.add.image(2200, 625, "stairs");

		/////////////////////////RANDOM BLOCKS FOR CLIMBING////////////////////////////////////
		///////1/////
		let stairs11 = this.add.tileSprite(2415, 785, 50, 30, "tile");
		this.physics.add.existing(stairs11);
		stairs11.body.setImmovable(true);
		stairs11.body.moves = false;
		this.add.image(2415, 785, "blocks");
		////////2/////
		let stairs12 = this.add.tileSprite(2625, 775, 50, 50, "tile");
		this.physics.add.existing(stairs12);
		stairs12.body.setImmovable(true);
		stairs12.body.moves = false;
		this.add.image(2625, 775, "blocks");
		///////3//////
		let stairs13 = this.add.tileSprite(2310, 735, 50, 50, "tile");
		this.physics.add.existing(stairs13);
		stairs13.body.setImmovable(true);
		stairs13.body.moves = false;
		this.add.image(2310, 735, "blocks");
		///////4//////
		let stairs14 = this.add.tileSprite(2520, 720, 50, 50, "tile");
		this.physics.add.existing(stairs14);
		stairs14.body.setImmovable(true);
		stairs14.body.moves = false;
		this.add.image(2520, 720, "blocks");
		////////5//////
		let stairs15 = this.add.tileSprite(2625, 665, 50, 50, "tile");
		this.physics.add.existing(stairs15);
		stairs15.body.setImmovable(true);
		stairs15.body.moves = false;
		this.add.image(2625, 665, "blocks");
		///////6///////
		let stairs16 = this.add.tileSprite(2520, 600, 50, 50, "tile");
		this.physics.add.existing(stairs16);
		stairs16.body.setImmovable(true);
		stairs16.body.moves = false;
		this.add.image(2520, 600, "blocks");
		//////7//////
		let stairs17 = this.add.tileSprite(2625, 545, 50, 50, "tile");
		this.physics.add.existing(stairs17);
		stairs17.body.setImmovable(true);
		stairs17.body.moves = false;
		this.add.image(2625, 545, "blocks");
		//////8/////
		let stairs18 = this.add.tileSprite(2520, 480, 50, 50, "tile");
		this.physics.add.existing(stairs18);
		stairs18.body.setImmovable(true);
		stairs18.body.moves = false;
		this.add.image(2520, 480, "blocks");
		////////9//////
		let stairs19 = this.add.tileSprite(2415, 675, 50, 50, "tile");
		this.physics.add.existing(stairs19);
		stairs19.body.setImmovable(true);
		stairs19.body.moves = false;
		this.add.image(2415, 675, "blocks");
		//////10//////
		let stairs20 = this.add.tileSprite(2310, 610, 50, 50, "tile");
		this.physics.add.existing(stairs20);
		stairs20.body.setImmovable(true);
		stairs20.body.moves = false;
		this.add.image(2310, 610, "blocks");
		//////11/////
		let stairs21 = this.add.tileSprite(2415, 545, 50, 50, "tile");
		this.physics.add.existing(stairs21);
		stairs21.body.setImmovable(true);
		stairs21.body.moves = false;
		this.add.image(2415, 545, "blocks");

		//////////////////////////////////////////TABLES/////////////////////////////////////////////

		let table1 = this.add.tileSprite(2100, 420, 130, 10, "tile");
		this.physics.add.existing(table1);
		table1.body.setImmovable(true);
		table1.body.moves = false;
		let tableLegs1 = this.add.tileSprite(2050, 443, 10, 35, "tile");
		this.physics.add.existing(tableLegs1);
		tableLegs1.body.setImmovable(true);
		tableLegs1.body.moves = false;
		let tableLegs2 = this.add.tileSprite(2150, 443, 10, 35, "tile");
		this.physics.add.existing(tableLegs2);
		tableLegs2.body.setImmovable(true);
		tableLegs2.body.moves = false;

		let table2 = this.add.tileSprite(1740, 420, 130, 10, "tile");
		this.physics.add.existing(table2);
		table2.body.setImmovable(true);
		table2.body.moves = false;
		let tableLegs3 = this.add.tileSprite(1690, 443, 10, 35, "tile");
		this.physics.add.existing(tableLegs3);
		tableLegs3.body.setImmovable(true);
		tableLegs3.body.moves = false;
		let tableLegs4 = this.add.tileSprite(1790, 443, 10, 35, "tile");
		this.physics.add.existing(tableLegs4);
		tableLegs4.body.setImmovable(true);
		tableLegs4.body.moves = false;

		let table3 = this.add.tileSprite(1440, 420, 130, 10, "tile");
		this.physics.add.existing(table3);
		table3.body.setImmovable(true);
		table3.body.moves = false;
		let tableLegs5 = this.add.tileSprite(1390, 443, 10, 35, "tile");
		this.physics.add.existing(tableLegs5);
		tableLegs5.body.setImmovable(true);
		tableLegs5.body.moves = false;
		let tableLegs6 = this.add.tileSprite(1490, 443, 10, 35, "tile");
		this.physics.add.existing(tableLegs6);
		tableLegs6.body.setImmovable(true);
		tableLegs6.body.moves = false;

		let table4 = this.add.tileSprite(1140, 420, 130, 10, "tile");
		this.physics.add.existing(table4);
		table4.body.setImmovable(true);
		table4.body.moves = false;
		let tableLegs7 = this.add.tileSprite(1090, 443, 10, 35, "tile");
		this.physics.add.existing(tableLegs7);
		tableLegs7.body.setImmovable(true);
		tableLegs7.body.moves = false;
		let tableLegs8 = this.add.tileSprite(1190, 443, 10, 35, "tile");
		this.physics.add.existing(tableLegs8);
		tableLegs8.body.setImmovable(true);
		tableLegs8.body.moves = false;

		this.add.image(2100, 437, "table");
		this.add.image(1740, 437, "table");
		this.add.image(1440, 437, "table");
		this.add.image(1140, 437, "table");

		/////////////////////////////////////////LAMPS////////////////////////////////////////////

		let lamp1 = this.add.tileSprite(1900, 150, 10, 370, "tile");
		this.physics.add.existing(lamp1);
		lamp1.body.setImmovable(true);
		lamp1.body.moves = false;
		let lampShade1 = this.add.tileSprite(1900, 350, 30, 30, "tile");
		this.physics.add.existing(lampShade1);
		lampShade1.body.setImmovable(true);
		lampShade1.body.moves = false;

		let lamp2 = this.add.tileSprite(1590, 150, 10, 370, "tile");
		this.physics.add.existing(lamp2);
		lamp2.body.setImmovable(true);
		lamp2.body.moves = false;
		let lampShade2 = this.add.tileSprite(1590, 350, 30, 30, "tile");
		this.physics.add.existing(lampShade2);
		lampShade2.body.setImmovable(true);
		lampShade2.body.moves = false;

		let lamp3 = this.add.tileSprite(1290, 150, 10, 370, "tile");
		this.physics.add.existing(lamp3);
		lamp3.body.setImmovable(true);
		lamp3.body.moves = false;
		let lampShade3 = this.add.tileSprite(1290, 350, 30, 30, "tile");
		this.physics.add.existing(lampShade3);
		lampShade3.body.setImmovable(true);
		lampShade3.body.moves = false;

		this.add.image(1900, 170, "lamp");
		this.add.image(1590, 170, "lamp");
		this.add.image(1290, 170, "lamp");

		/////////////////////////////////////////////PIPES/////////////////////////////////////////////

		let pipe1 = this.add.tileSprite(1700, 580, 60, 200, "tile");
		this.physics.add.existing(pipe1);
		pipe1.body.setImmovable(true);
		pipe1.body.moves = false;
		let pipe2 = this.add.tileSprite(1500, 580, 60, 200, "tile");
		this.physics.add.existing(pipe2);
		pipe2.body.setImmovable(true);
		pipe2.body.moves = false;
		let pipe3 = this.add.tileSprite(1700, 845, 60, 200, "tile");
		this.physics.add.existing(pipe3);
		pipe3.body.setImmovable(true);
		pipe3.body.moves = false;
		let pipe4 = this.add.tileSprite(1500, 845, 60, 200, "tile");
		this.physics.add.existing(pipe4);
		pipe4.body.setImmovable(true);
		pipe4.body.moves = false;
		let pipe5 = this.add.tileSprite(250, 445, 60, 60, "tile");
		this.physics.add.existing(pipe5);
		pipe5.body.setImmovable(true);
		pipe5.body.moves = false;
		let pipe6 = this.add.tileSprite(900, 445, 60, 60, "tile");
		this.physics.add.existing(pipe6);
		pipe6.body.setImmovable(true);
		pipe6.body.moves = false;

		giovanniPlayer = this.physics.add.sprite(
			30,
			770,
			"runninggiovanni",
			"runningG0.png"
		);
		giovanniPlayer.setScale(0.8);
		giovanniControls = this.input.keyboard.createCursorKeys();
		giovanniPlayer.setCollideWorldBounds(true);
		this.physics.world.setBounds(0, 0, 10000, 1500);

		coins = this.physics.add.sprite(0, 0, "coins", "coins00.png");
		coins.setScale(0.04);

		coinGroup = this.physics.add.staticGroup({
			key: "coins",
			frameQuantity: 60,
			immovable: true,
		});
		coins.enableBody = true;

		var coinChildren = coinGroup.getChildren();

		//for (var i = 0; i < coinChildren.length; i++) {
		for (var i = 0; i < coinChildren.length; i++) {
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
			coinChildren[51].setPosition(1600, 220);
			coinChildren[52].setPosition(1650, 220);
			coinChildren[53].setPosition(1700, 220);
			coinChildren[54].setPosition(1750, 220);
			coinChildren[55].setPosition(1800, 220);
			coinChildren[56].setPosition(1850, 220);
			coinChildren[57].setPosition(1900, 220);
			coinChildren[58].setPosition(1950, 220);
			coinChildren[59].setPosition(2000, 220);
		}

		coinGroup.refresh();

		/* 		timerText = this.add.text(100, 50, "30000", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
			fontSize: 20,
			color: "black",
		}); */
		this.initialTime = 10;
		timerText = this.add.text(32, 32, convertTimeToSeconds(this.initialTime));
		// Each 1000 ms call beforeAndAfterZero
		callBeforeAndAfterZero = this.time.addEvent({
			delay: 1000,
			callback: beforeAndAfterZero,
			callbackScope: this,
			loop: true,
		});

		scoreText = this.add.text(30, 50, "0", {
			fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
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
		console.log(giovanniPlayer.y > 1000);

		if (giovanniPlayer.y > 1000) {
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
		this.scene.add("highscore", HighscorePage, true);
		this.scene.remove("Giovanni");
	}

	resetGameFunction() {
		giovanniPlayer.setPosition(30, 700);
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

		coins.anims.play("coinsAnimation", true);
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
		scoreText.text = score + "/60";
		console.log(score);
	}
	timerUpdate(timer) {
		const date = new Date();
		console.log(date);
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
		timerText.setText(`Time's up!`);
	} else {
		this.initialTime -= 1; // One second
		timerText.setText(convertTimeToSeconds(this.initialTime));
	}
}

export default Giovanni;
