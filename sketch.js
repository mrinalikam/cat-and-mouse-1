var bg_Img;
var cat,mouse;

// cat and mouse images 
var mouse3Img,mouse2Img,mouseImg;
var catImg,cat2Img,cat3Img;

function preload() {
    //load the images here
bg_Img = loadImage("images/garden.png");
catImg = loadImage("images/cat1.png");
cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
mouseImg = loadImage("images/mouse1.png");
mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
cat3Img = loadAnimation("images/cat4.png");
mouse3Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(850,630);
cat.addImage(catImg);
cat.scale = 0.2;

mouse = createSprite(100,610);
mouse.addImage(mouseImg);
mouse.scale = 0.2;


}

function draw() {
    
    background(bg_Img);
    //Write condition here to evalute if tom and jerry collide
    
    if (cat.x-mouse.x < (cat.width-mouse.width)/2){
    //if (cat.x - mouse.x < (cat.width - mouse.width)/2 && cat.y - mouse.y < (cat.height - mouse.height)/2){
        cat.velocityX=0;
    cat.addAnimation("happy",cat3Img);
    cat.changeAnimation("happy");  
   //cat.frameDelay=25;
    
   mouse.addAnimation("cheese",mouse3Img);
   mouse.changeAnimation("cheese");
    
   }

     drawSprites();

    

}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    cat.addAnimation("moving",cat2Img);
cat.changeAnimation("moving");
    cat.scale=0.2;
cat.frameDelay =25;
cat.x=cat.x-30;
}

if (keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouse_Teasing",mouse2Img);
   mouse.changeAnimation("mouse_Teasing");
    mouse.scale=0.2;
    mouse.frameDelay = 25;
}


}
