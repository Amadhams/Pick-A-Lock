var wall1, wall2, wall3, wall4;
var bar;
var box;
var speed = 4
var score = 0
function preload(){

}

function setup() {
  createCanvas(1600,1600);
  wall1 = createSprite(200,400,10,400)
  wall1.shapeColor = "green"
  wall2 = createSprite(300,400, 10, 400)
  wall2.shapeColor = "green"
  wall3 = createSprite(250,600,110,10)
  wall3.shapeColor = "green"
  wall4 = createSprite(250,200,110,10)
  wall4.shapeColor = "green"
  box = createSprite(250,500,40,40,)
  box.shapeColor = "blue"
  bar = createSprite(250,400, 80,10)
  bar.shapeColor = "red"
  
  bar.velocityY = speed
  

}

function draw() {
  background(255,255,255); 
  if (bar.collide(wall3)) {
		bar.velocityY = speed*-1;
	}
  if (bar.collide(wall4)) {
		bar.velocityY = speed;
	}
  textSize(20)
  text("Score: "+ score, 100,200)
  

  if (bar.overlap(box) && keyIsDown(13)) {
    box.y = random(250,550)
    bar.velocityY = speed
    speed = speed+1
    score = score+2
  }

  if (keyIsDown(13) && !bar.overlap(box)) {
    score = score-0.5
  }

  if (score < 0) {
    bar.velocityY = 0
    text("Game Over", 310, 200)
  }

    

  drawSprites();
}

