var players;
var player1,player2,player3,player4;
var playerright,playerleft;
var ground;
var bgimg;
var startimg;
var bg ;
function preload(){

   bgimg = loadImage("images/background.jpg")
    startimg = loadImage("images/splash.png")
    playerleft =loadAnimation("images/character4.png","images/character3.png","images/character2.png","images/character1.png")
    playerstand = loadImage("images/character1.png");
    aimImg = loadImage("images/gun-target.png")
    playerright = loadAnimation("images/character1.png","images/character2.png","images/character3.png","images/character4.png")
}
 function setup(){

    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  background = createSprite(0,0,displayWidth*2,displayHeight)

 }
 function draw() 
 {
   background(background)
  // if(gameState === 0){


   //}
    if (playerCount ===4){

      game.update(1);

    }
    if(gamestate === 0){

      background.addImage(startimg)

    }
    if(gameState === 1){
      clear();
      game.play();
      background.addImage(bgimg)
    }
    if (gameState === 2){
      
      game.end();
    }


    
 }