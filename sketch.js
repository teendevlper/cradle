var shp,shap,ball1,ball2,ball3,ball4,ball5,wr1,wr2,wr3,wr4,wr5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;


    shp   = new shape(250,100,400,40);
	
	ball1 = new ball(200,250,30);
	ball2 = new ball(250,200,30);
	ball3 = new ball(300,200,30);
	ball4 = new ball(400,200,30);
	ball5 = new ball(400,100,30);
	
	wr1 = new string(ball1.body,{x: 151, y: 100});
	wr2 = new string(ball2.body,{x: 200, y:100});
	wr3 = new string(ball3.body,{x: 250, y: 100});
	wr4 = new string(ball4.body,{x: 300, y: 100});
	wr5 = new string(ball5.body,{x: 350, y: 100});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  shp.display();
 
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 
  wr1.display();
  wr2.display();
  wr3.display();
  wr4.display();
  wr5.display();

}



