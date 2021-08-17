var ship, shipImg;
var sea, seaImg;

function preload() {
  shipImg = loadAnimation("ship-1.png", "ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup() {
  createCanvas(400, 400);
  sea = createSprite(100, 90, 200, 20);
  sea.addImage("sea", seaImg);
  sea.x = sea.width / 2;

  ship = createSprite(200, 200, 20, 50);
  ship.addAnimation("moving", shipImg);
  ship.scale = 0.2;
}

function draw() {
  background("blue");

  sea.velocity.x = -2;

  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }

  drawSprites();
}