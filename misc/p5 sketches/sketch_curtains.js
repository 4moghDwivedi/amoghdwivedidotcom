let w, h;

let r, gmin, gmax, bmin, bmax;

let mouseVal;

function setup() {
  // Create a canvas that fills the entire browser window
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  w = width;
  h = height;

  // r = 255;

  // gmin = random(255);
  // gmax = random(gmax, 255);

  // bmin = random(255);
  // bmax = random(bmax, 255);

  r = 250;

  gmin = 40;
  gmax = 80;

  bmin = 100;
  bmax = 150;

  frameRate(3);
}

function draw() {
background(12, 12, 0, 155);
frameRate(random(5,10));

setMouseVal();

fill(255, 0, 0, 15);
textFont('Veranda')
text("12 July 2026", width * 0.8, height * 0.95);

// fill(0, 0, 0);
// textFont('Veranda')
// text("curtains", width * 0.1, height * 0.1);

for(let i = 0; i < random(900, 1100); i++){

  makeCurtain(random(-1, 1), random(random(0.01, 0.1)));
}

}

function makeCurtain(start, size){
  push();
  translate((start + size) / 2, - h * 0.5);
    angleMode(DEGREES);
  rotate(random(-mouseVal, mouseVal));
  rectMode(CORNERS);
  noStroke();
  fill(random(r), random(gmin, gmax), random(bmin,bmax), random(0, 15));
  rect(w * start, h * -2, w * (start+size), h * 2);


  pop();

}

function setMouseVal(){

  if(mouseX < 250){
    mouseVal = map(mouseX, 0, width/2, 20, 2, true);
  }  
  else if(mouseX >= 250){
    mouseVal = map(mouseX, width/2, width, 2, 20, true);
  } 
  else{
    mouseVal = -3;
  }

}