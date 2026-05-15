
let canvas;
let xPos=0
let yPos=0
let easing=0.1

function setup() {
    createCanvas(windowWidth, windowHeight);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    //background(220);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
xPos=xPos+(mouseX-xPos)*easing;
yPos=yPos+(mouseY-yPos)*easing;




    drawThing(xPos, yPos);

   
}

function drawThing(_x, _y) {   // 
  noFill();
  ellipse(_x, _y, 200);

  // 
  line(_x, _y, _x + 50, _y - 80);
  line(_x, _y, _x + 80, _y + 20);
   
}