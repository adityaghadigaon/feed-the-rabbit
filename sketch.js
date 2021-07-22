var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimg
var leaf,leafimg
var orangeleaf,orangeleafimg
var grass,grassimg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg=loadImage('apple.png')
  leafimg=loadImage("leaf.png")
  orangeleafimg=loadImage("orangeleaf.png")
  grassimg=loadImage("grass.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX

  spawnapple()
  spawnleaf()
  drawSprites();

}
function spawnapple(){
 
  if(frameCount%60==0){
apple=createSprite(200,20,20,20)


apple.addImage(appleimg)
apple.scale=0.08
apple.velocityY=4
apple.lifetime=80
apple.x=Math.round(random(20,350))


  }
}
 function spawnleaf(){

    if(frameCount%60==0){
  leaf=createSprite(150,20,20,20)
  
  
  leaf.addImage(leafimg)
  leaf.scale=0.08
  leaf.velocityY=4
  leaf.lifetime=80
  leaf.x=Math.round(random(20,350))
  
    }

  }













