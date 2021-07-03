var ship,ship_running
var sea,sea_back
function preload(){
sea_back=loadImage("sea.png")
ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(200,200);
 
sea=createSprite(200,200)
sea.scale=1.5
sea.addImage("back",sea_back)

sea.velocityX=-4
ship = createSprite(184,173,20,50);
ship.addAnimation("running", ship_running);
ship.scale = 0.3;
ship.velocityX=0.0

}

function draw() {
 
  background("");
  
if(sea.x<0){
sea.x=sea.width/2;
}
  
 drawSprites()
}