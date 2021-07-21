const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var B1,B2,B3,B4,B5;
var ball;
var slingshot;

function preload() {
  //  getBackgroundImg();
 //   collisionSound = loadSound("Music/Collision.mp3");
} 

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    B1=new Buildings(700,350,50,50);
    B2=new Buildings(700,300,50,50);
    B3=new Buildings(700,250,50,50);
    B4=new Buildings(700,200,50,50);
    B5=new Buildings(700,150,50,50);
    
    ball = new Ball(500,200,20);
    
    slingshot = new SlingShot(ball.body,{x:500, y:200});
}

function draw(){
    
        background("blue");
    
        

    Engine.update(engine);
ground.display();

stroke("black");
strokeWeight(4);

fill("red");
B1.display();
fill("yellow");
B2.display();
fill("pink");
B3.display();
fill("orange");
B4.display();
fill("green");
B5.display();

ball.display();

slingshot.display();    
}

function mouseDragged(){
Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
    slingshot.fly();
}

