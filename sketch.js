const Engine = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var box, box2;
var ground;

function setup(){
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  box = new Box(200,300,50,50);
  box2=new Box(230,100,30,30);
ground=new Ground(200,380,400,20);
}
function draw()
{
  background(0);
  Engine.update(engine);

  box.display();
  box2.display();
  ground.display();
}
