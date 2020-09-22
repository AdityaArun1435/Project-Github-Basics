var ghost_animation
var ghost;






function preload() {
ghost_animation=loadAnimation("ghost1.png","ghost2.png","ghost3.png");



}

function setup(){
createCanvas(800,200)
  ghost=createSprite(200,100,20,40)
  ghost.addAnimation("ghost1", ghost_animation);
  ghost.scale=0.4;
}

function draw(){
background ("limegreen")
  drawSprites();
}