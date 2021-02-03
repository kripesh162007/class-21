function setup() {
  createCanvas(400,400);

  box= createSprite(200, 200, 50, 50);
  box2=createSprite(300,200,100,100);
  a=createSprite(70,70,50,50)
  b=createSprite(330,70,50,50)
  c=createSprite(70,330,50,50)
  d=createSprite(330,330,50,50)



  box.shapeColor="green";
  box2.shapeColor="blue";
  a.shapeColor="pink";
  b.shapeColor="yellow";
  c.shapeColor="orange";
  d.shapeColor="purple"


  box.debug=true;
  box2.debug=true;
  a.debug=true;
  b.debug=true;
  c.debug=true;
  d.debug=true;

}


function draw() {
  background("black");

  box2.x=mouseX;
  box2.y=mouseY;

  
if(touch(a,box2)){
  a.shapeColor="red";
  box2.shapeColor="red";
}
else if(touch(d,box2)){
  d.shapeColor="red";
  box2.shapeColor="red"
}

else{
  a.shapeColor="pink";
  box.shapeColor="green";
  box2.shapeColor="blue";
  d.shapeColor="purple";
}


  drawSprites();
}
















