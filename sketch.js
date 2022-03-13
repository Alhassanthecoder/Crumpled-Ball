
var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1920, 1080);

 
 

	ball_options={
		IsStatic: false,
		restitution: 0.3,
		friction: 0 ,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball = Matter.Bodies.circle(700,700,10,ball_options, 1);
	World.add(world,ball);
	
    groundObj = new ground(width/2, 670, width, 20)
	leftSide = new ground(1100,600,20,120)

	Engine.run(engine);
  
}

function keyPressed() {
if (keycode === UP_ARROW) {

ball_options={


}

}
}

function draw() {
  rectMode(CENTER);
  background(0);

  
  drawSprites();
 
}




