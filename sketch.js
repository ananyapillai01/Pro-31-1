var particle = [];
var plinko = [];
var Divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground1 = new Ground(750, 400, 100, 10);

  for(var k = 0; k <= width; k = k + 80){
    Division.push(new Divisions (k, height - divisionHeight / 2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new plinko(j, 75));
  }

  for(var j = 15; j <= width-10; j = j + 50){
    plinkos.push(new plinko(j, 175));
  }
  
}

function draw() {
  background(255,255,255);  

  ground1.display();

  if(frameCount % 60 === 0){
    particles.push(new particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
    score++;
  }
  for(var j = 0; j < particles.legth; j++){
    particles[j].display();
  }
  for(var k = 0; k < Divisions.length; k++){
    Divisions[k].display();
  }
  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }
  drawSprites();
}