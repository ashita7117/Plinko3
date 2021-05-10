const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine,world;
var ground
var particle ;
var Gamestate = "start";
var clickTurn = 0;
var plinkos = [];
var division = [];
var divisionHeight = 300;
var width = 480;
var count = 0;
var line

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //bars 
  for (var k = 0; k <= width; k = k+80){
    division.push(new Divisor(k, 800 - divisionHeight/2,10,divisionHeight- 50));
  }

  //plinko layer 1
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75,10));
  }

//layer 2
  for (var j = 15; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,175,10));
  }

//layer3
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275,10));
  }

//layer 4
  for (var j = 15; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,375,10));
  } 
  
  //layer 5
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,475,10));
  }


   ground =new Ground(width/2,780,480,7);

}

function draw() {
  background("black");  
  Engine.update(engine);

  //mousePressed();

  text ("Score: "+ count,20,40);
  text ("500",20,600);
  text ("500",100,600);
  text ("200",190,600);
  text ("200",260,600);
  text ("100",340,600);
  text ("100",430,600);


  var line = createSprite(width/2,540,480,5);

  for(var i = 0; i < division.length; i++){
    division[i].display();
  }
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  if(particle!==null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x < 300){
        score = score+500;
        particle=null;
        if(count>=5) Gamestate = "end";
      }
    }
  }
   ground.display();
  }

function mousePressed(){
  if(Gamestate !== "end"){
    count++
    particle = new Particle(mouseX, 10,10,10)
  }
}