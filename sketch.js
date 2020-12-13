var canvas;

var database;

var gameState = 0;

var playerCount;

var form1, form2, player, game;

var allPlayers;

var players;

var player1, player1_running1, player1_running2;

var player2, player2_running1, player2_running2;

var player3, player3_running1, player3_running2;

var player4, player4_running1, player4_running2;

function preload() {
  player1_running1 = loadAnimation("images/Player 1.1.1.png", "images/Player 1.1.2.png", "images/Player 1.1.3.png");
  player1_running2 = loadAnimation("images/Player 1.2.1.png", "images/Player 1.2.2.png", "images/Player 1.2.3.png");

  player2_running1 = loadAnimation("images/Player 2.1.1.png", "images/Player 2.1.2.png", "images/Player 2.1.3.png");
  player2_running2 = loadAnimation("images/Player 2.2.1.png", "images/Player 2.2.2.png", "images/Player 2.2.3.png");

  player3_running1 = loadAnimation("images/Player 3.1.1.png", "images/Player 3.1.2.png", "images/Player 3.1.3.png");
  player3_running2 = loadAnimation("images/Player 3.2.1.png", "images/Player 3.2.2.png", "images/Player 3.2.3.png");

  player4_running1 = loadAnimation("images/Player 4.1.1.png", "images/Player 4.1.2.png", "images/Player 4.1.3.png");
  player4_running2 = loadAnimation("images/Player 4.2.1.png", "images/Player 4.2.2.png", "images/Player 4.2.3.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  database = firebase.database();

  /*player1 = createSprite(100, 200);
  player1.addAnimation("running", player1_running1);

  player2 = createSprite(300, 200);
  player2.addAnimation("running", player2_running1);

  player3 = createSprite(500, 200);
  player3.addAnimation("running", player3_running1);

  player4 = createSprite(700, 200);
  player4.addAnimation("running", player4_running1);*/

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(153, 217, 234);

  if(playerCount === 4) {
    game.update(2);
  }

  if(gameState === 2) {
    clear();
    game.play();
  }

  if(gameState === 3) {
    game.end();
  }

  //drawSprites();
}