var dog, dogImg, happyDog, database, foodS, foodStock;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() 
{
  database = firebase.database();
  console.log(database);
  createCanvas(500, 500);
  dog = createSprite(250, 250, 10, 10);
  dog.addImage(dogImg);
  dog.scale = 0.5;
  //var dogPosition = database.ref('dog/position');
  //dogPosition.on("value", readPosition, showError);
  foodstock = database.ref('Food');
  foodStock.on("value, readStock");
  textSize(20);
}


function draw() 
{  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happyDog);
    //Food = Food - 1;
  }
  drawSprites();
  fill("black");
  text("food remaining: " + foodS, 170, 200);
  textSize(13);
  text("Note: Use UP Arrow Key To Feed The Dog Milk!", 250, 50);
  fill("white");
  stroke(6);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{
  if(x<=0)
  {
    x = 0;
  }
  else 
  {
    x = x - 1;
  }
  database.ref('/').update
  (
    {
      Food:x
    }
  )
}



