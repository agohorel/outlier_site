p5.disableFriendlyErrors = true;
var numLines, dampX, dampY, dampen;

function setup() {
  can = createCanvas(800, 800);
  pixelDensity(1);
  noSmooth();
  centerCanvas();
  numLines = 20;
  t = 5;
  damp = 0.1;
}

function centerCanvas() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  can.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function touchMoved(){
  dampX = map(mouseX, 0, width, 1, 15);
  dampY = map(mouseY, 0, height, 1, 15);
  dampen = dampX + dampY / 2;
  return false;
}

function draw() {
  clear();
  translate(width / 2, height / 2);
  rotate(radians(45));

  dampX = map(mouseX, 0, width, .1, .6);
  dampY = map(mouseY, 0, height, .1, .6);
  dampen = dampX + dampY / 2;
  
    for (var i = 0; i < numLines; i++) {
    stroke(0);
    strokeWeight(i*.5);
    point(x1(t*dampen, i / 4, i*1.5), x1(t, i / 4, i*1.5));
    point(x1(t, i / 4, i*1.5), x1(t*dampen, i / 4, i*1.5));
    strokeWeight(1);
    line(x1(t*dampen, i / 4, i*1.5), x1(t, i / 4, i*1.5), x1(t, i / 4, i*1.5), x1(t*dampen, i / 4, i*1.5));
    
  }
  t += 0.15 * dampen;
}

function x1(t, param, magni) {
  return (sin(t / param / 8 * dampen) * magni) * (cos(t / param / 8 * dampen) * magni);
}
