class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
      gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      player1 = createSprite(100,200);
      player1.addImage("plr4",playerstand);
      player2= createSprite(300,200);
      player2.addImage("plr2",playerstand);
      player3 = createSprite(500,200);
      player3.addImage("plr2",playerstand);
      player4 = createSprite(700,200);
      player4.addImage("plr1",playerstand);
     playerarray = [ player1, player2, player3, player4];
    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      Player.Players();
  
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        background("black");
        image(startimg,0,-displayHeight*4,displayWidth,displayHeight*5)
        //index of the array
        var index = 0;
        
        //x and y position of the cars
        var x;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = displayWidth - allPlayers[plr].distance;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          playerarray[index-1].x = x;
          playerarray[index-1].y = y;
  
          if (index === player.index){
            stroke(30);
            fill(rgb(151, 2, 220));
            ellipse(x,y,60,60);
            playerarray[index - 1].shapeColor = "red";
            camera.position.x = playerarray[index-1].x
            camera.position.y = playerarray[index-1].y

          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
       
      }
  
    /*  if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
    
      if (player.distance>3860){
  
        gameState = 2;
        player.rank += 1 ;
        Player.updateCarsAtEnd(player.rank);
  
      }
      */
      if (keyIsDown(LEFT_ARROW) && player.index !==null ){

        this.moveLeft();

      }
      else {

        player.changeImage("stand",playerstand)

      }
      if (keyIsDown(RIGHT_ARROW) && player.index !==null ){

        this.moveRight();

      }
      else {

        player.changeImage("stand",playerstand)

      }
      
      aimarrow();

      drawSprites();
    }
    moveLeft(){

      player.position.x -= 5
      if ( player.position.x -= 5){
        player.changeAnimation("left",playerleft)
      }

    }
    moveRight(){

      player.position.x += 5
      if ( player.position.x += 5){
        player.changeAnimation("left",playerright)
      }}
      Aimarrow(){

        var aim = createsprite(displayWidth/2-30,displayHeight/2,30,30)
        var bullets = createSprite(0,0,0,0)
        aim.addImage("aiming",aimImg);
       // if (mousePressedOver(aim)){



      //  }

      }

    
    end(){
  
      console.log("finshed");
      console.log(player.rank);
    }
  
  }
  