
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5,roof,ground,rope1,rope2,rope3,rope4,rope5;
var dot1,dot2,dot3,dot4,dot5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(970,250,50,50);
	
	bob2 = new Bob(610,250,50,50);
	bob3 = new Bob(700,250,50,50);
	bob4 = new Bob(800,250,50,50);
	bob5 = new Bob(880,250,50,50);

	roof=new Roof(800,50,600,25);
	ground=new Roof(800,400,800,25);

	dot1=new Dot(1000,50,1,1);
	dot2=new Dot(700,50,1,1);
	dot3=new Dot(600,50,1,1);
	dot5=new Dot(900,50,1,1);
	dot4=new Dot(800,50,1,1);	 
	rope1 = new Rope(dot4.body,bob4.body,200,200);
	rope2 = new Rope(dot1.body,bob1.body,200,200);
	rope3 = new Rope(dot3.body,bob2.body,200,200);
	rope4 = new Rope(dot2.body,bob3.body,200,200);
	rope5 = new Rope(dot5.body,bob5.body,200,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,9,67);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  dot1.display();
  dot2.display();
  dot3.display();
  dot4.display();
  dot5.display();
  drawSprites();
  keyPressed();
  
}

	function keyPressed() {
		if (keyCode === UP_ARROW) {
  
		  Matter.Body.applyForce(dot2.body,dot2.body.position,{x:0,y:85});
	  
		}
  }
  



