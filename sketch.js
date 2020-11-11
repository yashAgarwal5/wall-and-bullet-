var bullet ,wall
var speed,wheigt
var thickness;

function setup() {
createCanvas(1600,400);

 bullet= createSprite(50,200,50,50);
 wall= createSprite(1500,200,60,height/2);

speed=random(55,90);
wheigt=random(400,1500);
thickness=random(22,83);

bullet.velocityX=speed;

}

function draw() {
  background('black');  
  drawSprites();

  bullet.depth=wall.depth;
  bullet.depth=bullet.depth+1;

if(wall.x-bullet.x < (bullet.width+wall.width)/2){
bullet .velocityX=0;
var damage=0.5 * wheigt * speed * speed/(thickness*thickness*thickness);

if(damage>10){
  bullet.shapeColor=color(255,0,0);
}

if(damage<10){
  bullet.shapeColor=color(0,255,0);
}

}
}