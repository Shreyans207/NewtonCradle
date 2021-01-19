const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;
	startBobPositionX = width/2;
	startBobPositionY = height/4+500;

	roofObject = new Roof(400,250,300,30);
    bobObject1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	rope1 = new Rope(bobObject1.body,roofObject.body, -bobDiameter*2 , 0);
	
	bobObject2 = new Bob(startBobPositionX-bobDiameter*1,startBobPositionY,bobDiameter);
	rope2 = new Rope(bobObject2.body,roofObject.body, -bobDiameter*1 , 0);
	
	bobObject3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	rope3 = new Rope(bobObject3.body,roofObject.body, -bobDiameter*0 , 0);
	
	bobObject4 = new Bob(startBobPositionX+bobDiameter*1,startBobPositionY,bobDiameter);
	rope4 = new Rope(bobObject4.body,roofObject.body, bobDiameter*1 , 0);
	
	bobObject5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	rope5 = new Rope(bobObject5.body,roofObject.body, bobDiameter*2 , 0);
	
	Engine.run(engine)
  
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
	Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-100,y:-100})
	}
}

function drawLine(constraint) { 
	 bobBodyPosition=constraint.bodyA.position;
	 roofBodyPosition=constraint.bodyB.position;
	 roofBodyOffset=constraint.pointB; roofBodyX=roofBodyPosition.x+roofBodyOffset.x ;
	 roofBodyY=roofBodyPosition.y+roofBodyOffset.y ;
	 line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);

}
