const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball, ground;

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;

var options ={
  isStatic: true
}

 ground = Bodies.rectangle(400,350,800,20,options);

var ballOptions={
  restitution: 0.8
}

ball = Bodies.circle(400,100,20,ballOptions);

World.add(world,ground);
World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}