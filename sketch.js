
var jake, jakeImg;
var path, invisiblePathLeft, invisiblePathRight, pathImg;
var gold,goldImage;
var uafo,uafoImage;
var rok,rokImage;


function preload () {
   //preloading images.
    jakeImg = loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake5.png");
  
  pathImg = loadImage("path.png");
  
} 


function setup () {
createCanvas(windowWidth,windowHeight);
   
    // creating invisible path.
    invisiblePathLeft = createSprite(0,390,20,400)
    invisiblePathLeft.visible = false
    invisiblePathRight = createSprite(400,350,20,400) 
    invisiblePathRight.visible = false
  
    
  
   //creating path.
    path = createSprite(330,300, 100,100);
    path.addImage("path", pathImg);
  
  
   
 
  


    //scaling the path.
    path.scale =1.5;

  //creating jake.
  jake = createSprite(width/2,height-100, 20, 70);
  jake.addAnimation("running", jakeImg);
  


}


function draw () { 
   background("black");
  
 
  
 
   path.velocityY = +10;
   console.log(path.y);
  
  
   if(path.y>660){
   path.y=path.height/2;
    
  } 
  
   if((touches.length > 0 || keyDown("TOUCHES")) && jake.x >=height-10) {
     jake.veloctiyX = -20;
     touches = [];
    
  }
    
   jake.x = World.mouseX;
  
  drawSprites();
}
