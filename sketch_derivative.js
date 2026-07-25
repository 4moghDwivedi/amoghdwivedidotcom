let cx, cy;
let rBase;
let r = [0, 0, 0, 0];

let bg;

let fps = [3, 14, 17, 19]; // this is not the correct terminology
// let fps = [1, 7, 8, 9]; // this is not the correct terminology


let updateRate;

let a = [25, 2, 12, 120];

let pie = [100, 120, 125, 130];

let arcSizes = [112, 99, 98, 97];

let outOffsets = [60, 120, 190];

let eraserRotates = [54, 8, 0, 234, 7, 54];
let eraserStrokeWeights = [0, 0, 0, 0, 0, 0];

let numLines;
let numSubLines;
let lineVal;

let pause;

let blip;

let direction;

//to do

function setup() {
  // Create a canvas that fills the entire browser window
  // createCanvas(500, 500);

  let canvas = createCanvas(500, 500);
    canvas.parent('sketch-holder');

  pause = 1;
  blip = 0;

  direction = 1;

  frameRate(60);

  cx = width/2;
  cy = height/2;
  rBase = 0;

  bg = random(200, 255);

  updateRate = 3;

  lineVal = 110;
  numSubLines = 2;

  angleMode(DEGREES);
}

function draw() {
  background(bg, 225);

  drawHooks();
  drawOuterCircles();
  drawCirc();
  drawErasers();

  if (blip == 1) 
    drawText();

  if(pause == 1){
    updateR();
    updateBG();
    updateErasers();
    updateLines();
    
  }

  if ((frameCount % 60) == 0){
    blip = !(blip);
    updateArcs();
  }
}

function drawText(){
  noStroke();
  fill(0);
  textSize(5);
  textAlign(CENTER);
  text("July 4 2026", width * 0.9, height * 0.9);
}

function drawHooks(){

  noFill();
  strokeWeight(1);
  stroke(0);
  // circle(cx, cy, 200);

  for(let i = 0; i < numLines; i++){
    push();
    translate(cx, cy);
    strokeWeight(1);
    let p = 360/numLines;
    line(0, 0,
        150*cos(r[0] + (i*p)),
        150*sin(r[0]+ (i*p)));
        strokeWeight(3);
    point(150*cos(r[0] + (i*p)),
        150*sin(r[0]+ (i*p)));
    pop();

    for(let j = 1; j < numSubLines; j++){
      push();

      translate(cx, cy);
      stroke(0, 0, 0, bg/j);
      strokeWeight(1/(5*j));
      line(
      150 * cos(r[0] + (i*p)),
      150 * sin(r[0] + (i*p)),
      lineVal * cos(r[2] + (i*p)),
      150/j * sin(r[2] + (i*p))
      );
      pop();
    }

  }

}

function drawCirc(){

  for(let i = 0; i < 4; i++){

    push();
    translate(cx,cy);
    rotate(r[i]);
    fill(255, 0, 0, a[i]);
    noStroke();
    arc(0, 0, arcSizes[i], arcSizes[i], 0, pie[i]);
    pop();

  }

}

function drawErasers(){
  noStroke();
  fill(bg);
  circle(cx, cy, 30, 30);


  for(let i = 0; i < eraserRotates.length; i++){
    push();
    translate(cx, cy);
    rotate(eraserRotates[i]);
    noFill();
    stroke(bg);
    strokeWeight(eraserStrokeWeights[i]);
    ellipse(0, 0, random(50, 51) - (i*10), random(180, 181));

    pop();
  }

}

function updateErasers(){
  if(frameCount % fps[1] == 0){
    eraserRotates[floor(random(eraserRotates.length))] += random(90);
  }

  if (frameCount % fps[1] == 0){
  
    for (let i =0; i< eraserStrokeWeights.length; i ++){
    eraserStrokeWeights[i]= random(0.5);
  }

  }
}

function drawOuterCircles(){

  for (let j = 2; j > 0; j--){
    for(let i = 0; i < 4; i++){
      push();
      translate(cx,cy);
      rotate(r[i]);
      fill(255 - j*j*j, 0, 0, a[i] - (j*j*j));
      noStroke();
      arc(0, 0,
          arcSizes[i] + (j*50), arcSizes[i] + (j*50),
          j*50 + outOffsets[j], pie[i] + outOffsets[j]);
      pop(); 
    }
  }
}

function updateR(){
  rBase += updateRate;

  for(let i = 0; i < 4; i++){

    if(frameCount % fps[i] == 0){

      r[i] = rBase * direction;

    }
  }

}

function mousePressed(){

  pause= !(pause);
  direction *= -1;

}

function mouseReleased(){

  pause= !(pause);

}

function updateBG(){
  if(frameCount % fps[3] == 0){
    bg = random(250, 255);
  }
}

function updateLines(){
   if(frameCount % fps[3] == 0){
      numLines = floor(random(5));

      fps[0] = floor(random(1, 4));

      lineVal = random(90, 110);
      numSubLines = random(2, 4);
  }


}

function updateArcs(){

  //alpha
  for (let i = 0; i < 4; i++){
    a[i] = random(200);
    pie[i] = random(100, 130);
    arcSizes[i] = random(97, 112);
    outOffsets[i] = random(60, 190);
  }

  // let pie = [100, 120, 125, 130];

// let arcSizes = [112, 99, 98, 97];




}