var fixedRect, movingRect;
var ob1 , ob2 ;

function setup() {
  createCanvas(1200,800);
  ob1 = createSprite(600, 400, 50, 80);
  ob1.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite (300,200,50,80);
  ob1.shapeColor = "green";

  ob2 = createSprite (100,300,80,70);
  ob2.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (touch ()) {

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
   else 
   {
     
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

   }

  drawSprites();

}

function touch() {

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
   
      return true ;
     
}
else {
  return false ;
  
}
}