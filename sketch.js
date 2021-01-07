
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(400,250,300,30);
    bobObject1 = new Bob(400,450,40);
	rope1 = new Rope(bobObject1.body,roofObject.body, -bobDiameter*2 , 0);
	
	bobObject2 = new Bob(480,450,40);
	rope2 = new Rope(bobObject2.body,roofObject.body, -bobDiameter*2 , 0);
	
	bobObject3 = new Bob(560,450,40);
	rope3 = new Rope(bobObject3.body,roofObject.body, -bobDiameter*2 , 0);
	
	bobObject4 = new Bob(320,450,40);
	rope4 = new Rope(bobObject4.body,roofObject.body, -bobDiameter*2 , 0);
	
	bobObject5 = new Bob(240,450,40);
	rope5 = new Rope(bobObject5.body,roofObject.body, -bobDiameter*2 , 0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofObject.display();

  rope1.display();
  bobObject1.display();
  
  rope2.display();
  bobObject2.display();
  
  rope3.display();
  bobObject3.display();
  
  rope4.display();
  bobObject4.display();
  
  rope5.display();
  bobObject5.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:-200,y:-200})
	}
}
