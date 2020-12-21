//Create variables here
var dogImg, dogImg1 ; 
var database; 
var dog, foodS, foodStock; 

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(250, 300, 150,150); 
  dog.addImage(dogImg);
  dog.scale = 0.15;
  foodStock = database.ref('food');
  console.log(foodStock);
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);
  drawSprites();
  fill("black");
  text("food remaining:"+ foodS,400,350);
  //add styles here

}

function readStock(data){
  console.log(data);
foodS = data.val();
}


