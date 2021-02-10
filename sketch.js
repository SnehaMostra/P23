const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var helicopter,helicopterIMG,package,packageIMG,ground;

function preload(){
    helicopterIMG=loadImage("helicopter.png");
    packageIMG=loadImage("box1.png");
}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    package = createSprite(width2,80,10,10);
    package.addImage(box1IMG);
    package.scale=0.2;
    
    helicopter=createSprite(width/2, 80, 10,10);
    helicopter.addImage(helicopterIMG);
    helicopter.scale=0.6;

    ground = createSprite(width/2, height-35, width,10);
    ground.shapeColor=color(255);

   line1 = createSprite(width/2, height-35, width,10);
   line1.shapeColor = "red";
   line2=createSprite(510,610,20,100);
   line2.shapeColor = "red";
   line3=createSprite(310,610,20,100);
   line3.shapeColor = "red";

    Engine.run(engine);
    
    packageBody = Bodies.circle(width/2 , 200 , 10 , {isStatic:true});
    world.add(world, packageBody);

    //create a Ground
    ground = Bodies.rectangle(width/2 , 650 , width, 10 , {isStatic:true});
    world.add(world, ground);
}

function draw(){
    rectMode(CENTER);
    background(0);
    package.x=packageBody.position.x
    package.y=packageBody.position.y
    Engine.update(engine);
    drawSprites();
   
}

function KeyPressed() {
    if (keyCode === DOWN_ARROW){
        Matter.body.setStatic(box1Body,false);
    }
}