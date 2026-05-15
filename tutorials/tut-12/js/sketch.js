
let canvas;


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
   
}


function mouseMoved() {
   drawThing(mouseX, mouseY);
      drawThing(mouseX-50, mouseY+75);

}

function drawThing(_x, _y) { 
    strokeWeight(0);
    fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(_x, _y, 30, 30);}