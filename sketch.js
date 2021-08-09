
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper,paperImg;


function preload(){
	paperImg=loadImage("paper.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper=createSprite(200,640);
	paper.addImage(paperImg);
	paper.scale=0.2;
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function mouseDragged(){
	paper.position.x=mouseX
	paper.position.y=mouseY
}

function mouseReleased(){
	paper.velocityY=2
	paper.visible=false
}





