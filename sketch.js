const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16
var blocks1, blocks2, blocks3, blocks4, blocks5, blocks6, blocks7, blocks8, blocks9;
var polygon, sling;
var backImg, birdImg;


function preload(){
    birdImg = loadImage("bird.png");
    backImg = loadImage("background.png");
}

function setup(){
    createCanvas(1200, 600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    stand1 = new Ground(550,300,250,10);
    stand2 = new Ground(900,170,200,10);

    block1 = new Box(460,275,30,40);
    block2 = new Box(490,275,30,40);
    block3 = new Box(520,275,30,40);
    block4 = new Box(550,275,30,40);
    block5 = new Box(580,275,30,40);
    block6 = new Box(610,275,30,40);
    block7 = new Box(640,275,30,40);
    block8 = new Box(490,235,30,40);
    block9 = new Box(520,235,30,40);
    block10 = new Box(550,235,30,40);
    block11 = new Box(580,235,30,40);
    block12 = new Box(610,235,30,40);
    block13 = new Box(520,195,30,40);
    block14 = new Box(550,195,30,40);
    block15 = new Box(580,195,30,40);
    block16 = new Box(550,155,30,40);

    blocks1 = new Box(840,145,30,40);
    blocks2 = new Box(870,145,30,40);
    blocks3 = new Box(900,145,30,40);
    blocks4 = new Box(930,145,30,40);
    blocks5 = new Box(960,145,30,40);
    blocks6 = new Box(870,105,30,40);
    blocks7 = new Box(900,105,30,40);
    blocks8 = new Box(930,105,30,40);
    blocks9 = new Box(900,65,30,40);


    polygon = Bodies.circle(200,200,30);
    World.add(world, polygon);

    sling = new Slingshot(this.polygon, {x:100, y:200});
}


function draw(){
    background(backImg);
    Engine.update(engine);

    ground.display();

    stand1.display();
    stand2.display();

    fill("blue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("green")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("red");
    block13.display();
    block14.display();
    block15.display();
    fill("orange")
    block16.display();

    fill("purple")
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill("pink")
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill("yellow")
    blocks9.display();

    imageMode(CENTER)
    image(birdImg, this.polygon.position.x, this.polygon.position.y,60,60);

    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
  }


function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(this.polygon, {x: 200, y: 200})
        sling.attach(this.polygon);
    }
}