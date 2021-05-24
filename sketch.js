
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, dustbin, paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Dustbin class takes coordinates of the bottom box and accordingly creates the side boxes
	dustbin = new Dustbin(600, 650, 200, 20);
	World.add(world, dustbin);

	ground = new Ground(width/2, 660, width, 10);
 	World.add(world, ground);

	paper = new Paper(50,640,30);
	World.add(world, paper);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  ground.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:85});
	}

} 
