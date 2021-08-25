var cat1,mouse1
var imgcat1,imgcat2,imgcat4,imggarden,imgmouse1,imgmouse2,imgmouse4



function preload() {
    //load the images here
    imgcat1 = loadImage("images/cat1.png");
    imgcat2 = loadAnimation("images/cat2.png","images/cat3.png");
    imgcat4 = loadImage("images/cat4.png");
    imggarden = loadImage("images/garden.png")
    imgmouse1 = loadImage("images/mouse1.png")
    imgmouse2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    imgmouse4 = loadImage("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat1 = createSprite(800,650);
    cat1.addImage("gato",imgcat1);
    cat1.scale = 0.2
    mouse1 = createSprite(200,650);
    mouse1.addImage("rato",imgmouse1);
    mouse1.scale = 0.2
}

function draw() {

    background(imggarden);
    //Write condition here to evalute if tom and jerry collide
    if(cat1.x - mouse1.x < (cat1.width - mouse1.width)){
        cat1.addImage("cat3",imgcat4);
        mouse1.addImage("mouse3",imgmouse4);
        cat1.velocityX = 0;
        cat1.x = cat1.x + 100
        mouse1.changeImage("mouse3");
        cat1.changeImage("cat3");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    mouse1.addAnimation("rato2",imgmouse2);
    mouse1.changeAnimation("rato2");
    cat1.addAnimation("gato2",imgcat2);
    cat1.changeAnimation("gato2");
    cat1.velocityX = -5
}

}
