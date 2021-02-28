
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(400,400,1000,10);
ground2 = new Ground(590,399,600,50);
dustbin1 = new Dustbin(490,200,120,10);
dustbin2 = new Dustbin(585,100,20,95);
dustbin3 = new Dustbin(455,100,20,85);
paper1 = new Paper(50,200,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  //keyPressed();
  
}
function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:40,y:-100});
	}
}


