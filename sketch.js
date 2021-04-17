const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg,snowBody,snowImg,snow,snowImg2

function preload(){
  bg=loadImage("snow3.jpg")
  snowImg=loadImage("snow4.webp")
  snowImg2=loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  

}

function draw() {
  background(bg);  
  
  Engine.update(engine);
  snoe()
 // rectMode(CENTER)
  //rect(snowBody.position.x,snowBody.position.y,50,50)

  drawSprites();
  
}

function snoe(){
  if(frameCount%80===0){
  snow=createSprite(Math.round(random(0,750)),0,0)
  snow.scale=0.1
 snow.velocityY=1
  snow.addImage("l",snowImg)
  
  
 // snowBody=Bodies.rectangle(snow.x,snow.y,50,50,{isStatic:false,friction:0.1,restitution:0.5})
 // World.add(world,snowBody)
 // snow.x=snowBody.position.x
// snow.y=snowBody.position.y
  }
}