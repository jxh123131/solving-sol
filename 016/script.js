var canvasWidth = 500;
var canvasHeight = 500;

function setup() {
createCanvas(canvasWidth, canvasHeight);
background('black');
}

function draw() {
  stroke(255);
  strokeWeight(18); // Thick horizontal lines
  for (var y = 0;
  y < canvasHeight;
  y += 50
  )
    {
    line(500, y, 0, y);
    }
  strokeWeight(8); // Neither thick nor thin vertical lines
  for (var x = 0;
  x <= canvasWidth;
  x += 50
  )
    {
    line (x, 500, x, 0);
    }
  strokeWeight(1); // Thin diagonal lines
  for (var z = 0;
  z <= canvasWidth;
  z += 50
  )
    {
    line (0,z,z,0);
    line (z,canvasHeight,canvasWidth,z);
    }
  }