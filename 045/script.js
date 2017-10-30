var canvasWidth = 500;
var canvasHeight = 500;

function setup() {
createCanvas(canvasWidth, canvasHeight);
background('black');
}

function draw() {
  stroke("red");  // Horizontal red line on the upper left corner
  strokeWeight(5);
  line (100, 100, 310, 50); 

  stroke("blue"); // Vertical blue line on the upper left corner
  strokeWeight(9);
  line (50,250,20,20); 

  stroke("green"); // Diagonal dark green line on the upper left corner
  strokeWeight(1);
  line (250,80,70,250); 

  stroke("white");  // Thick vertical white line on the bottom right corner
  strokeWeight(20);
  line (450,480,470,250);

  stroke("yellow"); // Thick vertical yellow line on the upper right corner
  strokeWeight(30);
  line (350,20,330,250);

  stroke("purple"); // Horizontal dark purple line on the bottom right corner
  strokeWeight(10);
  line (200,480,420,450);

  stroke(110,110,110); // Diagonal bright green line on the right corner
  strokeWeight(10);
  line (10,270,240,300);

  stroke("cyan"); // Diagonal vertical light blue line on the bottom left corner
  strokeWeight(1);
  line (40,300,10,490);

  stroke("magenta");  // Diagonal light purple line on the bottom left corner
  strokeWeight(7);
  line (230,320,40,460);

  stroke("pink"); // Diagonal pink line on the middle
  strokeWeight(2);
  line (200,220,390,380);

  stroke("brown");  // Diagonal vertical brown line on the bottom middle
  strokeWeight(1);
  line (260,290,170,495);

  stroke(10,220,0); // Diagonal light green line on the right corner
  strokeWeight(4);
  line (490,120,330,295);
  }