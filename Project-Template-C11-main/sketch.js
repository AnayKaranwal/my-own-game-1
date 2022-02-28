var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  
  createCanvas(800,900);
  
// Moving background
path=createSprite(400,300);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.5;

//creating boy running
boy = createSprite(180,750,30,30);
//boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(80,500,200,1000);


leftBoundary.visible = false;


rightBoundary=createSprite(725,500,200,1000);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  if(keyDown("right")){
    boy.x+=10;
  }
  
  if(keyDown("left")){
    boy.x-=10;
  }
  
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 600 ){
    path.y = height/2;
 }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
