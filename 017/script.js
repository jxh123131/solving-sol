var canvasWidth = 500;
var canvasHeight = 500;
var x_min = 0;
var x_max = canvasWidth/2;
var y_min = 0;
var y_max = canvasHeight/2;

function setup()
  {
  createCanvas(canvasWidth, canvasHeight);
  background('black');
  }

function draw()
  {
  stroke(255);
  x_min = 0;
  x_max = canvasWidth/2;
  y_min = 0;
  y_max = canvasHeight/2;

  for (var y = y_min + 10;
  y < y_max;
  y += 10
  )
  
    {
    line(x_max, y, x_min, y); // Horizontal lines on the top left corner
    }
  
  for (var x = 10;
  x <= x_max;
  x += 10
  )
  
    {
    line (250,0,250,500); // Vertical line on the middle
    line (0,250,500,250); // Horizontal line on the middle
    }
  
  x_min = canvasWidth/2;
  x_max = canvasWidth;

  for (y = y_min + 10;
  y < y_max;
  y += 10
  )
  
  for (x = 10;
  x <= canvasWidth/2;
  x += 10
  )
  
    {
    line (x_min+x,y_max,x_min+x,y_min); // Vertical lines on the top right corner
    }
  
  x_min = 0;
  x_max = canvasWidth/2;
  y_min = canvasHeight/2;
  y_max = canvasHeight;
  
  for (y = y_min + 10;
  y < y_max;
  y += 10
  )

  for (x = 10;
  x <= x_max;
  x += 10
  )
  
    {
    line (x_min+x,y_min,x_max,y_max-x); // Upper half diagonal down on the bottom left corner
    line (x_min,x+y_min,x_max-x,y_max); // Bottom half diagonal down on the bottom left corner
    line (x_min,y_min,x_max,y_max); // Middle diagonal down on the bottom left corner
    }
    
  x_min = canvasWidth/2;
  x_max = canvasWidth;
  y_min = canvasHeight/2;
  y_max = canvasHeight;

  for (y = y_min + 10;
  y < y_max;
  y += 10
  )

  for (x = 10;
  x <= x_max;
  x += 10
  )
  
    {
    line (x_min,x+y_min,x+x_min,y_min); // Upper half diagonal up on the bottom right corner
    line (x_min+x,y_max,x_max,x+y_min); // Bottom half diagonal up on the bottom right corner
    }
    
  }