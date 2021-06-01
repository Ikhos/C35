var balloonT;

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  balloonT = new Balloon();
  
}

function draw() {
  
  background(255,255,255);
  text("Press Down Arrow To Move Balloon", 100, 100);
  
  if(keyIsDown(DOWN_ARROW)) {
    balloonT.y++;
    balloonT.getPosY();
    balloonT.updatePosY(balloonT.y);
  }
  
  if(keyIsDown(UP_ARROW)) {
    balloonT.y--;
    balloonT.getPosY();
    balloonT.updatePosY(balloonT.y);
  }
  
  if(keyIsDown(LEFT_ARROW)) {
    balloonT.y--;
    balloonT.getPosX();
    balloonT.updatePosX(balloonT.x);
  }
  
  if(keyIsDown(RIGHT_ARROW)) {
    balloonT.y++;
    balloonT.getPosX();
    balloonT.updatePosX(balloonT.x);
  }

  balloonT.display();
  drawSprites();
}
