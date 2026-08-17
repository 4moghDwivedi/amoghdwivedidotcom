//konnakol composition calculator
//
//1 - 0 —> add number to sum (0 is 10)
// c -> clear sum
// del/backspace -> delete last sum

// display whether the total sum is divisible by 3/6, 4/8, 5, 7.
// if divisible, how many measures?

let sum;
let stream = [];
let viewStream;
let dChecks = [false, false, false, false];
let r, g, b;

function setup() {
  // Create a canvas that fills the entire browser window
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  // createCanvas(windowWidth, windowHeight);

  sum = 0;
  viewStream='';

  textFont('Arial');
  textAlign(CENTER);

  r = random(200, 255);
  g = random(100);
  b = random(12);

}

function draw() {
background(0);

if(sum!= 0){
  displaySum();
  displayStream();
  displayDivisibility();
}
else displayInstructions();


}

function keyPressed(){

  if (key === '1'){
    stream.push(1);
  }
  if (key === '2'){
    stream.push(2);
  }
  if (key === '3'){
    stream.push(3);
  }
  if (key === '4'){
    stream.push(4);
  }
  if (key === '5'){
    stream.push(5);
  }
  if (key === '6'){
    stream.push(6);
  }
  if (key === '7'){
    stream.push(7);
  }
  if (key === '8'){
    stream.push(8);
  }
  if (key === '9'){
    stream.push(9);
  }
  if (key === '0'){
    stream.push(10);
  }
  if (key === 'c'){
    stream = [];
  }
  if (keyCode === BACKSPACE){
    stream.pop();
  }

  calculateSum();
  updateStream();
  checkDivisibility();

}

function calculateSum(){
  sum = 0;
  for (let i = 0; i < stream.length; i++){
    sum += stream[i];
  }
}

function updateStream(){

  viewStream = stream.join(' ');

}

function checkDivisibility(){

  print('hi');

  if (sum % 3 == 0){
    dChecks[0] = true;
  }
  else dChecks[0] = false;

  if (sum % 4 == 0){
    dChecks[1] = true;
  }
  else dChecks[1] = false;

  if (sum % 5 == 0){
    dChecks[2] = true;
  }
  else dChecks[2] = false;

  if (sum % 7 == 0){
    dChecks[3] = true;
  }
  else dChecks[3] = false;

 
}

function displaySum(){
  textSize(56);
  fill(255);
  text(sum, width * 0.75, height * 0.5);
}

function displayStream(){
  textSize(17);
  fill(255);
  textWrap(CHAR);
  text(viewStream, width*0.15, height*0.15, width*0.75);
}

function displayDivisibility(){
  textSize(15);
  fill(255);
  textWrap(CHAR);
  text('3/6 : ' + dChecks[0], width*0.15, height*0.75);
  if(dChecks[0] == true){
    text(sum/3 + ' units of 3', width*0.5, height*0.75);
  }

  text('4/8 : ' + dChecks[1], width*0.15, height*0.8);
  if(dChecks[1] == true){
    text(sum/4 + ' units of 4', width*0.5, height*0.8);
  }

  text(' 5   : ' + dChecks[2], width*0.15, height*0.85);
  if(dChecks[2] == true){
    text(sum/5 + ' units of 5', width*0.5, height*0.85);
  }

  text(' 7   : ' + dChecks[3], width*0.15, height*0.9);
  if(dChecks[3] == true){
    text(sum/7 + ' units of 7', width*0.5, height*0.9);
  }


}

function displayInstructions(){

  fill(255);
  textWrap(CHAR);

  push();
  textSize(112);
  textAlign(CENTER);
  if(frameCount % 120 >= 0 && frameCount % 120 <= 60) {
    strokeWeight((frameCount%120)/2);
    stroke(r, g, b);
  }
  else noStroke();
  text('K-Cal', width*0.35, height*0.35);
  pop();

  textSize(15);
  textAlign(LEFT);
  text('1 - 0:          add a phrase unit (0 is 10)', width*0.2, height*0.6);
  text('back/del:    remove previous phrase unit', width*0.2, height*0.65);
  text('c :               clear phrase', width*0.2, height*0.7);

}