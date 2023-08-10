var INICIO = 0
var MEIO = 1
var FIM = 2
var gameState = MEIO

var catpou, catpouImg;

var birdAnimation;
var dog, dogImg
var water, waterImg
var portion, portionImg;

var score;

var fundoImg;
var chao, chaoImg;
var sound;
var playButton,playButtonImg;

var btn


function preload(){
catpouImg = loadImage ("./assets/catpou.png");

birdAnimation = loadAnimation ("./assets/bird1.png", "./assets/bird2.png","./assets/bird3.png","./assets/bird4.png","./assets/bird5.png");
dogImg = loadImage("./assets/dog.png");
waterImg = loadImage ("./assets/water.png");
portionImg = loadImage ("./assets/portion.png");

fundoImg = loadImage ("./assets/background2.jpg");
chaoImg = loadImage ("./assets/chão.png");
sound = loadSound ("./assets/Música.mp3");

playButtonImg = loadImage ("./assets/PlayButton.png")

}



function setup(){
createCanvas(1600,750);

// btn = createSprite(800,350);
// btn.addImage(playButtonImg);

chao = createSprite (200, 630, 400, 20);
chao.addImage(chaoImg);
chao.debug = false;
chao.velocityX = -5;

catpou = createSprite (180,610,20,50);
catpou.addImage(catpouImg);
catpou.scale = 0.8

invisibleGround = createSprite(800,870,1600,10);
invisibleGround.visible = false;

score = 0;

}


function draw()
{

    background(fundoImg);

        /*
        playButton = createImg("./assets/PlayButton.png");
        playButton.position(800, 350);
        playButton.size(100,100);
        playButton.mouseClicked(gameplay);
        */
        
      //  btn.visible = true
      
/*
        if(mousePressedOver(btn))
        {
            gameplay();
            btn.visible = false;
        }
    */
        if(chao.x < 0)
        {
            chao.x = width/ 2;
        }

        
        if(gameState === MEIO)
        {
            textSize(30)
            fill("black")
            text("Score: "+ score, 50,50);
            score = score + Math.round(getframeRate()/60);
            
            spawObstacles();
            spawBirds();
            spawPortions();
            //camera.position.x = catpou.position.x
            
            if(catpou.x > width/2)
            {
                catpou.x = width/2;
            }
            
            if(catpou.x < width*0.05)
            {
                catpou.x = width * 0.05;
            }
            
         
            
            if(keyDown('a')){
            catpou.x = catpou.x - 10
            }
            
            if(keyDown('d')){
            catpou.x += 10;
            }
            
            if(keyDown("space") && catpou.y >= 570){
            catpou.velocityY = -15
            }
            
            //gravidade
            catpou.velocityY = catpou.velocityY + 0.7;
            
            catpou.collide(invisibleGround);
            
            if(birdsGroup.isTouching(trex)){
            gameState = FIM;
            }
            
            if(obstaclesGroup.isTouching(catpou)){
            gameState = FIM;
            }
            
        }

    drawSprites();

}

function gameplay()
{
  
       
       
        
    
}

function spawObstacles(){

if(frameCount % 160 === 0){
var obstacle = createSprite(camera.position.x + 800,640,40,40);
obstacle.velocityX = -10
obstacle.scale = 0.6
obstacle.lifetime = 170;
var rand = Math.round(random(1,2));
switch(rand) {
case 1: obstacle.addImage(dogImg);
break;
case 2: obstacle.addImage(waterImg);
break;
default: break;
}
obstaclesGroup.add(obstacle);
}
}

function spawBirds(){
    
if(frameCount % 150 === 0){
var bird = createSprite(camera.position.x + 800,400,40,40);
bird.addAnimation("birdin", birdAnimation);
bird.velocityX = -10 
bird.scale = 0.6;
bird.lifetime = 170;
bird.y = Math.round(random(20,300));

birdsGroup.add(bird);
}
}

function spawPortions(){
    
if(frameCount % 270 === 0){
var portion = createSprite(camera.position.x + 800,670,40,40);
portion.addImage("portinon", portionImg);
portion.velocityX = -10 
portion.scale = 0.4;
portion.lifetime = 170;

portionsGroup.add(portion);
}
}