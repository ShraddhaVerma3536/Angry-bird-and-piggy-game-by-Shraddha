const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var piggy1,piggy2;
var log1;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,50);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    
    piggy1 = new Pig(800,350);

    log1 = new Log(810,260,300,PI/2);

    bird = new Angrybird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    piggy1.display();
    log1.display();
    bird.display();
}