let dim;

function setup() {
  // Create a canvas that fills the entire browser window
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  frameRate(5);
  angleMode(DEGREES);
}

function draw() {
background(0, 220);
push();
translate(random(-15, 15));
rotate(random(-5, 5));

  dim = floor(random(3, 9));

  dim += 1;

drawRectangle();
pop();

drawLines();
}

function drawRectangle(){
  rectMode(RADIUS);


  for(let j = 1; j < dim; j++){
    for(let i = 1; i < dim; i++){

      push();

      translate(width * i/dim, height * j/dim);
      stroke(random(12));
      strokeWeight(random(5));

      if (floor(random(100)) < 1)  rotate(random(-30, 30));
      else rotate(0);

      if (floor(random(100)) < 1) rect(0, 0, random(4), floor(random(4)), 0.1);
      else rect(0, random(-5, 5), random(4), floor(random(4)));

      pop();
    }
  }


}

function drawLines(){

  let previousX, previousY;

  let firstX, firstY;

  previousX = floor(random(1, dim-1));
  previousY = floor(random(1, dim-1));

  firstX = previousX;
  firstY = previousY;

  let newX, newY;


  newX = floor(random(1, dim-1));
  newY = floor(random(1, dim-1));

  for(let i = 0; i < 7  ; i++){
    if (floor(random(100)) < 50){
      stroke(random(4, 90));
      strokeWeight(random(4));
      line(width * previousX/dim, height * previousY/dim, width * newX/dim, height * newY/dim);

      previousX = newX;
      previousY = newY;

      newX = floor(random(1, dim-1));
      newY = floor(random(1, dim-1));
    }

  }

    line(width * previousX/dim, height * previousY/dim, width * firstX/dim, height * firstY/dim);


}