const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function setup() {
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;


    var ball_options={
        isStatic:true
    }
    
        ball=Bodies.circle(100,435,50,ball_options);
        World.add(world,ball);

     tank1 = new Tanker(160,410,50,25);
     tank = new Tanker(100,460,100,50);
     tank2 = new Tanker(100,450,100,25);
     tank2.shapeColor="brown";

     var ball1_options={
        isStatic:true
    }
    
        ball1=Bodies.circle(100,435,50,ball1_options);
        World.add(world,ball1);

     tanka = new Tanker(160,410,50,25);
     tankb = new Tanker(100,460,100,50);
     tankc = new Tanker(100,450,100,25);
     tankc.shapeColor="brown";

     var ball2_options={
        isStatic:true
    }
    
        ball2=Bodies.circle(100,435,50,ball2_options);
        World.add(world,ball2);

     tankx = new Tanker(160,410,50,25);
     tanky = new Tanker(100,460,100,50);
     tankz = new Tanker(100,450,100,25);
     tankz.shapeColor="brown";

     var ball3_options={
        isStatic:true
    }
    
        ball3=Bodies.circle(100,435,50,ball3_options);
        World.add(world,ball3);

     tankk = new Tanker(160,410,50,25);
     tankl = new Tanker(100,460,100,50);
     tankm = new Tanker(100,450,100,25);
     tankm.shapeColor="brown";
     ground = new Ground(250,500,500,30);

}

function draw() {
    Engine.update(engine);
background(0);
tank1.display();
tanka.display();
tankx.display();
tankk.display();

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,50,50);
tank.display();
ground.display();
tank2.display();
tankb.display();
tankc.display();
tankl.display();
tankm.display();
tanky.display();
tankz.display();


}


/*function keyReleased() {
    // Call the shoot method for the cannon.
}*/