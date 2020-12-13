class Game {
  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data) {
       gameState = data.val();
    });
  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if(gameState === 0) {
      form1 = new Form1();
      form1.display();
    }
    
    if(gameState === 1) {
      player = new Player();

      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }

      form1.hide();

      form2 = new Form2();
      form2.display();
    }

    player1 = createSprite(100, 200);
    player1.addAnimation("running", player1_running1);

    player2 = createSprite(300, 200);
    player2.addAnimation("running", player2_running1);

    player3 = createSprite(500, 200);
    player3.addAnimation("running", player3_running1);

    player4 = createSprite(700, 200);
    player4.addAnimation("running", player4_running1);

    players = [player1, player2, player3, player4];
  }

  play() {
    form2.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined) {
      background(153, 217, 234);
      //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for(var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = 200;
        players[index-1].x = x;
        players[index-1].y = y;

        /*if(index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = players[index-1].y;
        }*/
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null) {
      //player.distance +=10
      gameState = 3;
      //player.update();
    }

    /*if(player.distance > 3860){ 
      gameState = 2;
    }*/
   
    drawSprites();
  }

  end() {
    console.log("Game Ended");
  }
}