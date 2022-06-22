var trex, trex_running
var forest,forestImage
var burger,burgerImage,burgerG
var mango,mangoImage,mangoG
var bomb,bombImage,bombG
var electric,electricImage,electricG
var gameover,gameoverImage

var score=0

//var PLAY
//var END

function preload(){
trex_running = loadAnimation("trex-0.png","trex-10.png","trex-20.png","trex-30.png","trex-40.png","trex-50.png")
forestImage = loadImage("light forest aakhree umeed.jpg")
bombImage = loadImage("bomb-154456_960_720.webp")
electricImage = loadImage("unnamed.png")
burgerImage = loadImage("1503001226-sonic-jr-burger.png")
mangoImage = loadImage("928_1647320862435.webp")
}

function setup(){
  createCanvas(920, 300);
  
  forest = createSprite(120,90,50,20);
  forest.addImage("forest",forestImage);
  forest.velocityX=-4
  forest.scale=1.5
  

  trex = createSprite(120,200,30,50);
  trex.addAnimation("running", trex_running);


  score=0

  
  burgerG= new Group()
  mangoG= new Group()
  bombG= new Group()
  electricG= new Group()


}

function draw(){
  
  background(180)
  
  trex.scale=0.25

  if(forest.x < 0){
    forest.x = width/2
  } 
if(keyDown("UP_ARROW")){
trex.y=trex.y-2
}

if(keyDown("DOWN_ARROW")){
  trex.y=trex.y+2
  }

 
    createBurger()
    createMango()
    createBomb()
    createElectric()



    drawSprites();
  }



 
  


function createBurger(){
  if (World.frameCount % 230==0){
  var burger = createSprite(1100,Math.round(random(20,200)),10,10)
  burger.addImage(burgerImage)
  burger.velocityX = -7
  burger.lifetime = 300
  burger.scale = 0.06
  burgerG.add(burger)
  }
}


function createBomb(){
  if (World.frameCount % 250==0){
  var bomb = createSprite(1100,Math.round(random(20,200)),10,10)
  bomb .addImage(bombImage)
  bomb.velocityX = -7
  bomb.lifetime = 300
  bomb.scale=0.05
  bombG.add(bomb)
  }
}
function createMango(){
  if (World.frameCount % 300==0){
  var mango = createSprite(1100,Math.round(random(20,200)),10,10)
  mango .addImage(mangoImage)
  mango.velocityX = -7
  mango.lifetime = 300
  mango.scale=0.09
  mangoG.add(mango)
  }
}
function createElectric(){
  if (World.frameCount % 315==0){
  var electric = createSprite(1100,Math.round(random(20,200)),10,10)
  electric .addImage(electricImage)
  electric.velocityX = -7
  electric.lifetime = 300
  electric.scale=0.08
  electricG.add(electric)
  }
}



