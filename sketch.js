
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new paper(100,350,50);

	box = new box(650,625,10,75);

	box2 = new box(750,700,50,10);

	box3 = new box(775,650,10,75);

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);

  paper.x = mouseX;

  paper.y = mouseY;
  

  background(0);
  
  drawSprites();
 
}

display(){
	paper.display();
}