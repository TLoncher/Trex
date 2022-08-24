
var box;
function setup() {
  createCanvas(400,400);
box=createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
 
  drawSprites()
  if(keydown(RIGHT_ARROW)){
    box.position.x=box.position.x+5
  }
  /*if(keyIsdown(LEFT_ARROW)){
    box.position.x=box.position.x-5
  }
  if(keyIsdown(UP_ARROW)){
    box.position.y=box.position.y-5
  }
  if(keyIsdown(DOWN_ARROW)){
    box.position.y=box.position.y+5
  }*/
}





