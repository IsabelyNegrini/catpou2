var catpou, catpouImg;

var bird, birdAnimation;
var dog, dogImg
var water, waterImg
var portion, portionImg

var fundoImg;
var chao, chaoImg;
var sound;



function preload(){
catpouImg = loadImage ("./assets/catpou.png");

birdAnimation = loadImage ("./assets/bird1.png");
dogImage = loadImage("./assets/dog.png");
waterImg = loadImage ("./assets/water.png");
portionImg = loadImage ("./assets/water.png");

fundoImg = loadImage ("./assets/background2.jpg");
chaoImg = loadImage ("./assets/chão.png");
sound = loadSound ("./assets/Música.mp3")
}



function setup(){
createCanvas(1600,750);

chao = createSprite (200, 630, 400, 20);
chao.addImage(chaoImg);
chao.debug = true;
chao.velocityX = 5;

catpou = createSprite (180,600,20,50);
catpou.addImage(catpouImg);

invisibleGround = createSprite(200,700,400,10);
invisibleGround.visible = false;

}


function draw(){
background(fundoImg);

spawObstacles()

if(keyDown('a')){
catpou.x = catpou.x - 10
}

if(keyDown('d')){
catpou.x += 10;
}

if(keyDown("space")){
catpou.velocityY = -10
}

//gravidade
catpou.velocityY = catpou.velocityY + 1;

catpou.collide(invisibleGround);

drawSprites()
}

function spawObstacles(){

if(frameCount % 60 === 0){
var obstacle = createSprite(camera.position.x+400,330,40,40);
obstacle.setCollider("circle",0,0,200,200);
obstacle.velocityX = +10
var rand = Math.round(random(1,3));
switch(rand) {
case 1: obstacle.addImage(birdAnimation);
break;
case 2: obstacle.addImage(dogImg);
break;
case 3: obstacle.addImage(waterImg);
break;
default: break;
}
}
}