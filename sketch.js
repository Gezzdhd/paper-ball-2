
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground= new Ground(600,700,1200,20)
	
box1=new Box(1000,630,20,100)
box2=new Box(800,630,20,100)
box3=new Box(900,670,200,20)

ball= new Paper(100,600,20,20)
Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
 box1.display();
 box2.display();
 box3.display();
 ball.display();
}


function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:40, y:-40})
	}
}
